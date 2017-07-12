import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {searchTerm: ''}
  }

  render() {
    return (
      <div className="row">
        <div className="search-bar">
          <input
            value={this.state.searchTerm}
            onChange={ event => this.setState({ searchTerm: event.target.value }) } />
        </div>
      </div>
    )
  }

  onInputChange(event) {
  }
}

export default SearchBar;