import React from 'react';
import MovieSnippet from './MovieSnippet';
import {shallow} from 'enzyme';

describe('Movie Snippet', () => {
  let wrapper;
  let props;

  beforeEach(function() {
    props = { id: 1, path: '/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg'}
    wrapper = shallow(
      <MovieSnippet id={props.id} path={props.path} />
    )
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})