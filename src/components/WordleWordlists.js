import React, { useEffect, useState } from "react";
import "./WordleWordlists.css";
import axios from "axios";
import WordlistButtons from "./WordlistButtons";

function WordleWordlists() {
  const [wordlists, setWordlists] = useState([]);

  async function getWordlists() {
    const wordlistsRes = await axios.get(
      "http://localhost:8000/wordle/wordlists"
    );
    setWordlists(wordlistsRes.data);
  }

  useEffect(() => {
    getWordlists();
  }, []);

  return (
    <div className="wordlists-container">
      <WordlistButtons wordlists={wordlists} />
    </div>
  );
}

export default WordleWordlists;
