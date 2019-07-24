import React from 'react';
import MovieSnippet from '../../Containers/MovieSnippet/MovieSnippet';
import { connect } from 'react-redux'
import './GenreContainer.css'

const GenreContainer = props => {
  const { movies, favorites, favShowedReducer } = props;
  const x = favShowedReducer ? favorites[0] : movies
  console.log('all movies', x)
  const snippets = x.map((movie, i) => {
    console.log('single movie', movie.poster_path)
    return <MovieSnippet path={movie.poster_path} 
                         key={movie.id} 
                         id={movie.id}/>
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