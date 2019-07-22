import React from 'react';
import { connect } from 'react-redux';
import './Movie.css'
import { addFavorite, getFavorites } from '..//../Thunks/favoriteThunk'
import { NavLink } from 'react-router-dom'
const Movie = ({ movie, currentUser, handleClick, getFavorites, favoriteMovies }) => {
  const url = 'https://image.tmdb.org/t/p/w500'
  const checkIfLoggedIn = () => {
    if(currentUser.loggedIn) {
      console.log(movie)
      const favMovie = {
        movie_id: movie.id,
        user_id: currentUser.userDetail.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        overview: movie.overview
      }
      handleClick(favMovie);
      getFavorites(currentUser.userDetail.id)
    } else {
      console.log('Working')
    }
  }
  return (

    <article className='movie'>

      <div className="movie-detail-container">
        <div className='movie-info-card'>
          <h2 className="movie-title">{movie.title}</h2>
          <p>{movie.overview}</p>
        <div className="date-rating-container">
          <p className="content-p">Rating:<span className="content-data"> {movie.vote_average} / 10</span></p>
          <p className="content-p">Release Date:<span className="content-data"> {movie.release_date}</span></p>
          {currentUser.loggedIn && 
          <button onClick={e => checkIfLoggedIn()}>Add this movie to favorites</button> }
          {!currentUser.loggedIn && <NavLink to="/login" className="movie-login-link">Sign in to Favorite</NavLink>}
        </div>
           
        </div>
        
  
        <img src={url+movie.backdrop_path} alt='Movie poster' className="movie-backdrop"/>
      </div>
      {/* {currentUser.loggedIn && 
      <button onClick={e => checkIfLoggedIn()}>Add this movie to favorites</button> }
      {!currentUser.loggedIn && <NavLink to="/login">Sign in to Favorite</NavLink>}
      <img src={url+movie.poster_path} alt='Movie poster' className="movie-poster"/> */}
    </article>
  )
}


const mapStateToProps = state => ({
  currentUser: state.currentUser,
})

const mapDispatchToProps = dispatch => ({
  handleClick: (favMovie) => dispatch(addFavorite(favMovie)),
  getFavorites: (favoriteMovies) => dispatch(getFavorites(favoriteMovies))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie);