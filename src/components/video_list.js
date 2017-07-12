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
    <div className="row">
      <ul className="col-md-12" style={ulStyle}>
        {videoItems}
      </ul>
    </div>
  )
}

export default VideoList;