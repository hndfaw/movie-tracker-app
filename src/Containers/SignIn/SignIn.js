import React, { Component } from 'react'
import { connect } from 'react-redux'

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

  verifyUserNameAndPassword = () => {

  }

  render() {
    console.log(this.state.users)
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
        <button onClick={this.verifyUserNameAndPassword}>Sign In</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

// const mapDispatchToProps = dispatch => ({
//   handleSubmit: text => dispatch( addTodo(text) )
// })

export default connect(mapStateToProps, null)(SignIn);