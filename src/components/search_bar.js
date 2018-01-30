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
      term: ''
    }
    console.log(props);
  }

  render() {
    return (
      <div>
        <div className="search-bar col-md-12">
          <h2>{this.props.date.toLocaleTimeString()}</h2>
          
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
          />
        </div>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
