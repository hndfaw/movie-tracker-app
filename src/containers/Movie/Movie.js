import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Movie.css'
import { addFavorite, getFavorites } from '..//../Thunks/favoriteThunk'
import { NavLink } from 'react-router-dom'
export class Movie extends Component {
  constructor({ movie, currentUser, handleClick, getFavorites, favoriteMovies }){
    super({ movie, currentUser, handleClick, getFavorites, favoriteMovies });
    this.url = 'https://image.tmdb.org/t/p/w500'
  }

  checkIfLoggedIn = () => {
    if(this.props.currentUser.loggedIn) {
      console.log(this.props.currentUser)
      console.log(this.props.movie)
      const favMovie = {
        movie_id: this.props.movie.id,
        user_id: this.props.currentUser.userDetail.id,
        title: this.props.movie.title,
        poster_path: this.props.movie.poster_path,
        release_date: this.props.movie.release_date,
        vote_average: this.props.movie.vote_average,
        overview: this.props.movie.overview
      }
      this.props.handleClick(favMovie);
      this.props.getFavorites(this.props.currentUser.userDetail.id)
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
          {this.props.currentUser.loggedIn && 
          <button onClick={e => this.checkIfLoggedIn()}>Add this movie to favorites</button> }
          {!this.props.currentUser.loggedIn && <NavLink to="/login" className="movie-login-link">Sign in to Favorite</NavLink>}
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
})

export const mapDispatchToProps = dispatch => ({
  handleClick: (favMovie) => dispatch(addFavorite(favMovie)),
  getFavorites: (favoriteMovies) => dispatch(getFavorites(favoriteMovies))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie);