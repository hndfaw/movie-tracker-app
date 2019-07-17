import React from 'react';
import MovieSnippet from '../../Containers/MovieSnippet/MovieSnippet';
import { connect } from 'react-redux'
import './GenreContainer.css'

const GenreContainer = props => {
  const { movies } = props;
  console.log(movies)
  const snippets = movies.map(movie => {
    return <MovieSnippet path={movie.poster_path} />
  })
  return (
    <section className='genre-container'>
      {snippets}
    </section>
  )
}

const mapStateToProps = state => ({
  movies: state.movies
})

export default connect(mapStateToProps, null)(GenreContainer);