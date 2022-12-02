import React, { useRef, useEffect } from "react";
import homeVideo from "../assets/homeVideo.mp4";
import "./Home.css";
import City from "../components/city/City";
import Modal from "../components/city-modal";
import { berlin, paris, amsterdam } from "../tips-data";
import logo2 from "../assets/logo2.png";
import Berlin from "../assets/Berlin.jpg";

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
            <h1>What is $AV€ ?</h1>
          </div>
        </div>
      </section>
      <div>
        <City
          citytitle={"Berlin"}
          videosrc={"https://www.youtube.com/embed/hVfBQNENS9s?start=22"}
          modal={
            <Modal imgLink={Berlin} city={"Berlin"}>
              {berlin.map((e) => {
                return (
                  <ul>
                    <h3>{e.tipTitle}</h3>
                    <li>{e.tip}</li>
                  </ul>
                );
              })}
            </Modal>
          }
        />
        <City
          citytitle={"Paris"}
          videosrc={"https://www.youtube.com/embed/oz45k8EYblk?start=10"}
          modal={
            <Modal imgLink={Berlin} city={"Berlin"}>
              {paris.map((e) => {
                return (
                  <ul>
                    <h3>{e.tipTitle}</h3>
                    <li>{e.tip}</li>
                  </ul>
                );
              })}
            </Modal>
          }
        />

        <City
          citytitle={"Amsterdam"}
          videosrc={"https://www.youtube.com/embed/YaAwSaMYDyU?start=9"}
          modal={
            <Modal imgLink={Berlin} city={"Berlin"}>
              {amsterdam.map((e) => {
                return (
                  <ul>
                    <h3>{e.tipTitle}</h3>
                    <li>{e.tip}</li>
                  </ul>
                );
              })}
            </Modal>
          }
        />
      </div>
      <h1>Want to TRAVEL?</h1>
      <br />
      <h1>Want to TRAVEL CHEAP ?</h1>
      <br />
      <h1>Choose $AV€!</h1>
      <br />
    </div>
  );
};

export default Home;
