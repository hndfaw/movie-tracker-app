import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { usersReducer } from './usersReducer';
import { logInReducer } from './logInReducer'; 
import { favoriteReducer } from './favoriteMoviesReducer';
import { errorReducer } from './errorReducer'

const rootReducer = combineReducers({
  movies: moviesReducer,
  users: usersReducer,
  currentUser: logInReducer,
  favorites: favoriteReducer,
  errorMsg: errorReducer
});

export default rootReducer;