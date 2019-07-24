import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { usersReducer } from './usersReducer';
import { logInReducer } from './logInReducer'; 
import { favoriteReducer } from './favoriteMoviesReducer';
import { errorReducer } from './errorReducer';
import { logOutMenuReducer } from './logOutMenuReducer';
import { favShowedReducer } from './favShowedReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  users: usersReducer,
  currentUser: logInReducer,
  favorites: favoriteReducer,
  errorMsg: errorReducer,
  logOutMenuOpen: logOutMenuReducer,
  favShowedReducer
});

export default rootReducer;