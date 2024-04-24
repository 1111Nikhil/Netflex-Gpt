import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies} from "../utils/moviesSlice";
import  { useEffect } from 'react';

const usePopularMovies =() =>{
    const popularMovies = useSelector(store => store.movies.popularMovies);
    const dispatch = useDispatch();
    useEffect(()=>{
      !popularMovies && Fetchpopular()},[]);
    const Fetchpopular = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
      
    }
}

export default usePopularMovies;