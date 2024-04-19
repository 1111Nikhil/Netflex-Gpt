import React, { useState } from 'react';
import { Netflex_Logo,User_Log } from '../utils/constant';
import {signOut} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signout,setSignout] = useState(false);
  const user = useSelector((store)=>store.user);
  const HandelSignOut = () =>{
    signout?setSignout(false):setSignout(true)
  }
   const HandelUser =() =>{
    signOut(auth).then(() => {
    
    }).catch((error) => {
      navigate("/error")
    });
  }
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,name:displayName}));
          navigate("/browse")
        } else {
           dispatch(removeUser());
           navigate("/")          
        }
      });
      return () =>unSubscribe();
},[]);
  return (
    <div className="absolute pl-8 bg-gradient-to-b from-black z-10 flex w-full justify-between ">
      <div className='flex'>
      <img className='w-24'
        src={Netflex_Logo}
        alt="Logo"/>
        
 { user && <ul className='flex font-semibold text-center '>
    <li className='p-4 text-white '>Home</li>
    <li className='p-4 text-white'>TV Show</li>
    <li className='p-4 text-white'>New</li>
    <li className='p-4 text-white'>My List</li>
  </ul>}
    </div>
    { user &&<div className='flex'>
    <img className='h-12'
    src={User_Log} alt='User_Log'/>
    <h1 className='font-bold text-white pt-4'>{user?.name}</h1>
    <div className='font-extrabold text-white pt-4 px-2'>
    <p  className='cursor-pointer'
    onClick={HandelSignOut}>^</p>
    {signout &&<button className='bg-red-500 pl-1'
    onClick={HandelUser}>signOut</button>}
    </div>
    </div>}
    </div>
  )
}

export default Header