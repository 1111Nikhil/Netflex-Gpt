import { useSelector } from 'react-redux';
import useSearch from '../hooks/useSearch';
import MovieList from './MovieList';

const SearchResult = () => {
  useSearch();
  const searchMovies = useSelector(store => store.movies.searchMovieResult);
  if(!searchMovies) return;
  const movies = searchMovies.filter((item) => item.media_type === "movie" || item.media_type ==="tv")
  // const {title,original_language,original_title,poster_path} = searchMovies
  
  return ( 
   <div>
   <MovieList
   title={"Results"}
   movies={movies}
   />
   { movies.length === 0 &&
   <h1 className='text-red-600 text-2xl font-bold text-center'>Opps!Result Not Found</h1>} 
    </div>
  )
}

export default SearchResult