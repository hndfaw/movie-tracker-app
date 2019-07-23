import React from 'react';

import { shallow } from 'enzyme';
import {App, mapDispatchToProps } from './App';
import { recentMovies, logOut, toggleLogOutMenu } from '../../actions'

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

  it('should dispatch with a recentMovies action when handleSubmit is called', () => {
    const mockDispatch = jest.fn();
    const mockMovies = [{id: 1, name: 'some movies'}];
    const mockAction = recentMovies(mockMovies);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleMoviesData(mockMovies);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

  it('should dispatch with a handleLogOut action when handleSubmit is called', () => {
    const mockDispatch = jest.fn();
    const mockAction = logOut();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleLogOut();
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

  it('should dispatch with a handleToggleLogOutMenu action when handleSubmit is called', () => {
    const mockDispatch = jest.fn();
    const mockAction = toggleLogOutMenu();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleToggleLogOutMenu();
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

  // it('logout function should call two other functions', () => {
  //   let currentUser ={loggedIn: true, userDetail: {name: 'someone'}}
  //   let wrapper = shallow(<App currentUser={currentUser}/>);
  //   wrapper.instance().logout();
  //   expect(wrapper.instance().props.handleLogOut).toHaveBeenCalled();
  //   expect(wrapper.instance().props.handleToggleLogOutMenu).toHaveBeenCalled();
  // })

  // it('renderMovie should return movie snippet', () => {
  //   wrapper.instance().checkIfLoggedIn();
  //   expect(wrapper.instance().props.handleClick).toHaveBeenCalledWith(favMovie, 12)

  // })


  });
