import axios from "axios"
import { Top_Rated_Movies, options } from "../utils/constant"
import { useDispatch } from "react-redux"
import { getTopRatedMovies } from "../Redux/movieSlice";

const useTopRatedMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Top_Rated_Movies, options)
        dispatch(getTopRatedMovies(res.data));
    } catch (error) {
        console.log(error)
    }

}

export default useTopRatedMovies