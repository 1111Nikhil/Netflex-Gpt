import React from 'react';
import { Netflex_Logo } from '../utils/constant';

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
        <img className='w-44'
        src={Netflex_Logo}
        alt="Logo"/>
    </div>
  )
}

export default Header