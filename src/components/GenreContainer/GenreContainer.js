import React from 'react';
import MovieSnippet from '../../Containers/MovieSnippet/MovieSnippet';
import './GenreContainer.css'

const GenreContainer = ({title}) => {
  return (
    <section className='genre-container'>
      <h2>{title}</h2>
      <MovieSnippet />
      <MovieSnippet />
      <MovieSnippet />
      <MovieSnippet />
      <MovieSnippet />
    </section>
  )
}

export default GenreContainer;