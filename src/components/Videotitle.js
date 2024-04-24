import React from 'react';
import { useSelector } from 'react-redux';
import lang from '../utils/constLang';

const Videotitle = ({ title, overview }) => {
  const setLang = useSelector(store => store.config.lang);
  return (
    <div className='pt-[15%] px-12 absolute text-white lg:w-2/5 lg:left-0 lg:top-1/5'>
      <h1 className='font-bold text-xl sm:text-3xl md:text-4xl'>{title}</h1>
      <p className='text-lg lg:text-xl mt-4 hidden md:block'>{overview}</p>
      <div className='text-center mt-2 '>
        <button className='m-1  md:mx-4 bg-white text-black px-2 md:px-4 py-1 rounded-md'>{lang[setLang].play}</button>
        <button className='m-1 md:mx-4  bg-slate-500 text-white px-2 md:px-4 py-1 rounded-md'>{lang[setLang].info}</button>
      </div>
    </div>
  );
};

export default Videotitle;
