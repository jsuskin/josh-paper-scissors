import React from 'react'

const Circles = () => {
  return (
    <div className='circles'>
      <div className='circle' style={{ animationDelay: "-3s" }}></div>
      <div className='circle' style={{ animationDelay: "-2s" }}></div>
      <div className='circle' style={{ animationDelay: "-1s" }}></div>
      <div className='circle' style={{ animationDelay: "0s" }}></div>
    </div>
  );
}

export default Circles
