import React from 'react';
import {Link} from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {q: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({q: e.target.value})
  }

  render() {
    return (<div className="form-inline mt-2 mt-md-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search"
             value={this.state.q}
             onChange={this.handleChange}
      />
      <Link className="btn btn-outline-success my-2 my-sm-0" type="button"
            to={`/search?q=${this.state.q}`}>
        Search
      </Link>
    </div>)
  }
}


export default Search;