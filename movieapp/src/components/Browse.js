import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';

function Browse() {
    const user = useSelector((store) => store.app.user);
    const navigate = useNavigate();

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