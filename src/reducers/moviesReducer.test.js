import { moviesReducer } from './moviesReducer';

describe('moviesReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = moviesReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return new array with new todo', () => {
    // setup
    const expected = [{movie: 'movie name', id: 1, movie_id: 1}];
    const expectedAction = {
      type: 'RECENT_MOVIES',
      movies: [{movie: 'movie name', id: 1, movie_id: 1}]
    }

    // execution
    const result = moviesReducer([], expectedAction);

    // expectatiion
    expect(result).toEqual(expected);
  })

})