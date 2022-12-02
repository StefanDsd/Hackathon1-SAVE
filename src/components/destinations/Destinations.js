import React from "react";
import "./Destinations.css";
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.jpg";
import image5 from "../../assets/5.jpg";

function Destinations() {
  return (
    <div className="destinations">
      <div className="container">
        <h1>Resorts to Visit</h1>
        <p> Around the World</p>
        <div className="img-container">
          <img className="span-3 image-grid-row-2" src={image1} alt="/" />
          <img src={image2} alt="/" />
          <img src={image3} alt="/" />
          <img src={image4} alt="/" />
          <img src={image5} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default Destinations;
