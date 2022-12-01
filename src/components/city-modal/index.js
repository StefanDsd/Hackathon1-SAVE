import React, { useState } from "react";
import "./app.css";

function Modal({ imgLink, children, city, onClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonClicked = (e) => {
    e.stopPropagation();
  };

  if (!isOpen)
    return (
      <button
        className="open-btn"
        onClick={() => setIsOpen(true)}
        onChange={(e) => buttonClicked(e)}>
        Find out more!
      </button>
    );
  return (
    <div className="overlay" onClick={() => setIsOpen(false)}>
      <div className="modal">
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          {" "}
          close{" "}
        </button>

        <img
          src={
            imgLink
              ? imgLink
              : "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          }
          alt="city"
          className="modal-image"
        />
        <h3 className="modal-title">{city}</h3>
        {children}
      </div>
    </div>
  );
}

export default Modal;
