import React from 'react'
import { useSelector } from 'react-redux';
import { Cast_url, Dummy_user } from '../utils/constant';

const MovieCaste = () => {
  const caste = useSelector(store => store.info.caste?.cast);
  if (!caste) return null;
  return (
      <div className= ' flex  overflow-x-auto scrollbar-hidden'>
    {caste.map((cast) => 
      <div 
      key={cast.id}
      className='rounded shadow-lg my-5 mr-4 md:mr-8 pl-2'>
      <img className='max-w-24 sm:max-w-32 md:max-w-44'
        src={cast.profile_path?Cast_url + cast.profile_path: Dummy_user}
        alt={cast.character}
      />
      <h1 className="font-bold mt-2 mx-2">{cast.name}</h1>
      <h2 className="mx-2">{cast.character}</h2>
    </div>
      )}
    </div>
  )
}

export default MovieCaste