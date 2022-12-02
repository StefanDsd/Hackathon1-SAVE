import React, { useState } from "react";
import "./app.css";
import ModalDetails from "../modal-details";

function Modal({ imgLink, children, city, onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen)
    return (
      <button className="open-btn" onClick={() => setIsOpen(true)}>
        Find out more!
      </button>
    );
  return (
    <div className="overlay" onClick={() => setIsOpen(false)}>
      <div className="modal">
        <img
          src={
            imgLink
              ? imgLink
              : "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          }
          alt="city"
          className="modal-image"
        />
        <div className="modal-details">
          <h2>{city}</h2>
          <ul>{children}</ul>
        </div>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          close
        </button>
      </div>
    </div>
  );
}

export default Modal;
