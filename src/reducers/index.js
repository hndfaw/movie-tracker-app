import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { usersReducer } from './usersReducer';
import { logInReducer } from './logInReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  users: usersReducer,
  currentUser: logInReducer
});

export default rootReducer;