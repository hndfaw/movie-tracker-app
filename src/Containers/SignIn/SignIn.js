import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';


class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
  }

  handleInput = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  ok = (e) => {
    e.preventDefault();
    if (this.state.email !== "" && this.state.password !== "") {
      this.props.verifyInput(this.props.users, this.state)
      console.log('ok')
    }
  }

  render() {

    return (
      <form >
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
        <button
        onClick={this.ok}>Sign In</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  verifyInput: (userData, userInput) => dispatch( signIn(userData, userInput) )
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);