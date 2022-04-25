// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB65XaBVAeA-CqXp1Pf8W-HaDB0xCgI78I",
  authDomain: "ema-john-simple-8e535.firebaseapp.com",
  projectId: "ema-john-simple-8e535",
  storageBucket: "ema-john-simple-8e535.appspot.com",
  messagingSenderId: "212336374509",
  appId: "1:212336374509:web:2e27e3c6c7b2b4c89a92e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;