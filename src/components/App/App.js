import React, { Component} from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import Movie from '../../Containers/Movie/Movie'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import './App.css';
import { fetchFilms } from '../../apiCalls'
import SignUpForm from '../SignUpForm/SignUpForm'
import { recentMovies } from '../../actions';
import { connect } from 'react-redux';
import { logOut, toggleLogOutMenu } from '../../actions';
import ShowFavorites from '../../Containers/ShowFavorites/ShowFavorite'

class App extends Component {

   componentDidMount() {
    fetchFilms().then(data => 
      this.props.handleMoviesData(data.results))
  }

  logout = () => {
    this.props.handleLogOut();
    this.props.handleToggleLogOutMenu();
  }

  toggleLogOutMenuFunc = () => {
    this.props.currentUser.loggedIn && this.props.handleToggleLogOutMenu()
    }
  

  render() {
    const user = this.props.currentUser;
    const headerLink = !user.loggedIn ? 'Login' : `Welcome, ${user.userDetail.name.toUpperCase()}!`
    const logOutStyle = this.props.logOutMenuOpen ? {display: 'flex'} : {display: 'none'}

    return (
      <div className="App">
        <Switch>
          <Route exact path='/'
            render={() => (
              <>
                <header className="App-header">
                  <h1 className="logo">MOVIE <span className="logo-tracker">TRACKER</span></h1>
                  {user.loggedIn && <NavLink to='/favorites' className="favorites-page">Favorites</NavLink>}
                  <NavLink  to='/login' onClick={this.toggleLogOutMenuFunc} className="login-name">{headerLink}</NavLink>
                  <div className="logout-container" style={logOutStyle}>
                    <div className="logout-arrow"></div>
                    <button className="logout-btn" onClick={this.logout}>Log Out</button>
                  </div>
                  
                </header>
                <main className="App-body">
                  <MovieContainer />
                  <footer className="footer">
                    <p className="footer-text">Powered by TMDB</p>
                  </footer>
                </main>
              </>
            )} 
          />
          <Route exact path='/login'
            render={() => (
              user.loggedIn ? (
                <Redirect to="/"/>
              ) : (
              <>
              <header className="App-header-login">
                  <NavLink to='/' className="logo logo-signup">MOVIE <span className="logo-tracker">TRACKER</span></NavLink>
                </header>
            <SignUpForm />
            <img src={require("../../images/login-background.jpeg")} className='background-image' alt="movie"/>
              </>)
              )}
          />
          <Route exact path='/movie/:id' 
            render={({ match }) => {
              const id = match.params;
              const movie = this.props.movies.find(movie => parseInt(movie.id) === parseInt(id.id))
              return movie && <Movie movie={movie} />
            }}
            />
            <Route exact path="/favorites"
              render={ ({match}) => {
                return <ShowFavorites favorites={this.props.favorites}/>
              }}/>
          <Route render={() => (
            <h1>THE PAGE YOU TRIED TO ACCESS DOES NOT EXIST!</h1>
          )}
          />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  movies: state.movies,
  currentUser: state.currentUser,
  favorites: state.favorites,
  logOutMenuOpen: state.logOutMenuOpen
})

const mapDispatchToProps = dispatch => ({
  handleMoviesData: movies => dispatch(recentMovies(movies)),
  handleLogOut: () => dispatch(logOut()),
  handleToggleLogOutMenu: () => dispatch(toggleLogOutMenu())
})


export default connect(mapStateToProps, mapDispatchToProps )(App);

