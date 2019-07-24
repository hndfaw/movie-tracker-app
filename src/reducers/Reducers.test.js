import { moviesReducer } from './moviesReducer';
import { usersReducer } from './usersReducer'
import { logOutMenuReducer } from './logOutMenuReducer'
import { logInReducer } from './logInReducer'
import { favoriteReducer } from './favoriteMoviesReducer'
import { errorReducer } from './errorReducer'

describe('All Reducers', () => {
  describe('moviesReducer', () => {
    it('should return the initial state', () => {
      const expected = [];
      const result = moviesReducer(undefined, {});
      expect(result).toEqual(expected);
    })
  
    it('should return new array with new todo', () => {
      const expected = [{movie: 'movie name', id: 1, movie_id: 1}];
      const expectedAction = {
        type: 'RECENT_MOVIES',
        movies: [{movie: 'movie name', id: 1, movie_id: 1}]
      }
      const result = moviesReducer([], expectedAction);
      expect(result).toEqual(expected);
    });
  });

  describe('UserReducer', () => {
    it('should return the initial state', () => {
      const expected = []
      const result = usersReducer(undefined, {})
      expect(result).toEqual(expected)
    })

    it('should return an array of user objects', () => {
      const expected = [{name: 'ryan', id: 1}, {name: 'Demarcus', id: 1}]
      const expectedAction = ({
        type: 'ALL_USERS',
        users: expected
      })
      const result = usersReducer([], expectedAction)
      expect(result).toEqual(expected)
    })
  })

  describe('logOutMenuReducer', () => {
    it('should return an initial state', () => {
      const expected = false
      const result = logOutMenuReducer(undefined, {})
      expect(result).toEqual(expected)
    }) 

    it('should toggle the state when when the toggleLogoutMenu action is passes', () => {
      const expected = true
      const expectedAction = ({
        type: 'TOGGLE_LOGOUT_MENU'
      })
      const result = logOutMenuReducer(undefined, expectedAction)
      expect(result).toEqual(expected)
    })
  })

  describe('LoginReducer', () => {

    it('should return an initial state', () => {
      const expected = {loggedIn: false, userDetail: {}}
      const result = logInReducer(undefined, {})
      expect(result).toEqual(expected)
    })

    it('should return a user object if passed a login action', () => {
      const user = {name: 'ryan', id: 1}
      const expected = {
        loggedIn: true,
        userDetail: user
      }
      const actionCreator = ({
        type: 'SIGN_IN',
        userData: user
      })
      const result = logInReducer( undefined, actionCreator)
      expect(result).toEqual(expected)
    })

    it('should be able to logout the user', () => {
      const actionCreator = ({
        type: "LOGOUT"
      })
      const expected = {
        loggedIn: false,
        userDetail: {}
      }
      const result = logInReducer(undefined, actionCreator)
      expect(result).toEqual(expected)
    })
  })
  describe('FavoriteMovieReducer', () => {
    it('should have an initail state', ( )=> {
      const expected = []
      const result = favoriteReducer(undefined, {})
      expect(result).toEqual(expected)
    })
    it('should return an array of favorite movie objects', () => {
      const favMovies = {data: {movie: 1}}
      const actionCreator = {
        type: 'FAVORITE_MOVIES',
        movies: favMovies
      }
      const expected = {movie: 1}
      const result = favoriteReducer(undefined, actionCreator)
      expect(result).toEqual(expected)
    })
  })

  describe('ErrorReducer', () => {
    it('should return default state', () => {
      const expected = null
      const result = errorReducer(undefined, {})
      expect(result).toEqual(expected)
    })
    it('Should be able to return an error message', () => {
      const expected = 'Error Message'
      const actionCreator = {
        type: 'HAS_ERRORED',
        errorMsg: 'Error Message'
      }
      const result = errorReducer(undefined, actionCreator)
      expect(result).toEqual(expected)
    })
  })
});