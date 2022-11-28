import React from 'react'
import { Avatar } from '@material-ui/core'

function VideoCard({ image, title, channel, timestamp, views, channelImage}) {
  return (
    <div className='videoCard'>
       <img src={image} alt="" />
        <div className='video__info'>
            <Avatar 
                className='videoCard__avatar'
                alt={channel}
                scr={channelImage}
            />

            <div className="video__text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} . {timestamp}
                </p>

            </div>


        </div>
    </div>
  )
}

export default VideoCard
