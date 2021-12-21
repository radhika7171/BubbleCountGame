import "./App.css";
import React, { useState } from "react";

function App() {
  const [score, setScore] = useState(0);

  let numbers = [100, 200, 300, 400];
  console.log("current score", score);

  return (
    <div className="App">
      <h1>Score Board : {score}</h1>
      //
      {numbers.map((element) => {
        return (
          <button className="button" onClick={() => setScore(score + element)}>
            {element}
          </button>
        );
      })}
      <button className="button" onClick={() => setScore(score + numbers[0])}>
        {numbers[0]}
      </button>
      <button className="button" onClick={() => setScore(score + numbers[1])}>
        {numbers[1]}
      </button>
      <button className="button" onClick={() => setScore(score + numbers[2])}>
        {numbers[2]}
      </button>
      <button className="button" onClick={() => setScore(score + numbers[3])}>
        {numbers[3]}
      </button>
    </div>
  );
}

export default App;
