import React from 'react';
import ChocolateCard from './ChocolateCard';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ChocolateList = (props) => (
  <div>
    {props.isLoggedIn && <Link to="/chocolates/add" className="btn btn-outline-success mt-1">ADD</Link>}
    <div className="row">
      {props.chocolates.map(chocolate => <ChocolateCard chocolateId={chocolate.id} key={chocolate.id}
                                                        image={chocolate.image} title={chocolate.name}
                                                        desc={chocolate.desc}/>)}
    </div>
  </div>
);

ChocolateList.propTypes = {
  chocolates: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.string,
  }))
};

export default ChocolateList