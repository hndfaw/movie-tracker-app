import React from 'react'
import {SignIn, mapDispatchToProps} from './SignIn'
import { shallow } from 'enzyme'
import { signIn } from '../../actions/index'

describe('SignIn Container', () => {
  describe('SignIn Component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<SignIn />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should hold the email, password, and error in local state', () => {
      const expected = {
        email: '',
        password: '',
        error: null
      }
      const result = wrapper.state()
      expect(result).toEqual(expected)
    })

    it('should set the state as the input changes', () => {
      let event = {target: {name: 'email', value: 'ryan@flachman.net'}}
      let expected = {email: 'ryan@flachman.net', password: '', error: null}
      wrapper.instance().handleInput(event)
      expect(wrapper.state()).toEqual(expected)
    })

    it('should be able to reset the state of the email and password', () => {
      wrapper.instance().setState({email: 'ryan@flachman.net'})
      wrapper.instance().setState({password: 'password'})
      const expectedBeforeReset = {email: 'ryan@flachman.net', password: 'password', error: null}
      expect(wrapper.state()).toEqual(expectedBeforeReset)
      wrapper.instance().handleResetInputs()
      const expectedAfterResest = {email: '', password: '', error: null}
      expect(wrapper.state()).toEqual(expectedAfterResest)
      
    })

    it('Should be able to reset the error property to null', () => {
      wrapper.instance().setState({error: 'This is a mock error message'})
      const expectedBeforeReset = 'This is a mock error message'
      expect(wrapper.state().error).toEqual(expectedBeforeReset)
      wrapper.instance().handleResetError()
      const expectedAfterResest = null
      expect(wrapper.state().error).toEqual(expectedAfterResest)
    })

    it('Should be able to set the error property to Incorrect Email/Password', () => {
      const expectedErrorState = null
      expect(wrapper.state().error).toEqual(expectedErrorState)
      wrapper.instance().handleSettingError()
      const exptectedErrorStateNow = 'Incorrect Email/Password'
      expect(wrapper.state().error).toEqual(exptectedErrorStateNow)
    })

    it('Should call the fetchUser api call when calling the handleUserSignIn method', () => {
      //Mock fetch call?
      //expect handleUserSign in to be called with fetchuser?
      //Do I need to mock the handleUserSign In as well?
    })
  })

  describe('mapDispatchToProps', () => {
    it.skip('Should be called with the signIn function', () => {
      const mockDispatch = jest.fn()
      const user = {
        name: 'ryan',
        id: 1,
        email: 'ryan@flachman.net',
        password: 'password'
      }
      const expected = {'signInUser': signIn(user)}
      const result = mapDispatchToProps(mockDispatch)
      expect(result).toHaveBeenCalledWith(expected)
    })
  })
})