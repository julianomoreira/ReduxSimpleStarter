import React, { Component } from 'react';
// Rewatch the Video Selection video
// const video = props.video; to access the props
// a simpler way to do that is by replace argyment (props) with ({video})
const VideoListItem = ({video, onVideoSelect}) => { // same thing as const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  console.log(video);
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>

      </div>
    </li>
  )
}

export default VideoListItem;
