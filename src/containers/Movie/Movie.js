import React from 'react';
import { connect } from 'react-redux';
import './Movie.css'
import { addFavorite, getFavorites } from '..//../Thunks/favoriteThunk'
const Movie = ({ movie, currentUser, handleClick, getFavorites, favoriteMovies }) => {
  const url = 'https://image.tmdb.org/t/p/w500'
  const checkIfLoggedIn = () => {
    if(currentUser.loggedIn) {
      console.log(movie)
      const favMovie = {
        movie_id: movie.id,
        user_id: currentUser.user.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        overview: movie.overview
      }
      handleClick(favMovie);
      getFavorites(currentUser.user.id)
    } else {
      console.log('Working')
    }
  }
  return (

    <article className='movie'>

      <div className="movie-detail-container">
        <div className='movie-info-card'>
          <h2>{movie.title}</h2>
          <h3>Release Date: </h3><p>{movie.release_date}</p>
          <h3>Description: </h3><p>{movie.overview}</p>
          <h3>Rating: </h3><p>{movie.vote_average} out of 10</p>
        </div>
        <button onClick={e => checkIfLoggedIn()}>Add this movie to favorites</button>
        <img src={url+movie.backdrop_path} alt='Movie poster' className="movie-backdrop"/>
      </div>
      

    <img src={url+movie.poster_path} alt='Movie poster' className="movie-poster"/>
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