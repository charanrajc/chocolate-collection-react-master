import React from 'react'
import './Navigation.css'
import Search from './Search';
import {NavLink} from 'react-router-dom';
import Status from './Status';

const Navigation = (props) => {

  return (<nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
    <NavLink className="navbar-brand" to="/home">Chocolate Collection</NavLink>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/home" activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/brands" activeClassName="active">Brands</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/chocolates" activeClassName="active">Chocolates</NavLink>
        </li>
      </ul>
      <Status isLoggedIn={props.isLoggedIn} firstName={props.firstName} lastName={props.lastName}/>
      <Search/>
    </div>
  </nav>)
}


export default Navigation;