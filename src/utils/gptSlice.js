import {createSlice} from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState :{
        showGPTSearch : false,
        movieResults : null,
        movieNames : null
    },
    reducers :{
        toggleGPTSearchView : (state,action)=>{
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGPTMovieResult : (state,action)=>{
           const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        clearGPTSearch :(state, action) =>{
            return {movieNames : null};
        }
    }
})

export const {toggleGPTSearchView,addGPTMovieResult,clearGPTSearch} = gptSlice.actions;
export default gptSlice.reducer;
