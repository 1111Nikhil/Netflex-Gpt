import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import tvReducer from "./tvSlice"


const appStore = configureStore({
    reducer:{
       user:userReducer,
       movies:moviesReducer,
       tvShowes:tvReducer,
    }
});

export default appStore;