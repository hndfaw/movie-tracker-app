import React, { Component} from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import User from '../User/User'
import './App.css';
import { fetchFilms, fetchGenre } from '../../apiCalls'



 class App extends Component {


   componentDidMount() {

    fetchFilms().then(data => console.log(data.results))
    fetchGenre().then(data => console.log(data.genres))
  }

  render() {
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
}



export default App;
