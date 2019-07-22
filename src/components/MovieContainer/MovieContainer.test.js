import React from 'react';
import {shallow} from 'enzyme';
import MovieContainer from './MovieContainer';

describe('Movie Container', () => {
  let wrapper;
  beforeEach(function() {
    wrapper = shallow(
      <MovieContainer/>
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
