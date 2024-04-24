import React from 'react';
import MovieDetails from './MovieDetails';
import MovieCaste from './MovieCaste';
import useCaste from '../hooks/useCast'

const MovieInfo = () => {
  useCaste();
  return (
    <div>
      <MovieDetails/>
      <MovieCaste/>
    </div>
  )
}

export default MovieInfo