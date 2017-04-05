import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBfXK51W99oeqZCnyBRUDP7ZuoUBpSrL6s';

// Create a component. This component should produce HTML. The component here is an object (or class)
// so, you can't produce HTML from a class. You need to instantiate it.

// Functional component
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

// Switched from a functional component to class-based component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState = ({ videos });
      console.log(videos);
      // this.setState = ({videos: videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }

}

// Take this component's HTML and put it on the page (DOM) using ReactDOM. You need to pass an instante
//of an object, not the object itself. Then, you need to tell React where to render this App on the DOM.

ReactDOM.render(<App />, document.querySelector('.container'));