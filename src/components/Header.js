const Header = ({ score }) => {
  
  return (
    <header>
      <div className='title'>
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </div>
      <div className='score-container'>
        <span style={{ fontSize: ".8em", fontWeight: 700, color: "hsl(229, 64%, 46%)" }}>SCORE</span>
        <span className='score'>{score}</span>
      </div>
    </header>
  );
}

export default Header
