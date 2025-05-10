import React from 'react'
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import {NETFLIX_BG_LOGO} from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
     <div className="fixed -z-10">
                <img className="h-screen object-cover md:h-fit" src={NETFLIX_BG_LOGO} alt="logo"></img>
            </div>
            <div className=''>
        <GPTSearchBar/>
        <GPTMovieSuggestions/>
        </div>
    </>
   
  )
}

export default GPTSearch