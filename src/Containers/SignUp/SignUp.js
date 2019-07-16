import React, { Component } from 'react'
import { connect } from 'react-redux' 

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: ''
    }
  }

  handleInput = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  checkPassword(pass1, pass2) {
    return pass1 === pass2 ? true : false;
  }
  render() {
    return (
      <form>
        <label for="signup-name">Name</label>
        <input 
          type="text" 
          placeholder="Enter your Name" 
          id="signup-name"
          name="name"
          value={this.state.name}/>
        <label for="signup-email">Email</label>
        <input 
          type="email" 
          placeholder="Enter you Email" 
          id="signup-email"
          name="email"
          value={this.state.email}/>
        <label for="signup-password-1">Password</label>
        <input 
          type="text" 
          placeholder="Password" 
          id="signup-password-1"
          name="password"
          value={this.state.password}/>
        <input 
          type="text" 
          placeholder="Re-enter Password" 
          id="signup-password-2"
          name="password2"
          value={this.value.password2}/>
      </form>
    )
  }
}

export default SignUp
