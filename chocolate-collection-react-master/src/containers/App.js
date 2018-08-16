import React, {Component} from 'react';
import './App.css';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BrandList from '../components/BrandList';
import {Route, withRouter} from 'react-router-dom';
import Home from '../components/Home';
import {Switch} from 'react-router';
import ChocolateList from '../components/ChocolateList';
import SearchResult from '../components/SearchResult';
import Signup from '../components/Signup';
import Login from '../components/Login';
import BrandHome from './BrandHome';
import Logout from '../components/Logout';
import ChocolateDetail from './ChocolateDetail';
import AddChocolate from '../components/AddChocolate';

import * as brandsActionCreators from '../actionCreators/brands'
import * as usersActionCreators from '../actionCreators/users'
import * as chocolatesActionCreators from '../actionCreators/chocolates'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends Component {

  constructor(props) {
    super(props);
    this.onSignupSuccess = this.onSignupSuccess.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.doLogout = this.doLogout.bind(this);
  }

  componentWillMount() {
    let {actions} = this.props;
    actions.fetchBrands()
    actions.fetchChocolates()
  }

  onSignupSuccess(firstName, lastName) {
    this.setState({firstName, lastName, isLoggedIn: true})
  }

  onLoginSuccess(firstName, lastName) {

    this.setState({firstName, lastName, isLoggedIn: true})
  }

  doLogout() {
    this.setState({isLoggedIn: false})
  }

  render() {
    return (
      <div className="container">
        <Navigation isLoggedIn={this.props.isLoggedIn}
                    firstName={this.props.firstName}
                    lastName={this.props.lastName}/>
        <Header/>
        {/* Application Routing */}
        <main>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home"
                   render={props => <Home {...props} isLoggedIn={this.props.isLoggedIn} firstName={this.props.firstName}
                                          lastName={this.props.lastName}/>}/>
            <Route exact path="/brands" render={props =>
              this.props.brands.length ? <BrandList {...props} brands={this.props.brands}/> :
                <img className="spinner" src="images/Facebook.gif" alt="Loading..."/>}/>
            <Route path="/brands/:brandId" component={BrandHome}/>

            <Route exact path="/chocolates" render={props =>
              this.props.chocolates.length ?
                <ChocolateList {...props} chocolates={this.props.chocolates} isLoggedIn={this.props.isLoggedIn}/> :
                <img className="spinner" src="images/Facebook.gif" alt="Loading..."/>}/>
            <Route path="/chocolates/add" component={AddChocolate}/>
            <Route path="/chocolates/:chocolateId" component={ChocolateDetail}/>

            <Route path="/search" component={SearchResult}/>

            <Route path="/signup" render={props => <Signup {...props} onSignupSuccess={this.onSignupSuccess}/>}/>
            <Route path="/login" render={props => <Login {...props} onLoginSuccess={this.onLoginSuccess}/>}/>
            <Route path="/logout" render={props => <Logout {...props} doLogout={this.doLogout}/>}/>
          </Switch>
        </main>
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    brands: state.brandsState.toJS().brands,
    chocolates: state.chocolatesState.toJS().chocolates,
    isLoggedIn: state.usersState.toJS().isLoggedIn,
    firstName: state.usersState.toJS().firstName,
    lastName: state.usersState.toJS().lastName
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...brandsActionCreators, ...usersActionCreators, ...chocolatesActionCreators}, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
