import React from "react";
import "./Guess.css"

function Guess({isGuessed, guess, colourRes}) {
    return (
        <div className="guess-container">
            {new Array(5).fill().map((_, i) => (
                <div key={i} className="guess-letter" style={{
                    backgroundColor: !isGuessed ? "#E8EDDF" : colourRes[i] === 'g' ? "#1C9C76" : colourRes[i] === 'y' ? "#ECC044" : '#242423',
                    color: !isGuessed ? "black" : "white"}}>{guess[i]}</div>
            ))}
        </div>
    )
}

export default Guess