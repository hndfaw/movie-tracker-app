import React from 'react';

import { shallow } from 'enzyme';
import {App } from './App';

describe('App', ()=> {

  it('should match the snapshot', ()=> {
    let currentUser ={loggedIn: false, userDetail: {name: 'someone'}}
    let wrapper = shallow(<App currentUser={currentUser}/>);
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot if user is logged in', ()=> {
    let currentUser ={loggedIn: true, userDetail: {name: 'someone'}}
    let wrapper = shallow(<App currentUser={currentUser}/>);
    expect(wrapper).toMatchSnapshot();
  })

  });
