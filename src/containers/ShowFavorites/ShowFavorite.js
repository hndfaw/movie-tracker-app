import React from 'react';
import  MovieSnippet  from '../MovieSnippet/MovieSnippet'

const ShowFavorites = ({favorites}) => {
  const displayFavorites = favorites.map( movie => {
    return <MovieSnippet 
      path={movie.poster_path} 
      key={movie.movie_id} 
      id={movie.movie_id}/>
  })
  return (
    <section>
      <h2>Favorite Movies!</h2>
      {displayFavorites}
    </section>
  )
}

export default ShowFavorites;