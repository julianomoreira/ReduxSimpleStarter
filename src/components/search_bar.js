import React, { Component } from 'react';

// functional component

// const SearchBar = () => {
//   return <input />;
// };

// Class based component: must have a render function

class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = { term: '' };
    }

    render () {
      return (
        <div>
          <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
        </div>
      )
    }

    // onInputChange(event) {
    // }
}

export default SearchBar;