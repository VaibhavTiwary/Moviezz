import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useMostPopularMovies from '../hooks/useMostPopularMovies';
import usePopularMoviesByGenre from '../hooks/usePopularMoviesByGenre';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingmovies';

function Browse() {
    const user = useSelector((store) => store.app.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useMostPopularMovies();
    usePopularMoviesByGenre();
    useTopRatedMovies();
    useUpcomingMovies();


    useEffect(() => {
        if (!user) {                   //if user has not logged in but tries to accrss browse page then navigate to "/" i.e login
            navigate("/");
        }
    }, []);



    return (
        <div>
            <Header />
            <div>
                <MainContainer />
                <MovieContainer />

            </div>
        </div>
    )
}

export default Browse