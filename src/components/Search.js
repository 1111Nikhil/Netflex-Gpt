import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptSearchResult from './GptSearchResult';

const Search = () => {
  return (
    <div className='px-6 bg-white pt-10 h-[520px]'>
        <GptSearchBar/>
        <GptSearchResult/>
        </div>
  )
}

export default Search