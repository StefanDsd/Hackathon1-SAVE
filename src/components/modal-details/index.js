import React from "react";
import "./app.css";

function ModalDetails({ tipTitle, tip }) {
  return (
    <div className="modal-details">
      <ul>
        <h3>{tipTitle}</h3>
        <li>{tip}</li>
      </ul>
    </div>
  );
}

export default ModalDetails;
