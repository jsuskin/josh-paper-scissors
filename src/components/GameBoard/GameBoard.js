import { useState } from "react";
import BoardOpen from "./BoardOpen";
import GamePlay from "./GamePlay";

const GameBoard = ({ score, setScore }) => {
  const [playerChoice, setPlayerChoice] = useState(null);

  return (
    <div className='gameboard'>
      {!!playerChoice ? (
        <GamePlay
          playerChoice={playerChoice}
          score={score}
          setScore={setScore}
          reset={() => setPlayerChoice(null)}
        />
      ) : (
        <BoardOpen setPlayerChoice={setPlayerChoice} />
      )}
    </div>
  );
};

export default GameBoard;
