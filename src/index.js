import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

// Create a new component. This component should produce HTML.

const API_KEY = 'AIzaSyBfXK51W99oeqZCnyBRUDP7ZuoUBpSrL6s';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.container'));

//React.render(App);






