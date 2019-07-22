import React, { Component } from 'react';
import  MovieSnippet  from '../MovieSnippet/MovieSnippet'

const ShowFavorites = ({favorites}) => {
  const displayFavorites = favorites[0].map( movie => {
    return <MovieSnippet 
      path={movie.poster_path} 
      key={movie.id} 
      id={movie.id}/>
  })
  return (
    <section>
      <h2>Favorite Movies!</h2>
      {displayFavorites}
    </section>
  )
}

export default ShowFavorites;