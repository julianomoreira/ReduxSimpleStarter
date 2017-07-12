import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading....</div>
  }
  const videoId = video.id.videoId;
  // String interpolation - ES6 magic below
  //const url = 'https://www.youtube.com/embed/' + videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="row">
      <div className="video-detail col-md-12">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}>

          </iframe>
        </div>
        <div className="details">
          <h1>{video.snippet.title}</h1>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;