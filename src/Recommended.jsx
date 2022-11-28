import React from 'react'
import './recommended.css'
import VideoCard from './VideoCard'

function Recommended() {
  return (
    <div className='recommended'>
      <h2>Recommended</h2>
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  )
}

export default Recommended
