import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {searchTerm: ''}
  }

  render() {
    return (
      <div>
        <input onChange={ event => this.setState({ searchTerm: event.target.value }) } />
        <br />
        <h3>Value of input: { this.state.searchTerm }</h3>
      </div>
    )
  }

  onInputChange(event) {
  }
}

export default SearchBar;