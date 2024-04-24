import React from 'react'
import { useSelector } from 'react-redux'
import { Image_url,Bg_Url, } from '../utils/constant'

const MovieInfo = () => {
const movie = useSelector(store => store.info.movieInfo)
    if (!movie) {
        return <div>No movie information available.</div>;
      }
  return (
    <div className='pt-20 relative bg-black'>
    <img className='relative inset-0 w-full h-svh object-cover blur-sm bg-gradient-to-b from-black'
     alt='BackGround'
    src={Bg_Url+movie?.backdrop_path}/>
    <div className='flex flex-col md:flex-row justify-center items-center'>
    <div >
     <img className=' absolute top-[25%] left-20 object-over '
     alt={movie.title}
    src={Image_url+movie?.poster_path}/>
    </div>
    <div className='text-white px-16 py-8 z-10 w-2/4 absolute top-[25%]'>
        <h1 className='text-3xl font-bold'>{movie.original_title|| movie.name}
        ({movie.release_date|| movie.first_air_date})</h1>
        <h2 className='text-xl mt-2'>Rating:{movie?.vote_average}</h2>
        <p className='mt-4 w-1/2'>{movie?.overview}</p>
    </div>
    </div>
    </div>
  )
}

export default MovieInfo