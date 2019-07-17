import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './MovieSnippet.css'

const MovieSnippet = (props) => {
  const url = 'https://image.tmdb.org/t/p/w500'
  return (
    <Link to={`/movie/${props.id}`} className='snippet'>
      <img src={url+props.path} className='poster'/>
    </Link>
  )
}

export default MovieSnippet;