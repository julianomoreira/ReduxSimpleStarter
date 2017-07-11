import React from 'react';

const VideoListItem = ({video}) => {
  // using ES6 goodies {video} as props
  // accessing props from video_list.js. see VideoListItem in video_list.js
  // const video = props.video;
  // console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src="{imageUrl}" />
        </div>
        <div className="media-right">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>

    </li>
  );
}

export default VideoListItem;