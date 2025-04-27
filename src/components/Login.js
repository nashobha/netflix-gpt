import { useState } from "react";
import Header from "./Header";

const Login = ()=>{
const[isSgnInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSgnInForm);
    }
    return(
        <div>
            <Header/>
            <div className="absolute"> 
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg" alt="logo"></img>
            </div>
            <form className="w-3/12 absolute bg-black p-12 my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSgnInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSgnInForm && <input type="text" placeholder ="Full Name" className="p-3 my-4 w-full bg-gray-700"/>}
                <input type="text" placeholder ="Email Address" className="p-3 my-4 w-full bg-gray-700"/>
                <input type="password" placeholder ="Password" className="p-3 my-4 w-full bg-gray-700"/>
                <button className="p-4 my-4 bg-red-700 w-full rounded-2xl"> {isSgnInForm ? "Sign In" : "Sign Up"}</button>
            <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>{isSgnInForm? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login;