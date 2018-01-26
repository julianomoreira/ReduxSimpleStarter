import React, { Component } from 'react';

// const video = props.video; to access the props
// a simpler way to do that is by replace argyment (props) with ({video})
const VideoListItem = ({video}) => {
  console.log(video);

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" />
        </div>

        <div className="media-body">
          <div className="media-heading"></div>
        </div>

      </div>
    </li>
  )
}

export default VideoListItem;
