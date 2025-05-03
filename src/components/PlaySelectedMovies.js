import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const PlaySelectedMovies = () => {
  const { id } = useParams();
  const video = useSelector((store) => store.movies?.playVideo)
  useMovieTrailer(id);
  const key = video[0]?.key;

  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  )
}

export default PlaySelectedMovies