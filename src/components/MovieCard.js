import React from 'react'
import { Image_url } from '../utils/constant';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMovieInfo } from '../utils/infoSlice';

const MovieCard = ({movies,title,poster}) => {
  const dispatch = useDispatch();
  const HandelInfo = () => {
    dispatch(addMovieInfo(movies))
  }
  return (
    <div className='w-24 pr-4 md:w-44 sm:32'>
    <Link to="/browse/info">
    <img 
    alt={title}
    src={Image_url+poster}
    onClick={HandelInfo}/>
    </Link>
    </div>
  )
}

export default MovieCard