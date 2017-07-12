import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Create a new component. This component should produce HTML.

const API_KEY = 'AIzaSyBfXK51W99oeqZCnyBRUDP7ZuoUBpSrL6s';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
     }

     this.videoSearch('soccer');

   }

   videoSearch(term){
     YTSearch({key: API_KEY, term: term}, (videos) => {
       // ES6 feature, when the key and property name are the same remove repetitive name value
       this.setState({
         videos: videos,
         selectedVideo: videos[0]
        });
     })
   }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })} // Passing as props. This function manipulates another comp.
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

//React.render(App);






