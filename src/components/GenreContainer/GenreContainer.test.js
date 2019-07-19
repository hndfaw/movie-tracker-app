import { mapStateToProps } from './GenreContainer';
// import React from 'react';
// import { shallow } from 'enzyme';

describe('App', ()=> {

  describe('GenreContainer Componenet', () => {
    it.skip('', ()=> {
    })
  })
  
  describe('mapStateToProps', () => {
    it.skip('should return movies', () => {

       const mockState = {
         movies: [{movie: 'movie name', id: 1}],
         users: [{}],
         currentUser: {}
       }

       const expected = {
         movies: [{movie: 'movie name', id: 1}]
       }

       const mappedProps = mapStateToProps(mockState);
       expect(mappedProps).toEqual(expected)
     });
  });

});