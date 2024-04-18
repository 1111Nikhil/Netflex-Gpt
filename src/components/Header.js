import React from 'react';
import { Netflex_Logo,User_Log } from '../utils/constant';
import {signOut} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
   const HandelUser =() =>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex w-full justify-between">
      <div className='flex'>
        <img className='w-24'
        src={Netflex_Logo}
        alt="Logo"/>
    <ul className='flex font-semibold text-center '>
      <li className='p-4'>Home</li>
      <li className='p-4'>TV Show</li>
      <li className='p-4'>New</li>
      <li className='p-4'>My List</li>
    </ul>
    </div>
    <div className='flex'>
    <img className='h-12'
    src={User_Log} alt='User_Log'
    onClick={HandelUser}/>
    <h1 className='font-bold text-white pt-4'>{user?.name}</h1>
    </div>
    </div>
  )
}

export default Header