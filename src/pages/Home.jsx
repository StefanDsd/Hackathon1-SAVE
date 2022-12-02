import React, { useRef, useEffect } from "react";
import homeVideo from "../assets/homeVideo.mp4";
import "./Home.css";
import logo2 from "../assets/logo2.png";

import City from "../components/city/City";

const Home = () => {
  const video = useRef(null);
  useEffect(() => {
    video.current.play();
    // .then(msg => console.log('msg from play' + msg + video.current))
    // .catch(err => console.log('error from play' + err))
  });

  return (
    <div className="body">
      <div className="logoMobile">
        <i>
          <img src={logo2} alt="logo" />
        </i>
      </div>
      <section>
        <div className="home">
          <video
            ref={video}
            src={homeVideo}
            type="video/mp4"
            playsInline
            autoPlay
            loop
            muted
          />
          <div className="save-title">
            <h1>Want to TRAVEL?</h1>
            <br />
            <h1>Want to TRAVEL CHEAP ?</h1>
            <br />
            <h1>Choose $AV€!</h1>
            <br />
          </div>
        </div>
      </section>

      {/* <CurrencyConverter /> */}
      <City
        citytitle={"Berlin"}
        videosrc={"https://www.youtube.com/embed/hVfBQNENS9s?start=22"}
      />

      <City
        citytitle={"Paris"}
        videosrc={"https://www.youtube.com/embed/oz45k8EYblk?start=10"}
      />

      <City
        citytitle={"Amsterdam"}
        videosrc={"https://www.youtube.com/embed/YaAwSaMYDyU?start=9"}
      />
    </div>
  );
};

export default Home;
