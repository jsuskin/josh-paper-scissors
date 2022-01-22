import React from 'react'

const GamePiece = ({ image, type, gradient, handleClick = () => {}, inplay = false }) => {
  return (
    <div
      className={`piece-border${inplay ? " inplay" : ""}`}
      style={gradient}
      onClick={() => handleClick(type)}
    >
      <div className={`piece-container${inplay ? " inplay" : ""}`}>
        <img src={image} alt={type} className={inplay ? "inplay" : ""} />
      </div>
    </div>
  );
}

export default GamePiece
