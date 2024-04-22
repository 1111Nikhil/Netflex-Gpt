import React, { useRef, useState } from 'react'
import { Signin_Background } from '../utils/constant';
import { ValidData } from '../utils/Validate';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} 
from "firebase/auth";
import { auth } from '../utils/firebase';
import Header from './Header';

const Login = () => {
   const [isSignIn,setIsSignIn] = useState(true);
  const [errorMessage,seterrorMessage] = useState();
    
  const email = useRef();
   const password = useRef();
  const name = useRef();
   const mobile = useRef();
   const HandelClick = (e) =>{
    e.preventDefault()
  const Message = 
  ValidData(email.current.value,password.current.value);
      seterrorMessage(Message);
      if(Message) return;
  if(!isSignIn){
        createUserWithEmailAndPassword
        (auth,email.current.value,password.current.value,name.current.value)
  .then((userCredential) => {
     const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value,
      phoneNumber: mobile.current.value, 
    })
    setIsSignIn(!isSignIn)
     })
  .catch((error) => {
    const errorCode = error.code;
      seterrorMessage(errorCode);
  
  });
      }
  else{
    signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
     const user = userCredential.user;
     console.log(user); 
  })
  .catch((error) => {
    const errorCode = error.code;
    seterrorMessage(errorCode);
  });
  }
  }
  const togalSigin = () =>{
       setIsSignIn(!isSignIn);
  };
  return (
    <div className='bg-gradient-to-b from-black '>
     <Header/>
    <div>
        <img className='absolute'
        src={Signin_Background}
        alt='Login_Bg'/>
    </div>
    <form onSubmit={(e)=>e.preventDefault}
    className='absolute w-3/12 bg-black  my-36 m-auto left-0 right-0
     bg-opacity-80 p-8 rounded-xl text-white'>
      <h1 className='font-bold  my-4 w-full text-3xl'>
        {isSignIn?"Sign In":"Sign Up"}</h1>
      {!isSignIn &&
      <input className='w-full p-2 my-3 bg-slate-700 '
       ref={name} type='text' placeholder='Name'/>}
       {!isSignIn &&
      <input className='w-full p-2 my-3 bg-slate-700 ' 
       ref={mobile} type='number' placeholder='Mobile'/>}
      <input className='w-full p-2 my-3 bg-slate-700 ' 
       ref={email} type='Email' placeholder='Email'/>
      <input className='w-full p-2 my-3 bg-slate-700 ' 
       ref={password} type='Password' placeholder='PassWord'/>
       <p className='text-red-700 text-lg'>{errorMessage}</p>
      <button 
      className='w-full bg-red-700 p-2 my-6 text-white rounded-lg '
      onClick={HandelClick}>
        {isSignIn?"Sign In": "Sign Up"}</button>
      <p>{isSignIn?"New to Netflex?":"User?"}
        <span className='cursor-pointer' onClick={togalSigin}
      >{isSignIn?"Sign Up now":"Sign In now"}</span>
        </p>       
    </form>
    </div>
  )
}

export default Login;