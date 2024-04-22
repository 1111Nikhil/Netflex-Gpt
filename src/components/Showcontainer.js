import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const ShowContainer = () => {
  const show = useSelector(store=>store.tvShowes);
  return(
    <div className='px-6 '>
     <h1 className='text-white text-2xl text-bold pt-10 '>TV SHOWS</h1>
      <MovieList title={"Airing Tv Shows"} movies={show?.airingTv}/>
      <MovieList title={"On The Air"} movies={show?.onTheAir}/>
      <MovieList title={"Popular Tv"} movies={show?.popularTv}/>
      <MovieList title={"Top Rated Tv"} movies={show?.topRatedTv}/>
    </div>
  )
}

export default ShowContainer;