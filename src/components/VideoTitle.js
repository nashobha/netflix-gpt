import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({title,overview, movieId})=>{
    const navigate = useNavigate(); 

    const handleSelectedVideo = (value) => {        
        navigate("/browse/movie/"+value);
      };

      //md for desktop if the size is more than or equal to md then use corresponding css else by default it will be a phone size
    return(
        <div className="pt-[12%] px-19 md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
            <h1 className="text-lg md:text-6xl font-bold px-4">{title}</h1>
            <p className="hidden md:inline-block md:text-lg w-screen md:w-1/4 md:p-6  ">{overview}</p>
            <div>
            <button className="bg-white text-black p-1 md:p-2 px-3 md:px-5 text-md md:text-lg rounded-lg hover:bg-opacity-80 mx-4 my-4 md:my-2" onClick={()=>handleSelectedVideo(movieId)}> <FaPlay className="inline" /> Play</button>
            <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-2 px-2 text-lg opacity-50 rounded-lg hover:bg-opacity-80"><IoIosInformationCircleOutline className="inline"/> More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;