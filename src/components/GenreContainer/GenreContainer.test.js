import { mapStateToProps, GenreContainer } from './GenreContainer';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('GenreContainer', () => {
  describe('GenreContainer Component', () => {
    let wrapper, mockMovies;
    beforeEach(() => {
      mockMovies = [{title: 'Ryans day', poster_path: 'mockUrl', id: 1}]
      wrapper = shallow(<GenreContainer movies={mockMovies}/>)
    })

    it('Should match the Snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})