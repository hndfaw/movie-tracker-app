import React from 'react';
import {shallow} from 'enzyme';
import { SignUpForm } from './SignUpForm';

describe('SignUpForm', () => {
  let wrapper;
  beforeEach(function() {
    wrapper = shallow(
      <SignUpForm />
    )
  })

  it('Should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should have default properties', () => {
    expect(wrapper.state().signIn).toEqual(true);
    expect(wrapper.state().signUp).toEqual(false);
  })

  it('Should toggle states when button is clicked', async () => {
   await  wrapper.find('button').simulate('click', {
      target: {name: 'sign-up'}
    })
    expect(wrapper.state().signIn).toEqual(false);
    expect(wrapper.state().signUp).toEqual(true);
    await  wrapper.find('button').simulate('click', {
      target: {name: 'sign-in'}
    })
    expect(wrapper.state().signIn).toEqual(true);
    expect(wrapper.state().signUp).toEqual(false);
  })
})