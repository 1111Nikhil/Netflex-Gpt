import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addAiringTv} from "../utils/tvSlice";
import  { useEffect } from 'react';

const useAiringTv =() =>{
  const airingTv = useSelector(store => store.tvShowes.airingTv);
    const dispatch = useDispatch();
    useEffect(()=>{
      !airingTv && FetchAiringTv()},[]);
    const FetchAiringTv = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addAiringTv(json.results));
      
    }
}


export default useAiringTv;
