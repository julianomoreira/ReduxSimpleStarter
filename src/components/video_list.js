import React, { Component } from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  console.log(props.onVideoSelect);
  const videoItems = props.videos.map((video) => {
    return (
        <VideoListItem
          onVideoSelect={props.onVideoSelect}
          video={video}
          key={video.etag} />
    );
  });

  return (
    <ul className="col-md-12 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
