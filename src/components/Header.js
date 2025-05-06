import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
    const user = useSelector(store => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => { })
            .catch((error) => {
                navigate("/error")
            })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse")
            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });
        return () => unsubscribe();
    }, [])

    const handleGPTSearchClick = () => {
        dispatch(toggleGPTSearchView());
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }
    return (
        <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44" src={LOGO} alt="logo"></img>

            {user && (
                <div className="flex p-5">
                    {showGPTSearch && (
                         <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
                          {SUPPORTED_LANGUAGES?.map((lang) => (
                            <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))
                           }
                          </select>
                        )
                    }
                    <button className="py-1 px-4 mx-4 bg-purple-800 text-white rounded-lg" onClick={handleGPTSearchClick}>{showGPTSearch ? "Homepage" : "GPT Search"}</button>
                    <img className="w-8 h-8" alt="usericon" src={user?.photoURL} />
                    <button className="px-2 font-bold text-white" onClick={handleSignOut}>Sign Out</button>
                </div>
            )}

        </div>
    )
}
export default Header;