import React, { Component } from 'react'
import { postNewUser } from '../../apiCalls'

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      currentUser: '',
      error: ''
    }
  }

  handleInput = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  checkPassword(pass1, pass2) {
    return pass1 === pass2 ? true : false;
  }

  handleSignUp = (e) => {
    e.preventDefault()
    if(!this.checkPassword(this.state.password, this.state.password2)) {
      return this.setState({error: 'Error with passwords'})
    }
    postNewUser({name: this.state.name, email: this.state.email, password: this.state.password})
      .then(response => console.log(response))
  }

  render() {
    return (
      <form>
        <label htmlFor="signup-name">Name</label>
        <input 
          type="text" 
          placeholder="Enter your Name" 
          id="signup-name"
          name="name"
          value={this.state.name}
          onChange={(e) => this.handleInput(e)}/>
        <label htmlFor="signup-email">Email</label>
        <input 
          type="email" 
          placeholder="Enter you Email" 
          id="signup-email"
          name="email"
          value={this.state.email}
          onChange={(e) => this.handleInput(e)}/>
        <label htmlFor="signup-password-1">Password</label>
        <input 
          type="password" 
          placeholder="Password" 
          id="signup-password-1"
          name="password"
          value={this.state.password}
          onChange={(e) => this.handleInput(e)}/>
        <input 
          type="password" 
          placeholder="Re-enter Password" 
          id="signup-password-2"
          name="password2"
          value={this.state.password2}
          onChange={(e) => this.handleInput(e)}/>
        <button
          onClick={(e) => this.handleSignUp(e)}
        >Submit</button> 
      </form>
    )
  }
}

export default SignUp
