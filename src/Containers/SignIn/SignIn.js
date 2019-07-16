import React, { Component } from 'react'
import { connect } from 'react-redux'

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleInput = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  render() {
    return (
      <form>
        <label htmlFor="signIn-email">Email</label>
        <input 
          type="email" 
          placeholder="Enter Email Here" 
          name="email" 
          value={this.state.emai} 
          id="signIn-email" 
          onChange={(e) => this.handleInput(e)}/>
        <label htmlFor="signIn-password">Password</label>
        <input
          type="text"
          placeholder-="Enter Password Here"
          name="password"
          value={this.state.password}
          id="signIn-password"
          onChange={(e) => this.handleInput(e)}/>
      </form>
    )
  }
}

export default SignIn
