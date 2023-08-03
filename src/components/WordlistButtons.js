import React from "react";
import { useNavigate } from "react-router-dom";

function WordlistButtons({ wordlists }) {
  function renderWordlists() {
    return wordlists.map((wordlist, i) => {
      return (
        <li className="wordlist-selection-item" key={i}>
          <button
            className="wordlist-selection-button"
            onClick={() => select(wordlist._id)}
          >
            {wordlist.title}
          </button>
        </li>
      );
    });
  }

  let navigate = useNavigate();
  async function select(id) {
    let path = `/play/${id}`;
    navigate(path);
  }

  return (
    <div>
      <ul className="wordlist-selection">{renderWordlists()}</ul>
    </div>
  );
}

export default WordlistButtons;
