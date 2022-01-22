import GamePiece from "./GamePiece";

import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";

const BoardOpen = ({ setPlayerChoice }) => {
  return (
    <>
      <div className='triangle'>
        <div className='side side-a'></div>
        <div className='side side-b'></div>
        <div className='side side-c'></div>
      </div>
      <div className='gameboard-top'>
        <GamePiece
          image={paper}
          type='paper'
          gradient={{
            background:
              "radial-gradient(circle, hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%)",
          }}
          handleClick={setPlayerChoice}
        />
        <GamePiece
          image={scissors}
          type='scissors'
          gradient={{
            background:
              "radial-gradient(circle, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%)",
          }}
          handleClick={setPlayerChoice}
        />
      </div>
      <div className='gameboard-bottom'>
        <GamePiece
          image={rock}
          type='rock'
          gradient={{
            background:
              "radial-gradient(circle, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%)",
          }}
          handleClick={setPlayerChoice}
        />
      </div>
    </>
  );
}

export default BoardOpen
