import React, {useRef, useEffect} from 'react'
import homeVideo from "../assets/homeVideo.mp4"
import "./Home.css"


const Home = () => {
const video = useRef(null)
useEffect(() => {
    video.current.play()
    // .then(msg => console.log('msg from play' + msg + video.current))
    // .catch(err => console.log('error from play' + err))
})

  return (
    <div className='body'>
    <section>
    <div className="home">
        <video
         ref={video}
         src={homeVideo}
         type="video/mp4"
         playsInline
         autoPlay
         loop
         muted />
         <div className='title'>
         <h1>
            What is SAVE ?
         </h1>
         </div>
    </div>
    </section>

    <section>
        <div className='city1'>
<h1>Berlin City</h1>
        </div>
    </section>

    <section>
        <div className='city2'>
<h2>Feel Free to choose city2</h2>
        </div>
    </section>

    <section>
        <div className='city3'>
        <h2>Feel Free to choose city3</h2>
        </div>
    </section>
    
    </div>
    
  )
}


export default Home;