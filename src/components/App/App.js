import React from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import User from '../User/User'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MOVIE TRACKER</h1>
      </header>
      <User />
      <MovieContainer />
      <footer>
        <p>Powered by TMDB</p>
      </footer>
    </div>
  );
}

export default App;
