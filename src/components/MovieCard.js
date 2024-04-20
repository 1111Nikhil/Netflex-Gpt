import React from 'react'
import { Image_url } from '../utils/constant';

const MovieCard = ({title,poster}) => {
  return (
    <div className='w-44  pr-4'>
    <img alt={title}
    src={Image_url+poster}/>
    </div>
  )
}

export default MovieCard