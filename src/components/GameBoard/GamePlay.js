import { useEffect, useState } from "react";

import GamePiece from "./GamePiece";
import GameResult from "./GameResult";
import Circles from "./Circles";

import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";

const GamePlay = ({ playerChoice, score, setScore, reset }) => {
  const [oppChoice, setOppChoice] = useState(null);
  const [gameResult, setGameResult] = useState(null);

  const resetBoard = () => {
    setOppChoice(null);
    setGameResult(null);
    reset();
  };

  useEffect(() => {
    setTimeout(() => {
      if (!oppChoice) {
        setOppChoice(
          ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)]
        );
      } else if (!gameResult) {
        determineWinner(playerChoice, oppChoice);
      }
    }, 1000);
  }, [oppChoice]);

  const playerWin = () => {
    setGameResult("player");
    setScore(score + 1);
  };

  const playerLose = () => {
    setGameResult("computer");
    setScore(score - 1);
  };

  const determineWinner = (player, opponent) => {
    if (player === "rock") {
      if (opponent === "scissors") {
        playerWin();
      } else if (opponent === "paper") {
        playerLose();
      } else if (opponent === "rock") {
        setGameResult("tie");
      }
    } else if (player === "paper") {
      if (opponent === "rock") {
        playerWin();
      } else if (opponent === "scissors") {
        playerLose();
      } else if (opponent === "paper") {
        setGameResult("tie");
      }
    } else if (player === "scissors") {
      if (opponent === "paper") {
        playerWin();
      } else if (opponent === "rock") {
        playerLose();
      } else if (opponent === "scissors") {
        setGameResult("tie");
      }
    }
  };

  return (
    <div className='gameplay'>
      <div className='player-side'>
        <p>YOU PICKED</p>
        <GamePiece
          image={
            playerChoice === "rock"
              ? rock
              : playerChoice === "paper"
              ? paper
              : scissors
          }
          type={playerChoice}
          gradient={{
            background:
              playerChoice === "rock"
                ? "radial-gradient(circle, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%)"
                : playerChoice === "paper"
                ? "radial-gradient(circle, hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%)"
                : "radial-gradient(circle, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%)",
          }}
          inplay={true}
        />
        {gameResult === "player" && (
          <Circles />
        )}
      </div>
      {gameResult ? (
        <GameResult gameResult={gameResult} reset={resetBoard} />
      ) : (
        <></>
      )}
      <div className='opponent-side'>
        <p>THE HOUSE PICKED</p>
        {!!gameResult ? (
          <>
            <GamePiece
              image={
                oppChoice === "rock"
                  ? rock
                  : oppChoice === "paper"
                  ? paper
                  : scissors
              }
              type={oppChoice}
              gradient={{
                background:
                  oppChoice === "rock"
                    ? "radial-gradient(circle, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%)"
                    : oppChoice === "paper"
                    ? "radial-gradient(circle, hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%)"
                    : "radial-gradient(circle, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%)",
              }}
              inplay={true}
            />
            {gameResult === "computer" && (
              <Circles />
            )}
          </>
        ) : (
          <div className='waiting-container'>
            <div className='waiting'></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePlay;
