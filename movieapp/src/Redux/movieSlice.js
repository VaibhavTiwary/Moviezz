import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        mostPopularMovies: null,
        popularMoviesByGenre: null,
        topRatedMovies: null,
        upcomingMovies: null,

    },
    reducers: {
        getMostPopularMovies: (state, action) => {
            state.mostPopularMovies = action.payload;
        },
        getPopularMoviesByGenre: (state, action) => {
            state.popularMoviesByGenre = action.payload;
        },
        getTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        getUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        }
    }
});
export const { getMostPopularMovies, getPopularMoviesByGenre, getTopRatedMovies, getUpcomingMovies } = movieSlice.actions;
export default movieSlice.reducer;