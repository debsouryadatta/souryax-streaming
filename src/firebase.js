// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCt1M0ovhupWCFpiZM_NQ3tTQBdCZ8OPJo",
    authDomain: "netflix-clone-b73a4.firebaseapp.com",
    projectId: "netflix-clone-b73a4",
    storageBucket: "netflix-clone-b73a4.appspot.com",
    messagingSenderId: "92652431979",
    appId: "1:92652431979:web:ded01d10ed51aefe6cdf2e",
    measurementId: "G-RF3GXEPS34"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);