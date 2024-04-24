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
import { Link } from 'react-router-dom';
import { selectLanguage } from '../utils/configSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constant';
import lang from '../utils/constLang';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signout,setSignout] = useState(false);
  const user = useSelector((store)=>store.user);
  const setLang = useSelector(store => store.config.lang);
  const HandelSignOut = () =>{
    signout?setSignout(false):setSignout(true)
  }
  const HandelLanguage=(e) =>{
      dispatch(selectLanguage(e.target.value))
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
    <div>
    <div className="absolute p-2 sm:pl-6 md:pl-8 bg-gradient-to-b from-black z-10 flex  md:flex-row w-full justify-between ">
      <div className='flex'>
      <img className='w-12 sm:w-24'
        src={Netflex_Logo}
        alt="Logo"/>
        
 { user && <ul className='flex sm:font-semibold md:font-semibold text-center py-2 '>
    <Link to="/browse/">
    <li className='px-1 sm:px-4 md:px-6 text-white '>{lang[setLang].Home}</li>
    </Link>
    <Link to="/browse/tvShow">
    <li className='px-1 sm:px-4 md:px-6  text-white'>{lang[setLang].show}</li>
    </Link>
    <Link to="/browse/movies">
    <li className='px-1 sm:px-4 md:px-6 text-white'>{lang[setLang].movies}</li>
    </Link>
    <Link to="/browse/search">
    <li className='px-1 sm:px-4 md:px-6 text-white'>{lang[setLang].search}</li>
    </Link>
  </ul>}
    </div>
    { user &&<div className='flex'>
    { lang &&<select className='m-2 w-20 px-1 bg-gray-200'
    onChange={HandelLanguage}>
      {SUPPORTED_LANGUAGES.map((lang) => (
        <option key={lang.identifier}
         value={lang.identifier}>{lang.name}</option>
      ))}
    </select>}
    <img className='h-8 sm:h-12 cursor-pointer'
    src={User_Log} alt='User_Log '
    onClick={HandelSignOut}/>
    <div className='font-extrabold text-white pt-4 '>
    </div>
    </div>}
    </div>
    {signout &&
    <><h1 className='font-bold text-white px-2 absolute top-10 sm:top-12 sm:pt-2 right-3'>{user?.name}</h1>
    <button className='bg-red-500 px-2 absolute top-16 sm:top-20  right-3'
          onClick={HandelUser}>signOut</button></>}
    </div>
  )
}

export default Header