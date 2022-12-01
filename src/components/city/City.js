import React from "react";

import Modal from "../city-modal/index";

function City({ citytitle, videosrc }) {
  return (
    <div className="city">
      <div className="title-button-container">
        <h2 className="title">{citytitle}</h2>
        <button className="button-more">
          <Modal />
        </button>
      </div>
      <iframe
        className="yt-video"
        width="560"
        height="315"
        src={videosrc}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
  );
}


export default City;
