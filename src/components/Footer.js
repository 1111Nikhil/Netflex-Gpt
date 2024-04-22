import React from 'react'
import { Netflex_Logo } from '../utils/constant'

const Footer = () => {
  return (
    <div className='text-white px-24'>
        <div className='flex justify-between'> 
            <img className='w-1/4'
            src={Netflex_Logo}
            alt='Logo'/>
            <div className='pt-8'>
                <h1>Nikhil</h1>
                <h2>bengular</h2>
                <h3>nikhil@gmail.com</h3>
            </div>
        </div>
    </div>
  )
}

export default Footer