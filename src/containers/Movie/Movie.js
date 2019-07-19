import React from 'react';
import { addFavMovie } from '../../actions'
import { connect } from 'react-redux';
import './Movie.css'

const Movie = ({ movie, currentUser, handleClick }) => {
  const url = 'https://image.tmdb.org/t/p/w500'
  console.log(movie)
  const checkIfLoggedIn = () => {
    if(currentUser.loggedIn) {
      const favMovie = {
        movie_id: movie.id,
        user_id: currentUser.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average
      }
      handleClick(favMovie);
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
      <button onClick={e => checkIfLoggedIn()}>Add this movie to favorites</button>
    </article>
  )
  
}


const mapStateToProps = state => ({
  currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
  handleClick: (favMovie) => dispatch(addFavMovie(favMovie))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie);