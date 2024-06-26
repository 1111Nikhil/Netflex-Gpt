import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addUpComing} from "../utils/moviesSlice";
import  { useEffect } from 'react';

const useUpComing =() =>{
  const upComing = useSelector(store => store.movies.upComing);
    const dispatch = useDispatch();
    useEffect(()=>{
      !upComing && FetchUpComing()},[]);
    const FetchUpComing = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addUpComing(json.results));
      
    }
}


export default useUpComing;