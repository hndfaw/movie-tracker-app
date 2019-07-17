import React, { Component} from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import Movie from '../../Containers/Movie/Movie'
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { fetchFilms } from '../../apiCalls'
import SignUpForm from '../SignUpForm/SignUpForm'
import { recentMovies, allUsers } from '../../actions';
import { connect } from 'react-redux';

class App extends Component {


   componentDidMount() {

    fetchFilms().then(data => 
      this.props.handleMoviesData(data.results))
    // fetchGenre().then(data => console.log(data.genres))
  }

  render() {
    return (
      <div className="App">
       <img src={require("../../images/Cinema.jpg")} className='background-image' alt="movie"/>
        <header className="App-header">
          <h1>MOVIE TRACKER</h1>
        </header>
        <Switch>
          <Route exact path='/'
            render={() => (
              <>
                <SignUpForm />
                <MovieContainer />
              </>
            )} 
          />
          <Route exact path='/movie/:id' 
            render={({ match }) => {
              const id = match.params;
              const movie = this.props.movies.find(movie => parseInt(movie.id) === parseInt(id.id))
              console.log(id)
              return movie && <Movie movie={movie} />
            }}
            />
          <Route render={() => (
            <h1>THE PAGE YOU TRIED TO ACCESS DOES NOT EXIST!</h1>
          )}
          />
        </Switch>
        <footer>
          <p>Powered by TMDB</p>
        </footer>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  movies: state.movies
})

const mapDispatchToProps = dispatch => ({
  handleMoviesData: movies => dispatch(recentMovies(movies)),
  handleUsers: users => dispatch(allUsers(users))
})


export default connect(mapStateToProps, mapDispatchToProps )(App);

