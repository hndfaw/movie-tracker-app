import React from 'react'
import { shallow }  from 'enzyme'
import SignUp from '../SignUp/SignUp';
import { postNewUser } from '../../apiCalls';

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
    wrapper.instance().handleSignUp = jest.fn();
    wrapper.find('.signup-btn').simulate('click', {
      preventDefault: () => {}
    })
    expect(wrapper.instance().handleSignUp).toHaveBeenCalled();
  })

  it('should call handleInput when change happen', () => {
    wrapper.instance().handleInput = jest.fn();
    wrapper.find('#signup-name').simulate('change', {
      target: {name: 'name', value: 'a'}
    })
    expect(wrapper.instance().handleInput).toHaveBeenCalled();
    wrapper.find('#signup-email').simulate('change', {
      target: {name: 'email', value: 'a'}
    })
    expect(wrapper.instance().handleInput).toHaveBeenCalled();
    wrapper.find('#signup-password-1').simulate('change', {
      target: {name: 'password', value: 'a'}
    })
    expect(wrapper.instance().handleInput).toHaveBeenCalled();
    wrapper.find('#signup-password-2').simulate('change', {
      target: {name: 'password2', value: 'a'}
    })
    expect(wrapper.instance().handleInput).toHaveBeenCalled();
  })
})