import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='flex justify-center mx-auto mt-16'>
      <input className='border border-black rounded-3xl w-2/5 py-1 px-2'
      placeholder='What would you like to watch today?'
      type='text'/>
      <button className='bg-green-700  rounded-3xl -ml-9 py-2 px-6'>Search</button>
    </div>
  )
}

export default GptSearchBar