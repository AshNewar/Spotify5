import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDU1nlk92g-k-Wlmcq2AUKzQ76FTyNCTus",
    authDomain: "music-657af.firebaseapp.com",
    projectId: "music-657af",
    storageBucket: "music-657af.appspot.com",
    messagingSenderId: "616421313812",
    appId: "1:616421313812:web:7f1799a5e7121acc970601",
    measurementId: "G-36JXWHQ55Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };