import React from 'react';
import { connect } from 'react-redux';
import './Movie.css'

const Movie = ({ movie }) => {
  const url = 'https://image.tmdb.org/t/p/w500'
  console.log(movie)
  return (
    <article className='movie'>
      <img src={url+movie.backdrop_path} alt='Movie poster'/>
      <div className='movie-info-card'>
        <h2>{movie.title}</h2>
        <h3>Release Date: </h3><p>{movie.release_date}</p>
        <h3>Description: </h3><p>{movie.overview}</p>
        <h3>Rating: </h3><p>{movie.vote_average} out of 10</p>
      </div>
      <button>Add this movie to favorites</button>
    </article>
  )
}

export default Movie;