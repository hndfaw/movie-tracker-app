import React from 'react';
import { connect } from 'react-redux';

const Movie = ({ movie }) => {
  console.log(movie)
  return (
    <article>
      <h2>Name: Spiderman: Far From Home</h2>
      <p>Description: This is a holding place for where the discription will be.</p>
      <p>Rating: 10 out of 5</p>
    </article>
  )
}

export default Movie;