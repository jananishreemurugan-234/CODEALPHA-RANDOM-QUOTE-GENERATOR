import React, { useState, useEffect } from "react";
import API_BASE_URL from "./config";
import "./styles.css";

function App() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  const fetchQuote = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/random-quote`);
      const data = await res.json();
      setQuote(data);
    } catch (err) {
      console.error("Error fetching quote", err);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-box">
        <p className="quote-text fade-in">"{quote.text}"</p>
        <p className="quote.author fade-in">- {quote.author}</p>
        <button
          onClick={fetchQuote}
          className="new-quote-btn">New Quote
        </button>
      </div>
  );
}

export default App;
