import axios from "axios";
import { getUpcomingMovies } from "../Redux/movieSlice";
import { Upcoming_Movies, options } from "../utils/constant";
import { useDispatch } from "react-redux";

const useUpcomingMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Upcoming_Movies, options);
        // console.log(res.data)
        dispatch(getUpcomingMovies(res.data))

    } catch (error) {
        console.log(error);
    }

}
export default useUpcomingMovies;
