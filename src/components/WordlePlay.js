import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./WordlePlay.css";
import Guess from "./Guess";
import WordleStore from "./stores/WordleStore";
import { observer, useLocalObservable } from "mobx-react-lite";
export default observer (function WordlePlay() {
    const store = useLocalObservable(() => WordleStore)
    const [wordlist, setWordlist] = useState([]);
    const params = useParams();

    async function getWordlist() {
        const wordlistRes = await axios.get(`http://localhost:8000/wordle/wordlist/${params.wordlist}`);
        setWordlist(wordlistRes.data.wordlist);
        store.init(wordlistRes.data.wordlist._id)
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
        <h1 className="wordle-title">{wordlist.title}</h1>
        {store.guesses.map((_, i) => (
            <Guess key={i} colourRes={store.guessesRes[i]} guess={store.guesses[i]} isGuessed={i < store.currentGuess}/>
        ))}
    </div>);
})