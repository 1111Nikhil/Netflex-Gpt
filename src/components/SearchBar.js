import React, { useRef } from 'react';
import lang from '../utils/constLang';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addSearchMovie } from '../utils/moviesSlice';

const SearchBar = () => {
  const movie = useRef();
  const dispatch = useDispatch();
  const setLang = useSelector(store => store.config.lang);


  const HandleInputChange = (e) => {
    movie.current = e.target.value;
  // dispatch(addSearchMovie(movie.current))
  };
  const HandleClick = () =>{
    const movies = movie.current;
    dispatch(addSearchMovie(movies));
  }
  return (
    <div className='flex justify-center mx-auto mt-16'>
      <input className='border border-black rounded-3xl w-2/5 py-1 px-2'
      ref={movie}
      placeholder={lang[setLang].gptSearchPlaceholder}
      type='text'
      onChange={HandleInputChange}/>
      <button className='bg-green-700  rounded-3xl -ml-9 py-2 px-6'
      onClick={HandleClick}>{lang[setLang].search}</button>
    </div>
  )
}

export default SearchBar