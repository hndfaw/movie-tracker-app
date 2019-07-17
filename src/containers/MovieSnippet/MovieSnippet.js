import React from 'react';
import { connect } from 'react-redux';
import './MovieSnippet.css'

const MovieSnippet = (props) => {
  const url = 'https://image.tmdb.org/t/p/w500'
  return (
    <article className='snippet'>
      <img src={url+props.path} className='poster'/>
    </article>
  )
}

export default MovieSnippet;