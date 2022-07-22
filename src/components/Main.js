import React, { useEffect, useState } from "react";

const Main = () => {
  const [quotes, setQuotes] = useState("");
  const [quoteNumber, setQuoteNumber] = useState("");

  const loadQuotes = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setQuotes(data.slip.advice);
    setQuoteNumber(data.slip.id);
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  return (
    <div className="container">
      <h1>
        advice <span>#{quoteNumber}</span>
      </h1>
      <p>{quotes}</p>
      <svg
        id="mobile"
        xmlns="http://www.w3.org/2000/svg"
        width="295"
        height="16"
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"></path>
          <g transform="translate(138)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3"></rect>
            <rect x="14" width="6" height="16" rx="3"></rect>
          </g>
        </g>
      </svg>

      <button
        aria-label="Advice Generator"
        onClick={loadQuotes}
        className="dice"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Main;
