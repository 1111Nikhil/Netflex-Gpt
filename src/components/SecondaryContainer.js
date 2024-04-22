import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies);
    return (
      movies.nowPlaying &&(
    <div className='pt-10'>
      <h1 className='text-2xl text-white font-bold'>Movies</h1>
      <MovieList title={"Now Playing"} movies={movies?.nowPlaying}/>
      <MovieList title={"Popular"} movies={movies?.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movies?.topRated}/>
      <MovieList title={"Up Coming"} movies={movies?.upComing}/>  
    </div>
  )
)
}

export default SecondaryContainer;