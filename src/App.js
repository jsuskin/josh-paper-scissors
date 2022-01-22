import { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import Header from './components/Header';
import RulesModal from './components/RulesModal';

function App() {
  const [score, setScore] = useState(0);
  const [rulesOpen, setRulesOpen] = useState(false);

  const handleClick = () => {
    setRulesOpen(!rulesOpen);
  }

  return (
    <div className='app'>
      <Header score={score} />
      <GameBoard score={score} setScore={setScore} />
      <RulesModal open={rulesOpen} closeModal={handleClick} />
      <div className="rules-btn-container">
        <button className="rules-btn" onClick={handleClick}>RULES</button>
      </div>
    </div>
  );
}

export default App;
