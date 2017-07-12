import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem
      key={video.etag}
      video={video}
      onVideoSelect={props.onVideoSelect} // props from VideoList in index.js
    />
  });
  const ulStyle = {
    marginTop: '10px'
  }
  return (
      <ul className="col-md-4" style={ulStyle}>
        {videoItems}
      </ul>
  )
}

export default VideoList;