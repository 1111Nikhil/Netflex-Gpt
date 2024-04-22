import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/constLang';

const Videotitle = ({title,overview}) => {
  const setLang = useSelector(store => store.config.lang);
  return (
    <div className='  pt-[20%] px-12 absolute text-white '>
        <h1 className='font-bold text-4xl'>{title}</h1>
        <p className='text-lg w-2/4'>{overview}</p>
        <div className='text-center w-2/4'>
            <button className='m-4 bg-white text-black px-8 py-1 rounded-md'>{lang[setLang].play}</button>
            <button className='m-4 bg-slate-500 text-white px-8 py-1 rounded-md'>{lang[setLang].info}</button>
        </div>
    </div>
  )
}

export default Videotitle