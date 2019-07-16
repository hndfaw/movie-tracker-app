import React, { Component} from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import User from '../User/User'
import './App.css';
import { fetchFilms, fetchGenre } from '../../apiCalls'
import SignUpForm from '../SignUpForm/SignUpForm'

class App extends Component {


   componentDidMount() {

    fetchFilms().then(data => console.log(data.results))
    fetchGenre().then(data => console.log(data.genres))
  }

  render() {
    return (
      <div className="App">
       <img src={require("../../images/Cinema.jpg")} className='background-image' />
        <header className="App-header">
          <h1>MOVIE TRACKER</h1>
        </header>
        <SignUpForm />
        <MovieContainer />
        <footer>
          <p>Powered by TMDB</p>
        </footer>
      </div>
    );
  }
}



export default App;
