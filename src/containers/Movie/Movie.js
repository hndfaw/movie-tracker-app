import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Movie.css'
import { addFavorite, getFavorites, removeFavorite } from '..//../Thunks/favoriteThunk'
import { NavLink } from 'react-router-dom'
export class Movie extends Component {
  constructor({ movie, currentUser, handleClick, getFavorites, favoriteMovies, favorites, removeFavorite }){
    super({ movie, currentUser, handleClick, getFavorites, favoriteMovies, favorites, removeFavorite });
    this.url = 'https://image.tmdb.org/t/p/w500'
  }

  checkIfLoggedIn = () => {
    if(this.props.currentUser.loggedIn) {
      const favMovie = {
        movie_id: this.props.movie.movie_id,
        user_id: this.props.currentUser.userDetail.id,
        title: this.props.movie.title,
        poster_path: this.props.movie.poster_path,
        release_date: this.props.movie.release_date,
        vote_average: this.props.movie.vote_average,
        overview: this.props.movie.overview
      }
      if(!this.checkForFavoritedMovie(this.props.movie)) {
        this.props.handleClick(favMovie, this.props.currentUser.userDetail.id);
        this.props.getFavorites(this.props.currentUser.userDetail.id)
      }
    }
  }
  checkForFavoritedMovie = movie => {
    const result = this.props.favorites[0].find(favMovie => favMovie.movie_id === movie.id)
    if(result !== undefined) {
      return true
    } else {
      return false
    }
  }


  render() {
    return (
      <article className='movie'>
        <div className="movie-detail-container">
          <div className='movie-info-card'>
            <h2 className="movie-title">{this.props.movie.title}</h2>
            <p>{this.props.movie.overview}</p>
          <div className="date-rating-container">
            <p className="content-p">Rating:<span className="content-data"> {this.props.movie.vote_average} / 10</span></p>
            <p className="content-p">Release Date:<span className="content-data"> {this.props.movie.release_date}</span></p>
            {this.props.currentUser.loggedIn && !this.checkForFavoritedMovie(this.props.movie) &&
            <button className="add-fav-btn" onClick={e => this.checkIfLoggedIn()}>Add to favorites</button> }
            {this.props.currentUser.loggedIn && this.checkForFavoritedMovie(this.props.movie) && 
            <button onClick={() => this.props.removeFavorite(this.props.currentUser.userDetail.id, this.props.movie.id)} className="movie-login-link">Remove from favorites</button>}
            {!this.props.currentUser.loggedIn && <NavLink  to="/login" className="movie-login-link">Sign in to Favorite</NavLink>}
          </div>
          </div>

          <img src={this.url+this.props.movie.backdrop_path} alt='Movie poster' className="movie-backdrop"/>
        </div>
      <img src={this.url+this.props.movie.poster_path} alt='Movie poster' className="movie-poster"/>
      </article>
    )
    }
}


export const mapStateToProps = state => ({
  currentUser: state.currentUser,
  favorites: state.favorites
})

export const mapDispatchToProps = dispatch => ({
  handleClick: (favMovie, userId) => dispatch(addFavorite(favMovie, userId)),
  getFavorites: (favoriteMovies) => dispatch(getFavorites(favoriteMovies)),
  removeFavorite: (userId, movieId) => dispatch(removeFavorite(userId, movieId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie);