import React from 'react';
import './Signup.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Signup extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {firstName: '', lastName: '', email: '', password: '', isFormValid: false}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let {firstName, lastName, email, password} = this.state;
    axios.post(`http://localhost:4000/users`, {firstName, lastName, email, password})
      .then(response => {
        let {firstName, lastName} = response.data;
        this.props.onSignupSuccess(firstName, lastName);
        this.props.history.push('/home')
      })
  }

  handleChange(e) {
    this.setState({[e.target.id]: e.target.value}, () => {
      if (this.state.firstName && this.state.lastName && this.state.email && this.state.password) {
        this.setState({isFormValid: true})
      } else {
        this.setState({isFormValid: false})
      }
    })
  }

  render() {
    return (
      <fieldset className="signup mx-5 mt-2">
        <legend>Sign Up</legend>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-lg-6 form-group">
              <label htmlFor="first_name">First Name</label>
              <input type="text" className="form-control" id="firstName" placeholder="First Name" required="true"
                     onChange={this.handleChange}/>
            </div>
            <div className="col-lg-6 form-group">
              <label htmlFor="last_name">Last Name</label>
              <input type="text" className="form-control" id="lastName" placeholder="Last Name"
                     onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                   placeholder="Enter email" required="true" onChange={this.handleChange}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" required="true"
                   onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn btn-primary" disabled={!this.state.isFormValid}>Signup</button>
        </form>

        <h5 className="mt-3">Already have an account?. <Link to="/login">Login here</Link></h5>
      </fieldset>
    )
  }
}

export default Signup