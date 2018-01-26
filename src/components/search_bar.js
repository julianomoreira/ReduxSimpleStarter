import React from 'react';
import ReactDOM from 'react-dom';

//* Functional component
// const SearchBar = () => {
//   return <input />
// }

//* Class component
class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ' Jujuba'
    }
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }

  onInputChange = (event) => {

  }

}

export default SearchBar;
