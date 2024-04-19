import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className='  pt-[30%] px-12 absolute text-white '>
        <h1 className='font-bold text-4xl'>{title}</h1>
        <p className='text-lg w-2/4'>{overview}</p>
        <div className='text-center w-2/4'>
            <button className='m-4 bg-white text-black px-8 py-1 rounded-md'>Play</button>
            <button className='m-4 bg-slate-500 text-white px-8 py-1 rounded-md'>Info</button>
        </div>
    </div>
  )
}

export default Videotitle