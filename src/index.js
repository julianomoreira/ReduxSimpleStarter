import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'

// Create a new component. This component should produce HTML.

const API_KEY = 'AIzaSyBfXK51W99oeqZCnyBRUDP7ZuoUBpSrL6s';

YTSearch({key: API_KEY, term: 'entrepreneurs'}, function(data){
  console.log(data);
})

// Changing the App component from functional component to a class-based component due to
// state that will change from the data coming from Youtube.

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

//React.render(App);






