import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        trailerVideo:null,
        popularMovies:null,
        topRated:null,
        upComing:null,
        searchMovie:null,
        searchMovieResult:null,
        movieInfo:null,     
        
    },
    reducers:{
        addNowPlaying:(state,action) =>{
            state.nowPlaying = action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies:(state,action) =>{
            state.popularMovies = action.payload;
        },
        addTopRated:(state,action) =>{
            state.topRated = action.payload;
        },
        addUpComing:(state,action) =>{
            state.upComing = action.payload;
        },
        addSearchMovie:(state,action) =>{
            state.searchMovie = action.payload;
        },
        addSearchMovieResult: (state,action) => {
            state.searchMovieResult = action.payload;
        },
        addMovieInfo: (state,action) =>{
            state.movieInfo = action.payload;
        }     
    },
});

export const {addNowPlaying,addTrailer,addPopularMovies,addTopRated,addUpComing,
    addSearchMovie,addSearchMovieResult,addMovieInfo} = movieSlice.actions;
export default movieSlice.reducer;