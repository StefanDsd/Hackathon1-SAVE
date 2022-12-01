import React from "react";
import "./app.css";

function ModalDetails({ tip, tipTitle }) {
  return (
    <div>
      <ul>
        <h3>{tipTitle ? tipTitle : "placeholder tip title"}</h3>
        <li>
          {tip
            ? tip
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa "}
        </li>
      </ul>
    </div>
  );
}

export default ModalDetails;
