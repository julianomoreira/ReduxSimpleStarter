import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // using ES6 goodies {video} as props
  // accessing props from video_list.js. see VideoListItem in video_list.js
  // const video = props.video;
  // const onVideoSelect = props.onVideoSelect;
  // console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;  

  return (
    <li onClick={ () => onVideoSelect(video) } className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
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