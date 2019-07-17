import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import { fetchUser } from '../../apiCalls'


class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      currentUser: '',
      error: ''
    }
  }

  handleInput = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleUserSignIn = (e) => {
    e.preventDefault()
    fetchUser({email: this.state.email, password: this.state.password})
      .then(response => {
        if (response.data === undefined) {
          this.setState({error: 'Incorrect Email/Password'})
        } else {
        this.props.signUserIn(response.data)}})
      .then(res => this.handleResetState())
      .catch(error => this.setState({error: error.message}))
  }

  handleResetState = () => {
    this.setState({
      email: '',
      password: '',
      currentuser: '',
      error: ''
    })
  }
  render() {
    return (
      <form >
        <label htmlFor="signIn-email">Email</label>
        <input 
          type="email" 
          placeholder="Enter Email Here" 
          name="email" 
          value={this.state.email} 
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
        <button
        onClick={(e) => this.handleUserSignIn(e)}>Sign In</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUserIn: (user) => dispatch( signIn(user) )
})

export default connect(null, mapDispatchToProps)(SignIn);