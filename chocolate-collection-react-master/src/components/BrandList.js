import React from 'react';
import BrandCard from './BrandCard';
import PropTypes from 'prop-types';

const BrandList = (props) => (
  <div className="row">
    {props.brands.map(brand => <BrandCard brandId={brand.id} key={brand.id} image={brand.logo} title={brand.name}/>)}
  </div>
);

BrandList.propTypes = {
  brands: PropTypes.arrayOf(PropTypes.shape({
    logo: PropTypes.shape.string,
    name: PropTypes.shape.string,
  }))
};

export default BrandList