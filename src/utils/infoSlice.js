import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
    name:'info',
    initialState:{
        searchMovie:null,
        searchMovieResult:null,
        movieInfo:null, 
        caste:null 
    },
    reducers:{
        addSearchMovie:(state,action) =>{
            state.searchMovie = action.payload;
        },
        addSearchMovieResult: (state,action) => {
            state.searchMovieResult = action.payload;
        },
        addMovieInfo: (state,action) =>{
            state.movieInfo = action.payload;
        },
        addCaste: (state,action) =>{
            state.caste = action.payload;
        }
    },
});

 export const {addSearchMovie,addSearchMovieResult,addMovieInfo,addCaste} = infoSlice.actions;
 export default infoSlice.reducer;