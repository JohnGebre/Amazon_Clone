import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

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
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };
