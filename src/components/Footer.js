import React from 'react'
import { Netflex_Logo } from '../utils/constant'

const Footer = () => {
  return (
    <div className=' px-24  bg-white'>
        <div className='flex justify-between'> 
            <img className='w-1/4'
            src={Netflex_Logo}
            alt='Logo'/>
            <div className='pt-6'>
                <h1>Nikhil</h1>
                <h2>Bengular</h2>
                <h3>nikhil@gmail.com</h3>
            </div>
        </div>
    </div>
  )
}

export default Footer