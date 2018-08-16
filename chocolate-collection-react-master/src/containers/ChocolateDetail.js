import React from 'react';
import './ChocolateDetail.css';
import {bindActionCreators} from 'redux';
import * as chocolatesActionCreators from '../actionCreators/chocolates'
import {connect} from 'react-redux';

class ChocolateDetail extends React.PureComponent {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    let {match, actions} = this.props;
    actions.fetchChocolate(match.params['chocolateId'])
  }

  render() {
    let {chocolateInfo} = this.props;
    debugger;
    if (this.props.isFetching)
      return <img className="spinner" src="../images/Facebook.gif" alt="Loading..."/>
    else return (
      <div className="chocolate-info">
        <section>
          <header><h1>{chocolateInfo.name}</h1></header>
          <p className="chocolate-desc">{chocolateInfo.desc}</p>
          <img src={chocolateInfo.image} alt={chocolateInfo.name}/>
        </section>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    chocolateInfo: state.chocolatesState.toJS().chocolate,
    isFetching: state.chocolatesState.toJS().isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(chocolatesActionCreators, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChocolateDetail)