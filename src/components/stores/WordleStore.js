import axios from "axios"
import toast from 'react-hot-toast';
import { runInAction } from "mobx"

export default {
    guesses: [],
    guessesRes: [],
    currentGuess: 0,
    gameOver: false,
    won: false,
    wordlist: "",
    loading: true,
    async submitGuess() {
        await axios.post('http://localhost:8000/wordle/guess', {wordlistTitle: this.wordlist, guess: this.guesses[this.currentGuess]})
            .then(res => {
                runInAction(() => {
                    this.guessesRes[this.currentGuess] = res.data.colourArray
                })
                if (res.data.won === true) {
                    runInAction(() => {
                        this.won = res.data.won
                        this.gameOver = true
                    })
                }
                runInAction(() => {
                    this.currentGuess += 1
                    if (this.currentGuess > 5) {
                        this.gameOver = true
                    }
                })
                })
            .catch(err => {
                console.log(err)
                toast.error(err.response.data.error);
                })
    },
    async init(wordlist) {
        this.wordlist = wordlist
        this.guesses.replace(new Array(6).fill(""))
        this.currentGuess = 0

        await axios.post('http://localhost:8000/wordle/init', {wordlistTitle: this.wordlist})
            .then(res => {
                if (res.data.wordleInit) {
                    runInAction(() => {
                        this.guesses.replace(res.data.wordleInit.guesses)
                        this.guessesRes.replace(res.data.wordleInit.guessesRes)
                        this.currentGuess = res.data.wordleInit.currentGuess
                        this.gameOver = res.data.wordleInit.gameOver
                        this.won = res.data.wordleInit.won
                    })
                }
                runInAction(() => {
                    this.loading = false
                })
            })
            .catch(err => {
                console.log(err)
                toast.error("There has been an error communicating to the server.");
            })        
        
    },
    handleKeyup(e) {
        if (this.gameOver) {
            return
        }

        if (e.key === "Enter") {
            if (this.guesses[this.currentGuess].length < 5)
            {
                return
            }
            return this.submitGuess()
        }

        if (e.key === "Backspace") {
            this.guesses[this.currentGuess] = this.guesses[this.currentGuess].slice(0, this.guesses[this.currentGuess].length - 1)
            return
        }

        if (this.guesses[this.currentGuess].length < 5 && e.key.match(/^[a-zA-Z]$/)) {
            this.guesses[this.currentGuess] = this.guesses[this.currentGuess] + e.key.toLowerCase()
        }
    }
}