import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posterPath, movieId }) => {
  const navigate = useNavigate();

  const handleSelectedVideo = (value) => {
    navigate("/browse/movie/"+value);
  };

  if(!posterPath) return null;

  return (
    <div className="w-36 md:w-48 pr-4">
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        onClick={() => handleSelectedVideo(movieId)}
      />
    </div>
  );
};

export default MovieCard;
