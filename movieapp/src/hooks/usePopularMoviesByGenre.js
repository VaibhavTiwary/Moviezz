import axios from 'axios'
import { Popular_Movies_By_Genre, options } from '../utils/constant'
import { getPopularMoviesByGenre } from '../Redux/movieSlice';
import { useDispatch } from 'react-redux';

const usePopularMoviesByGenre = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Popular_Movies_By_Genre, options);
        dispatch(getPopularMoviesByGenre(res.data))
    } catch (error) {
        console.log(error);
    }

}

export default usePopularMoviesByGenre