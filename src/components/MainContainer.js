import React from 'react'
import { useSelector } from 'react-redux';
import Videotitle from './Videotitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
const movies = useSelector(store => store.movies?.nowPlaying);
if(!movies) return;
const main_Movie = movies[0]
const {original_title,overview,id} =main_Movie;

  return (
    <div className='mt-15 overflow-hidden'>
        <Videotitle title={original_title} overview={overview}/>
        <VideoBackground movie_id={id}/>
        
    </div>
  )
}

export default MainContainer