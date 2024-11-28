// Day.js
import React from 'react';
import '../styles/Day.css';

function Day({ dayNumber, isLocked, image, onOpen }) {
  return (
    <div
      className={`day ${isLocked ? "locked" : ""}`}
      style={{ backgroundImage: `url(${image})` }} // Aplica la imagen como fondo
      onClick={() => !isLocked && onOpen(dayNumber - 1)}
    ></div>
  );
}

export default Day;
