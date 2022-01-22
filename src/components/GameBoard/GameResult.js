import React from "react";

const GameResult = ({ gameResult, reset }) => {
  const result =
    gameResult === "player"
      ? "WIN"
      : gameResult === "computer"
      ? "LOSE"
      : "TIED";

  return (
    <div className='result-container'>
      <p className='result'>{`YOU ${result}`}</p>
      <button className='play-again' onClick={reset}>PLAY AGAIN</button>
    </div>
  );
};

export default GameResult;
