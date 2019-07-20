import React, { Component } from 'react';
import { postNewUser } from '../../apiCalls';
import './signup.css';

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
      <div className="signin-container">
      <form className="signup-form">

<h2 className="sigin-header">Sign Up</h2>
<div className="signup-input-btn-container">
<div className="input-container">
        <label htmlFor="signup-name">Name</label>
        <input 
          type="text" 
          id="signup-name"
          name="name"
          value={this.state.name}
          onChange={(e) => this.handleInput(e)}/>
</div>

<div className="input-container">

        <label htmlFor="signup-email">Email</label>
        <input 
          type="email" 
          id="signup-email"
          name="email"
          value={this.state.email}
          onChange={(e) => this.handleInput(e)}/>
</div>

<div className="input-container">

        <label htmlFor="signup-password-1">Password</label>
        <input 
          type="password" 
          id="signup-password-1"
          name="password"
          value={this.state.password}
          onChange={(e) => this.handleInput(e)}/>
</div>

<div className="input-container">

      <label htmlFor="signup-password-2">Re-Enter Password</label>
        <input 
          type="password" 
          id="signup-password-2"
          name="password2"
          value={this.state.password2}
          onChange={(e) => this.handleInput(e)}/>
</div>

        <button className="signup-btn"
          onClick={(e) => this.handleSignUp(e)}
        >Sign Up</button> 

        </div>
      </form>
      </div>
    )
  }
}

export default SignUp
