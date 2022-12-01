import React, { useState } from "react";
import "./app.css";

function Modal({ imgLink, children, city, onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen)
    return (
      <button className="open-btn" onClick={() => setIsOpen(true)}>
        {" "}
        open{" "}
      </button>
    );
  return (
    <div className="overlay" onClick={() => setIsOpen(false)}>
      <div className="modal">
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          {" "}
          close{" "}
        </button>

        <img src={imgLink} alt="city" className="modal-image" />
        <h3 className="modal-title">{city}</h3>
        {children}
      </div>
    </div>
  );
}

export default Modal;
