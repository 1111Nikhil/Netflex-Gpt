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
    <div className="absolute pl-8 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row w-full justify-between ">
      <div className='flex'>
      <img className='w-24'
        src={Netflex_Logo}
        alt="Logo"/>
        
 { user && <ul className='flex font-semibold text-center '>
    <Link to="/browse/">
    <li className='p-4 text-white '>{lang[setLang].Home}</li>
    </Link>
    <Link to="/browse/tvShow">
    <li className='p-4 text-white'>{lang[setLang].tvshow}</li>
    </Link>
    <Link to="/browse/movies">
    <li className='p-4 text-white'>{lang[setLang].movies}</li>
    </Link>

    <Link to="/browse/search">
    <li className='p-4 text-white'>{lang[setLang].search}</li>
    </Link>
  </ul>}
    </div>
    { user &&<div className='flex'>
    { lang &&<select className='m-2 px-1 bg-gray-200'
    onChange={HandelLanguage}>
      {SUPPORTED_LANGUAGES.map((lang) => (
        <option key={lang.identifier}
         value={lang.identifier}>{lang.name}</option>
      ))}
    </select>}
    <img className='h-12'
    src={User_Log} alt='User_Log'/>
    <h1 className='font-bold text-white pt-4'>{user?.name}</h1>
    <div className='font-extrabold text-white pt-4 px-2'>
    <p  className='cursor-pointer'
    onClick={HandelSignOut}>^</p>
    {signout &&<button className='bg-red-500 px-2 '
    onClick={HandelUser}>signOut</button>}
    </div>
    </div>}
    </div>
  )
}

export default Header