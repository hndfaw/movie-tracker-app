import { mapStateToProps, GenreContainer } from './GenreContainer';
import React from 'react';
import { shallow } from 'enzyme';

describe('GenreContainer', () => {
  describe('GenreContainer Component', () => {
    let wrapper, instance;
    beforeEach(() => {
      const mockMovies = [{title: 'Ryans day', poster_path: 'mockUrl', id: 1}]
      wrapper = shallow(<GenreContainer movies={mockMovies}/>)
      instance = wrapper.instance()
    })

    it('Should match the Snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should include movies in the props', () => {
      console.log(wrapper.props())

    })
  })
})