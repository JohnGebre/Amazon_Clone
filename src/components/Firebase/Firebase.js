// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7EBkNDhwnSLiGV-axASZDhq6T9B921As",
  authDomain: "clone-3131f.firebaseapp.com",
  projectId: "clone-3131f",
  storageBucket: "clone-3131f.appspot.com",
  messagingSenderId: "929069704044",
  appId: "1:929069704044:web:80b31ae23071b60d0a0949",
  measurementId: "G-DEPZPLQ8NX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
