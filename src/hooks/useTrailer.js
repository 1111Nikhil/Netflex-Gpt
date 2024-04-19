import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTrailer } from '../utils/moviesSlice';

const useTrailer = (movie_id) =>{
const dispath = useDispatch();
 useEffect(()=>{FetchTrailer()},[]);
const FetchTrailer = async() =>{
const data = await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/videos?language=en-US", API_OPTIONS);
const json = await data.json();
const filterData = json.results.filter((video)=> video.type==="Trailer");
const trailer = filterData.length? filterData[0]:json.results[0]
 dispath(addTrailer(trailer));
}
}

export default useTrailer;