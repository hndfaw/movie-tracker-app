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
      <img src={url+movie.backdrop_path} alt='Movie poster'/>
      <div className='movie-info-card'>
        <h2>{movie.title}</h2>
        <h3>Release Date: </h3><p>{movie.release_date}</p>
        <h3>Description: </h3><p>{movie.overview}</p>
        <h3>Rating: </h3><p>{movie.vote_average} out of 10</p>
      </div>
      {currentUser.loggedIn && 
      <button onClick={e => checkIfLoggedIn()}>Add this movie to favorites</button> }
      {!currentUser.loggedIn && <NavLink to="/login">Sign in to Favorite</NavLink>}
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