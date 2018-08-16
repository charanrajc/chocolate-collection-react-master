import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ChocolateCard = (props) => (

  <div className="col-sm-6 col-md-6 col-lg-6 mt-6">
    <Link to={`/chocolates/${props.chocolateId}`}>
      <div className="card">
        <img className="card-img-top"
             style={styles.image}
             alt={props.title}
             src={props.image}/>
        <div className="card-block" style={styles.cardBlock}>
          <h5 className="text-bold" style={styles.title}>{props.title}</h5>
        </div>
      </div>
    </Link>
  </div>
);

const styles = {
  image: {
    height: 300,
    padding: 10,
  },
  cardBlock: {
    backgroundColor: 'gold'
  },
  title: {
    color: 'brown',
    fontFamily: '"Pacifico", cursive',
    fontSize: '1.5em'
  }
};


ChocolateCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ChocolateCard