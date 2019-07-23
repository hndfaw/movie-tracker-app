import React from 'react';

import { shallow } from 'enzyme';
import {App, mapDispatchToProps, mapStateToProps } from './App';

describe('App', ()=> {
  it('should match the snapshot', ()=> {
    let wrapper = shallow(<App  />);
    expect(wrapper).toMatchSnapshot();
  })

//   it('', () => {

//     let wrapper = shallow(<App  />);
//     wrapper.instance().toggleLogOutMenuFunc = jest.fn();
// })


  
  });
});
