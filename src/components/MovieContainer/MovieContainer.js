import React from 'react';
import GenreContainer from '../GenreContainer/GenreContainer';
import './MovieContainer.css';

const MovieContainer = () => {
  return (
    <main className='movie-container'>
      <GenreContainer title='ACTION'/>
      <GenreContainer title='ANIME'/>
      <GenreContainer title='COMEDY'/>
    </main>
  )
}

export default MovieContainer;