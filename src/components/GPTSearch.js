import React from 'react'
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import {NETFLIX_BG_LOGO} from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
                <img src={NETFLIX_BG_LOGO} alt="logo"></img>
            </div>
        <GPTSearchBar/>
        <GPTMovieSuggestions/>
        </div>
  )
}

export default GPTSearch