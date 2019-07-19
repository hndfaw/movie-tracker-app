import React from 'react'
import { shallow }  from 'enzyme'
import SignUp from '../SignUp/SignUp'

describe('SignUp', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignUp />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should have a default state', () => {
    const expectedState = {
      name: '',
      email: '',
      password: '',
      password2: '',
      currentUser: '',
      error: ''
    }
    expect(wrapper.state()).toEqual(expectedState)
  })

  it('should be able to handle input change based on events', () => {
    const event = {target: {name: 'email', value: 'ryan@flachman.net'}}
    wrapper.instance().handleInput(event)
    const expectedEmail = 'ryan@flachman.net'
    expect(wrapper.state().email).toEqual(expectedEmail)
  })

  it('Should have a method to compare two passwords and return true/false', () => {
    const expected = true;
    const result = wrapper.instance().checkPassword('password', 'password')
    expect(result).toEqual(expected)
  })

  it('should have a handleSignUp method that calls of postNewUser api call', () => {
    //What in this do I need to mock?
    //what should I be expecting to happen here?
    //Should I break out the setState error handling into another method?
    
  })
})