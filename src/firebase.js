// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "crud-e56af.firebaseapp.com",
  projectId: "crud-e56af",
  storageBucket: "crud-e56af.appspot.com",
  messagingSenderId: "588970369213",
  appId: "1:588970369213:web:b1082697d024147e6597d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);