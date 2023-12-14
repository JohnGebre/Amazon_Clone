// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDciowJI4QGlBiiGe1gi605g0kGSIOrVHQ",
  authDomain: "clone-10ef0.firebaseapp.com",
  projectId: "clone-10ef0",
  storageBucket: "clone-10ef0.appspot.com",
  messagingSenderId: "932610334336",
  appId: "1:932610334336:web:5249e0a80c76751e4ad065",
  measurementId: "G-0Z9VJYN590",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
