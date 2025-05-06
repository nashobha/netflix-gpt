import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
import GPTSearch from "./GPTSearch.js";
import { useSelector } from "react-redux";

const Browse = () => {
    const showGPTSearch = useSelector((store)=>store.gpt.showGPTSearch);

   useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();
   useUpcomingMovies();

    return (
        <div>
            <Header/>
            {
                showGPTSearch ?  <GPTSearch/> :
                <>
                <MainContainer/>
                <SecondaryContainer/>
                </>
            }
           
            
        </div>
    )
}
export default Browse;
