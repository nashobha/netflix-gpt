import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies : null,
    topRatedMovies : null,
    upcomingMovies : null,
    playVideo : null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies : (state,action) =>{
      state.popularMovies = action.payload;
    },
    addTopRatedMovies : (state,action) =>{
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies : (state,action) =>{
      state.upcomingMovies = action.payload;
    },
    addPlayVideo : (state,action) =>{
      state.playVideo = action.payload;
    }
  },
});
export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies,addTopRatedMovies,addUpcomingMovies,addPlayVideo} = moviesSlice.actions;
export default moviesSlice.reducer;
