import React from 'react';
import GenreContainer from '../GenreContainer/GenreContainer';
import './MovieContainer.css';

const MovieContainer = () => {
  return (
    <main className='movie-container'>
      <GenreContainer title='ACTION'/>
    </main>
  )
}

export default MovieContainer;