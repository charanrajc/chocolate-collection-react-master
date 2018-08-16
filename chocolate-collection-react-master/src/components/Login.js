import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Login extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {email: '', password: '', isFormValid: false, isLoginFailed: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let {email, password} = this.state;
    axios.get(`http://localhost:4000/users?email=${email}&password=${password}`)
      .then(response => {
        if (response.data.length) {
          this.props.onLoginSuccess(response.data[0].firstName, response.data[0].lastName);
          this.props.history.push('/home');
        }
        else {
          this.setState({isLoginFailed: true})
        }
      })
  }

  handleChange(e) {
    this.setState({[e.target.id]: e.target.value}, () => {
      if (this.state.email && this.state.password) {
        this.setState({isFormValid: true, isLoginFailed: false})
      } else {
        this.setState({isFormValid: false, isLoginFailed: false})
      }
    })
  }

  render() {
    return (
      <fieldset className="signup mx-5 mt-2">
        <legend>Login</legend>
        {this.state.isLoginFailed &&
        <div className="alert alert-danger" role="alert">
          <strong>Login failed.</strong> Email or password does not match.
        </div>
        }
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                   placeholder="Enter email" onChange={this.handleChange}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password"
                   onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={!this.state.isFormValid}>Login</button>
        </form>
        <h5 className="mt-3">Don't have an account?. <Link to="/signup">Create one</Link></h5>
      </fieldset>)
  }
}

export default Login