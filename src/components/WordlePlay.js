import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./WordlePlay.css";
import Guess from "./Guess";
import WordleStore from "./stores/WordleStore";
import { observer, useLocalObservable } from "mobx-react-lite";
import { PulseLoader } from "react-spinners";
export default observer (function WordlePlay() {
    const store = useLocalObservable(() => WordleStore)
    const [wordlist, setWordlist] = useState([]);
    const params = useParams();

    async function getWordlist() {
        const wordlistRes = await axios.get(`http://localhost:8000/wordle/wordlist/${params.wordlist}`);
        setWordlist(wordlistRes.data);
        store.init(wordlistRes.data.title)
    }

    useEffect(() => {
        window.addEventListener('keydown', store.handleKeyup)
        getWordlist()

        return () => {
            window.removeEventListener('keydown', store.handleKeyup)
        }
    }, [])

    return (
    <div className="wordle-container">
        {store.loading === true && (<div className="app-spinner"><PulseLoader id="pulse-loader" color="#E8EDDF" /></div>)}
        {store.loading === false && (<>
        <h1 className="wordle-title">{wordlist.title}</h1>
        {store.guesses.map((_, i) => (
            <Guess key={i} colourRes={store.guessesRes[i]} guess={store.guesses[i]} isGuessed={i < store.currentGuess}/>
        ))}
        {store.gameOver === true && (store.won ? <div className="wordle-game-over-cover"><div className="wordle-game-over-card" id="wordle-game-over-win"><h1 className="wordle-game-over">You win!</h1></div></div> : <div className="wordle-game-over-cover"><div className="wordle-game-over-card" id="wordle-game-over-loss"><h1 className="wordle-game-over">You lost.</h1></div></div>)}
        </>)}
    </div>);
})