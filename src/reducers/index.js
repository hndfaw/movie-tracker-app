import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { usersReducer } from './usersReducer';
import { logInReducer } from './logInReducer'; 
import { favoriteReducer } from './favoriteMoviesReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  users: usersReducer,
  currentUser: logInReducer,
  favorites: favoriteReducer
});

export default rootReducer;