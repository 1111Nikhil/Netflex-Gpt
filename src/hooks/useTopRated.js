import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTopRated} from "../utils/moviesSlice";
import  { useEffect } from 'react';

const useTopRated =() =>{
    const dispatch = useDispatch();
    useEffect(()=>{FetchTopRated()},[]);
    const FetchTopRated = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addTopRated(json.results));
      
    }
}
export default useTopRated;