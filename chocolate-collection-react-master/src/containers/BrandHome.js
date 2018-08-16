import React from 'react';
import './BrandHome.css';
import ChocolateList from '../components/ChocolateList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as brandsActionCreators from '../actionCreators/brands'

class BrandHome extends React.PureComponent {

  componentWillMount() {
    let {match, actions} = this.props;
    actions.fetchBrandWithChocolates(match.params['brandId'])
  }

  render() {
    let {brandInfo, chocolates, isFetching} = this.props;

    if (isFetching)
      return <img className="spinner" src="../images/Facebook.gif" alt="Loading..."/>
    else return (
      <div className="brand-info">
        <section>
          <header><h1>{brandInfo.name}</h1></header>
          <p className="brand-desc">{brandInfo.desc}</p>
        </section>
        <section>
          <ChocolateList chocolates={chocolates}/>
        </section>
      </div>
    )
  }

}


function mapStateToProps(state) {
  return {
    brandInfo: state.brandsState.toJS().brand,
    chocolates: state.brandsState.toJS().chocolates,
    isFetching: state.brandsState.toJS().isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(brandsActionCreators, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BrandHome)