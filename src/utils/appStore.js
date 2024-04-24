import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import tvReducer from "./tvSlice";
import configReducer from "./configSlice";
import infoReducer from "./infoSlice"

const appStore = configureStore({
    reducer:{
       user:userReducer,
       movies:moviesReducer,
       tvShowes:tvReducer,
       config:configReducer,
       info:infoReducer
    }
});

export default appStore;