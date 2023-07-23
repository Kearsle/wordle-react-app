export default {
    guesses: [],
    guessesRes: [["b", "y", "g", "y", "b"],["g", "g", "g", "y", "b"],["g", "g", "g", "g", "g"],["b", "y", "g", "y", "b"],["b", "y", "g", "y", "b"],["b", "y", "g", "y", "b"]],
    currentGuess: 0,
    wordlist: "",
    submitGuess() {
        this.currentGuess += 1
    },
    init(wordlist) {
        this.guesses.replace(new Array(6).fill(""))
        this.currentGuess = 0
        this.wordlist = wordlist
    },
    handleKeyup(e) {
        if (this.currentGuess === 6) {
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