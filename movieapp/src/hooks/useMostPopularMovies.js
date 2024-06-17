import axios from "axios";
import { getMostPopularMovies } from "../Redux/movieSlice";
import { Most_Popular_Movies, options } from "../utils/constant";
import { useDispatch } from "react-redux";

const useMostPopularMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Most_Popular_Movies, options);
        // console.log(res.data)
        dispatch(getMostPopularMovies(res.data))

    } catch (error) {
        console.log(error);
    }

}
export default useMostPopularMovies;
