import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBfXK51W99oeqZCnyBRUDP7ZuoUBpSrL6s';

class App extends Component {
  constructor(){
    super();
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards');
  }
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    const tacos = [ 'Guacamole', 'Beef', 'Bean' ];
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} date={new Date()} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
          videos={this.state.videos}
          tacos={tacos}
        />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.querySelector(".container"));
