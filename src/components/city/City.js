import React from 'react'

function City({ citytitle, videosrc}) {
  return (
    <div className="city1">
          <h2 className='title'>
            {citytitle}
          </h2>
          <button>More</button>
          <iframe
            className="yt-video"
            width="560"
            height="315"
            src={videosrc}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </div>
  )
}

export default City


