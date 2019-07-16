import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  secondReducer: null
});

export default rootReducer;