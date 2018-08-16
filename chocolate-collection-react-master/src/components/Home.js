import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

const Home = (props) => (
  <div className="home">
    <p>Chocolate collection is a crowd sourced portal which gives you details about world renowned brands and
      chocolates</p>
    {!props.isLoggedIn &&
    <p>Please <Link to="/signup">signup</Link>, to contribute. Happy chocolating :-)</p>
    }
  </div>);

Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string
}

export default Home