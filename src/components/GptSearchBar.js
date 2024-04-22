import React from 'react';
import lang from '../utils/constLang';
import { useSelector } from 'react-redux';


const GptSearchBar = () => {
  const setLang = useSelector(store => store.config.lang);
  return (
    <div className='flex justify-center mx-auto mt-16'>
      <input className='border border-black rounded-3xl w-2/5 py-1 px-2'
      placeholder={lang[setLang].gptSearchPlaceholder}
      type='text'/>
      <button className='bg-green-700  rounded-3xl -ml-9 py-2 px-6'>{lang[setLang].search}</button>
    </div>
  )
}

export default GptSearchBar