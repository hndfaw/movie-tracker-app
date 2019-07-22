import React from 'react';
import {shallow} from 'enzyme';
import User from './User';

describe('Movie Container', () => {
  let wrapper;
  beforeEach(function() {
    wrapper = shallow(
      <User />
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})