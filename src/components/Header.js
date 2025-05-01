import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser,removeUser} from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {})
        .catch((error) => {
            navigate("/error")
        })
    }

       useEffect(()=>{
           const unsubscribe =  onAuthStateChanged(auth, (user) => {
                if (user) {
                  const {uid, email, displayName, photoURL} = user;
                  dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
                  navigate("/browse")
                } else {
                    dispatch(removeUser());
                    navigate("/")
                }
              });
              return ()=> unsubscribe();
        },[])

    return (
        <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44" src={LOGO} alt="logo"></img>

            {user && (
                <div className="flex p-5">
                <img className="w-8 h-8" alt="usericon" src={user?.photoURL}/>
                <button className="px-2 font-bold text-white" onClick={handleSignOut}>Sign Out</button>
            </div>
            )}
            
        </div>
    )
}
export default Header;