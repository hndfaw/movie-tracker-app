import React from 'react';
import GenreContainer from '../GenreContainer/GenreContainer';
import './MovieContainer.css';

const MovieContainer = () => {
  return (
    <main className='movie-container'>
      <GenreContainer />
      <GenreContainer />
      <GenreContainer />
      <GenreContainer />
      <GenreContainer />
    </main>
  )
}

export default MovieContainer;