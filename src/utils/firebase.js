// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGfu10VOmLKrA6XjOfNU2DAHLdnZfzvdg",
  authDomain: "netflixgpt-ba3e1.firebaseapp.com",
  projectId: "netflixgpt-ba3e1",
  storageBucket: "netflixgpt-ba3e1.firebasestorage.app",
  messagingSenderId: "702809907012",
  appId: "1:702809907012:web:80e199dd7fdaa0ddd00111",
  measurementId: "G-BVKZCQ7LHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
