import Header from './Header';
import useNowPlaying from '../hooks/useNowPlaying';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpComing from '../hooks/useUpComing';
import useAiringTv from '../hooks/useAiringTv';
import useOnTheAir from '../hooks/useOnTheAir';
import usePopularTv from '../hooks/usePopularTv';
import useTopRatedTv from '../hooks/TopRatedTv';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Browse = () => {
  useNowPlaying();
  usePopularMovies();
  useTopRated();
  useUpComing();
  useAiringTv();
  useOnTheAir();
  usePopularTv();
  useTopRatedTv();
    return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Browse;