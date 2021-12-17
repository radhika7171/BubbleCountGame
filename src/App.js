import "./App.css";
import React, { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  let number = 100;

  return (
    <div className="App">
      <h1>Score Board : {score}</h1>
      <button className="button" onClick={() => setScore(score + number)}>
        {number}
      </button>
    </div>
  );
}

export default App;
