import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularTv} from "../utils/tvSlice";
import  { useEffect } from 'react';

const usePopularTv =() =>{
    const popularTv = useSelector(store => store.tvShowes.popularTv);
    const dispatch = useDispatch();
    useEffect(()=>{
      !popularTv && FetchPopularTv()},[]);
    const FetchPopularTv = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addPopularTv(json.results));
      
    }
}


export default usePopularTv;
