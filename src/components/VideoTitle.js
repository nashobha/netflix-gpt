import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({title,overview, movieId})=>{
    const navigate = useNavigate(); 

    const handleSelectedVideo = (value) => {        
        navigate("/browse/movie/"+value);
      };

    return(
        <div className="pt-[12%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="p-6 text-lg w-1/4">{overview}</p>
            <div>
            <button className="bg-white text-black p-2 px-5 text-lg rounded-lg hover:bg-opacity-80" onClick={()=>handleSelectedVideo(movieId)}> <FaPlay className="inline" /> Play</button>
            <button className="mx-2 bg-gray-500 text-white p-2 px-2 text-lg opacity-50 rounded-lg hover:bg-opacity-80"><IoIosInformationCircleOutline className="inline"/> More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;