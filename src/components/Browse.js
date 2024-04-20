import Header from './Header';
import useNowPlaying from '../hooks/useNowPlaying';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpComing from '../hooks/useUpComing';
import useAiringTv from '../hooks/useAiringTv';
import useOnTheAir from '../hooks/useOnTheAir';
import usePopularTv from '../hooks/usePopularTv';
import useTopRatedTv from '../hooks/TopRatedTv';
import ShowContainer from './Showcontainer';

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
    <div className='bg-black'>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      <ShowContainer/>
    </div>
  )
}

export default Browse;