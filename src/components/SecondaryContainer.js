import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies);
    return (
    <div className='px-6'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlaying}marginTop={movies?.nowPlaying && '-mt-32'}/>
      <MovieList title={"Popular"} movies={movies?.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movies?.topRated}/>
      <MovieList title={"Up Coming"} movies={movies?.upComing}/>
      
    </div>
  )
}

export default SecondaryContainer