// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-mern-693ca.firebaseapp.com",
  projectId: "realestate-mern-693ca",
  storageBucket: "realestate-mern-693ca.appspot.com",
  messagingSenderId: "519390795995",
  appId: "1:519390795995:web:1a87c8d62f14d413dc54fe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);