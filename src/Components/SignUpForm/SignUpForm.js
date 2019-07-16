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
      <SignIn />
      <SignUp />
    </div>
  )
  }
}

export default SignUpForm;
