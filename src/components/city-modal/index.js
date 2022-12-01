import React from "react";

function Modal({ link, listItems, city }) {
  return (
    <div className="overlay">
      <div className="modal">
        <button type="button" className="close">
          close
        </button>
        <div className="modal-content">
          <img src={link} alt="city" className="modal-image" />
          <h3 className="modal-title">{city}</h3>
          <ul>{listItems}</ul>
        </div>
      </div>
    </div>
  );
}

export default Modal;
