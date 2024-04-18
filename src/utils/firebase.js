// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8EZCIOufTU57M3pK7WqjbKf8RVIGrR4s",
  authDomain: "netflexgpt-4cbae.firebaseapp.com",
  projectId: "netflexgpt-4cbae",
  storageBucket: "netflexgpt-4cbae.appspot.com",
  messagingSenderId: "281225028086",
  appId: "1:281225028086:web:3d054f0e8eeb44c28827d7",
  measurementId: "G-S3W22K2VD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();