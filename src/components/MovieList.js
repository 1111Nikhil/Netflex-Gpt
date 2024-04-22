import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies }) => {
   return (
      <div className='overflow-x-auto scrollbar-hidden my-5 '>
    <h1 className='text-white font-3xl font-bold'>{title}</h1>
    <div className='flex '>
     <div className='flex '>
    {movies?.map(movies=> <MovieCard 
    key={movies.id}
    poster={movies.poster_path}
    title={movies.title}/>)}
    </div>
    </div>
    </div>
  )
}

export default MovieList