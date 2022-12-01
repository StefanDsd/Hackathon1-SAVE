import React, { useState } from "react";

function Modal({ imgLink, children, city, onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) return <button onClick={() => setIsOpen(true)}> open </button>;
  return (
    <div className="overlay" onClick={onClick}>
      <div className="modal">
        <button onClick={() => setIsOpen(false)}> close </button>
        <div className="modal-content">
          <img src={imgLink} alt="city" className="modal-image" />
          <h3 className="modal-title">{city}</h3>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
