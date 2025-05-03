import React from 'react'
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    console.log("movies",movies);
    
    return (
        movies && (
            <div className='px-4'>
                <h1 className='text-bold text-2xl py-2 text-white'>{title}</h1>
                <div className='flex overflow-x-scroll'>
                    <div className='flex'>
                        {movies?.map(movie =>
                            <MovieCard key={movie.id} posterPath={movie?.poster_path} movieId={movie.id} />
                        )}
                    </div>
                </div>
            </div>
        )
    )
}

export default MovieList

