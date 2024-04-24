import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addSearchMovieResult } from "../utils/infoSlice";


const useSearch = () =>{
   const dispatch = useDispatch();
   const searchMovie = useSelector(store => store.info.searchMovie);
   
   useEffect(() => {
     if (searchMovie) {
       searchMovieAPI(searchMovie);
     }
   }, [searchMovie]);
 
   const searchMovieAPI = async(searchMovie) =>{
     const data = await fetch
     ("https://api.themoviedb.org/3/search/multi?query=" +
     searchMovie, API_OPTIONS)
     const json = await data.json();
     dispatch(addSearchMovieResult(json.results));
   }
}

export default useSearch;