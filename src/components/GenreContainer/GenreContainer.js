import React from 'react';
import MovieSnippet from '../../Containers/MovieSnippet/MovieSnippet';
import { connect } from 'react-redux'
import './GenreContainer.css'

export const GenreContainer = props => {
  const { movies, favorites, favShowedReducer } = props;
  const showMovies = favShowedReducer ? favorites : movies
  const snippets = showMovies.map(movie => {
    return <MovieSnippet path={movie.poster_path} 
                         key={movie.id} 
                         id={movie.movie_id}/>
  })
  return (
    <section className='genre-container'>
      {snippets}
    </section>
  )
}

const mapStateToProps = state => ({
  movies: state.movies,
  favorites: state.favorites,
  favShowedReducer: state.favShowedReducer
})

export default connect(mapStateToProps, null)(GenreContainer);