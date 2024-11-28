// Modal.js
import React, { useEffect, useRef } from 'react';
import '../styles/Modal.css';

function Modal({ isOpen, onClose, content, day, audio }) {
  const audioRef = useRef(null);

  useEffect(() => {
    console.log(day);
    if (isOpen && day === 9 && audioRef.current) {
      console.log('Playing audio');
      audioRef.current.play();
    }
  }, [isOpen, day]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <p>{content}</p>
        <audio ref={audioRef} src={audio} />
      </div>
    </div>
  );
}

export default Modal;
