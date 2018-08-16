import React from 'react'

const Card = (props) => (

  <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
    <div className="card">
      <img className="card-img-top" style={styles.image}
           src={props.image}/>
      <div className="card-block" style={styles.cardBlock}>
        <h5 className="text-bold" style={styles.title}>{props.title}</h5>
      </div>
    </div>
  </div>
);

const styles = {
  image: {
    height: 200
  },
  cardBlock: {
    backgroundColor: 'hsla(355, 92%, 11%, 1)'
  },
  title: {
    color: 'lightgoldenrodyellow',
    fontFamily: '"Pacifico", cursive',
    fontSize: '1.5em'
  }
};

export default Card