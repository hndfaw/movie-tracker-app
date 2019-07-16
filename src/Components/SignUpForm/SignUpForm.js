import { Component} from 'react'
import SignIn from '../../Containers/SignIn/SignIn'
import SignUp from '../../Containers/SignUp/SignUp'

class SignUpForm extends Component {
  constru() {
    super();
    this.state = {
      signIn: false,
      signUp: true
    }
  }
  render() {
  return (
    <div>
      {this.state.signIn && <SignIn />}
      {this.state.signUp && <SignUp />}
    </div>
  )
  }
}

export default SignUpForm;
