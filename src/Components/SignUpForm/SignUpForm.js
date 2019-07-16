import React, { Component} from 'react'
import SignIn from '../../Containers/SignIn/SignIn'
import SignUp from '../../Containers/SignUp/SignUp'

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      signIn: false,
      signUp: true
    }
  }
  render() {
  return (
    <section>
      {this.state.signIn && <SignIn />}
      {this.state.signUp && <SignUp />}
    </section>
  )
  }
}

export default SignUpForm;
