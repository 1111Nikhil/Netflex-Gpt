import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlaying} from "../utils/moviesSlice";
import  { useEffect } from 'react';

const useNowPlaying =() =>{
  const nowPlaying = useSelector(store => store.movies.nowPlaying)
    const dispatch = useDispatch();
    useEffect(()=>{
      !nowPlaying && FetchNowPlaying()},[]);
    const FetchNowPlaying = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlaying(json.results));
      
    }
}


export default useNowPlaying;