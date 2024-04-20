import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        trailerVideo:null,
        popularMovies:null,
        topRated:null,
        upComing:null,
        
        
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
        }      
    },
});

export const {addNowPlaying,addTrailer,addPopularMovies,addTopRated,addUpComing} = movieSlice.actions;
export default movieSlice.reducer;