import React, { Component} from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import Movie from '../../Containers/Movie/Movie'
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import { fetchFilms } from '../../apiCalls'
import SignUpForm from '../SignUpForm/SignUpForm'
import { recentMovies } from '../../actions';
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
       {/* <img src={require("../../images/Cinema.jpg")} className='background-image' alt="movie"/>
        <header className="App-header">
          <h1>MOVIE TRACKER</h1>
        </header> */}
        <Switch>
          <Route exact path='/'
            render={() => (
              <>
                <header className="App-header">
                  <h1 className="logo">MOVIE <span className="logo-tracker">TRACKER</span></h1>
                  <NavLink  to='/login' className="login-name">Login</NavLink>
                </header>
                <main className="App-body">
                  <MovieContainer />
                </main>
              </>
            )} 
          />
          <Route exact path='/login'
            render={() => (
              <>
              <header className="App-header-login">
                  <h1 className="logo">MOVIE <span className="logo-tracker">TRACKER</span></h1>
                </header>
            <SignUpForm />
            <img src={require("../../images/login-background.jpeg")} className='background-image' alt="movie"/>
              </>
              )}
          />
          <Route exact path='/movie/:id' 
            render={({ match }) => {
              const id = match.params;
              const movie = this.props.movies.find(movie => parseInt(movie.id) === parseInt(id.id))
              return movie && <Movie movie={movie} />
            }}
            />
          <Route render={() => (
            <h1>THE PAGE YOU TRIED TO ACCESS DOES NOT EXIST!</h1>
          )}
          />
        </Switch>
        <footer>
          {/* <p>Powered by TMDB</p> */}
        </footer>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  movies: state.movies
})

const mapDispatchToProps = dispatch => ({
  handleMoviesData: movies => dispatch(recentMovies(movies))
})


export default connect(mapStateToProps, mapDispatchToProps )(App);

