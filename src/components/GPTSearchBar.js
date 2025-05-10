import React,{useRef} from "react";
import lang from "../utils/languageConstant.js";
import {useDispatch, useSelector} from "react-redux";
import openai from "../utils/openai.js";
import { API_OPTIONS } from "../utils/constants.js";
import {addGPTMovieResult} from "../utils/gptSlice.js";

const GPTSearchBar = () => {
  const langKey = useSelector((store)=>store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  
  const searchMovieTMDB = async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    return json.results;
  }
  const handleGPTSearchClick = async ()=>{
    console.log(searchText.current.value);
    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " +searchText.current.value + "only give me names of 5 movies, comma separated like the example result given ahead, example Result : KGF,Kantara";
    const gptResults = await openai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: gptQuery,
    });
    
    const gptMovies = gptResults.text.split(",").map(name => name.trim());

    const promiseArray = gptMovies?.map(movie => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

  
  dispatch(addGPTMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
  }

  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12"onSubmit={(e)=>e.preventDefault()}>
        <input ref= {searchText}
          type="text"
          className="col-span-9 p-4 m-4"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        onClick={handleGPTSearchClick}>
         {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
