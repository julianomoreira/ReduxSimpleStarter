import React from 'react';
import ReactDOM from 'react-dom';

import searchBar from './components/search_bar';

const API_KEY = 'AIzaSyAqudaTcnl2w2vt3CxskfQHYcQjiDvA73c';

// Create a component. This component should produce HTML. The component here is an object (or class)
// so, you can't produce HTML from a class. You need to instantiate it.

const App = () => {
  return (
    <div>
      <searchBar />
    </div>
  );
}

// Take this component's HTML and put it on the page (DOM) using ReactDOM. You need to pass an instante
//of an object, not the object itself. Then, you need to tell React where to render this App on the DOM.

ReactDOM.render(<App />, document.querySelector('.container'));