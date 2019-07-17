import React, { Component} from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
// import User from '../User/User'
import './App.css';
import { fetchFilms, fetchUsers } from '../../apiCalls'
import SignUpForm from '../SignUpForm/SignUpForm'
import { recentMovies, allUsers } from '../../actions';
import { connect } from 'react-redux';

class App extends Component {


   componentDidMount() {

    fetchFilms().then(data => 
      this.props.handleMoviesData(data.results))

    fetchUsers().then(users => 
      this.props.handleUsers(users.data))
      
      

    // fetchGenre().then(data => console.log(data.genres))
  }

  render() {
    return (
      <div className="App">
       <img src={require("../../images/Cinema.jpg")} className='background-image' alt="movie"/>
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


const mapDispatchToProps = dispatch => ({
  handleMoviesData: movies => dispatch(recentMovies(movies)),
  handleUsers: users => dispatch(allUsers(users))
})


export default connect(null, mapDispatchToProps )(App);

