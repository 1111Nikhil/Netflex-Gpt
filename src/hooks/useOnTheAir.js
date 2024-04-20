import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import {  addOnTheAir} from "../utils/tvSlice";
import  { useEffect } from 'react';

const useOnTheAir =() =>{
    const dispatch = useDispatch();
    useEffect(()=>{FetchAiringTv()},[]);
    const FetchAiringTv = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addOnTheAir(json.results));
      
    }
}


export default useOnTheAir;
