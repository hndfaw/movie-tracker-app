import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import { fetchUser } from '../../apiCalls'
import { getFavorites } from '../../Thunks/favoriteThunk';
import './signin.css';


export class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: null
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
          this.handleSettingError()
        } else {
          this.props.signUserIn(response.data)
          this.props.getFavorites(response.data.id)
          this.handleResetError()
      }})
      .catch(error => this.setState({error: error.message}))
    this.handleResetInputs()
  }

  handleResetInputs = () => {
    this.setState({
      email: '',
      password: '',
    })
  }

  handleResetError = () => {
    this.setState({error: null})
  }

  handleSettingError = () => {
    this.setState({error: 'Incorrect Email/Password'})
  }
  render() {
    return (
      <div className="signin-container">
        <form className="signin-form">
        {this.state.error && <h2>{this.state.error}</h2>}
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
      </div>
      
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  signUserIn: (user) => dispatch( signIn(user) ),
  getFavorites: (id) => dispatch(getFavorites(id))
})

export default connect(null, mapDispatchToProps)(SignIn);