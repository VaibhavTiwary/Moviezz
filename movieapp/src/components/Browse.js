import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import axios from 'axios';
import { Now_Playing_Movie, options } from '../utils/constant';
import { getNowPlayingMovies } from '../Redux/movieSlice';

function Browse() {
    const user = useSelector((store) => store.app.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const nowPlayingMovie = async () => {
        try {
            const res = await axios.get(Now_Playing_Movie, options);
            // console.log(res.data)
            dispatch(getNowPlayingMovies(res.data));

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        if (!user) {                   //if user has not logged in but tries to accrss browse page then navigate to "/" i.e login
            navigate("/");
        }
        nowPlayingMovie();
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