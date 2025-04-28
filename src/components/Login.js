import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        const message = checkValidData(name.current?.value, email.current?.value, password.current?.value);
        setErrorMessage(message);
        if (message) return;
        if (!isSignInForm) {
            //Sign up form
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, 
                        photoURL: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
                      }).then(() => {
                        const {uid, email, displayName, photoURL} = user;
                        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
                        navigate("/browse");
                      }).catch((error) => {
                        setErrorMessage(error.message)
                      });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);

                });
        } else {
            // Sign in form
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg" alt="logo"></img>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute bg-black p-12 my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-3 my-4 w-full bg-gray-700" />}
                <input ref={email} type="text" placeholder="Email Address" className="p-3 my-4 w-full bg-gray-700" />
                <input ref={password} type="password" placeholder="Password" className="p-3 my-4 w-full bg-gray-700" />
                <p className="text-red-700">{errorMessage}</p>
                <button className="p-4 my-4 bg-red-700 w-full rounded-2xl" onClick={handleButtonClick}> {isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login;