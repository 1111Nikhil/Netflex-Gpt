import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
    name:'tvShow',
    initialState:{
    topRatedTv:null,
    airingTv:null,
    onTheAir:null,
    popularTv:null,
    },
    reducers:{
        addAiringTv:(state,action) =>{
            state.airingTv = action.payload;
        },
        addOnTheAir:(state,action) =>{
            state.onTheAir = action.payload;
        },
        addPopularTv:(state,action) =>{
            state.popularTv = action.payload;
        },
        addTopRatedTv:(state,action) =>{
            state.topRatedTv = action.payload;
        }
    }
})

export const {addAiringTv,addOnTheAir,addPopularTv,addTopRatedTv} = tvSlice.actions;
export default tvSlice.reducer;