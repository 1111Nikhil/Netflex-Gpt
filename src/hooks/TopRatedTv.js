import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTopRatedTv} from "../utils/tvSlice";
import  { useEffect } from 'react';

const useTopRatedTv =() =>{
    const dispatch = useDispatch();
    useEffect(()=>{FetchTopRatedTv()},[]);
    const FetchTopRatedTv = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addTopRatedTv(json.results));
      
    }
}


export default useTopRatedTv;
