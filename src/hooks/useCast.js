import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addCaste} from "../utils/infoSlice";
import  { useEffect } from 'react';

const useCaste =() =>{
const movieId = useSelector(store => store.info.movieInfo) 
    const dispatch = useDispatch();
    useEffect(()=>{FetchCaste()},[]);
    const FetchCaste = async() =>{
      const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId?.id+"/credits?language=en-US", API_OPTIONS);
      const json = await data.json();
      dispatch(addCaste(json));
      
    }
}


export default useCaste;
