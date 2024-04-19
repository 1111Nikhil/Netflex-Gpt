import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlaying} from "../utils/moviesSlice";
import  { useEffect } from 'react';

const useNowPlaying =() =>{
    const dispatch = useDispatch();
    useEffect(()=>{FetchNowPlaying()},[]);
    const FetchNowPlaying = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlaying(json.results));
    }
}


export default useNowPlaying;