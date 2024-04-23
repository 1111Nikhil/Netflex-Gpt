import React from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

const Search = () => {
  return (
    <div className='px-6 bg-white pt-10  h-svh'>
        <SearchBar/>
        <SearchResult/>
        </div>
  )
}

export default Search