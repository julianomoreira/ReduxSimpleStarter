
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBfXK51W99oeqZCnyBRUDP7ZuoUBpSrL6s';

class App extends Component {
  constructor(){
    super();
    this.state = {
      videos: []
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      // this.setState({ videos: videos }); this is the same as above
      console.log(videos);
    });
  }
  render(){

    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.querySelector(".container"));
