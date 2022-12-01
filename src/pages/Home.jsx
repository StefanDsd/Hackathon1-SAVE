import React, {useRef, useEffect} from 'react'
import homeVideo from "../assets/homeVideo.mp4"
import "./Home.css"


const Home = () => {
const video = useRef(null)
useEffect(() => {
    video.current.play()
    .then(msg => console.log('msg from play' + msg + video.current))
    .catch(err => console.log('error from play' + err))
})

  return (
    <div className="home">
        <video
         ref={video}
         src={homeVideo}
         type="video/mp4"
         playsInline
         autoPlay
         loop
         muted />
    </div>
  )
}


export default Home;