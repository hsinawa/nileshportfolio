import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  // measurementId: process.env.REACT_APP_measurementId
  apiKey: "AIzaSyAwGo4i-eq0EEFDTNRW6-_-XAIKqHJX9uM",
  authDomain: "concept2education-d6688.firebaseapp.com",
  projectId: "concept2education-d6688",
  storageBucket: "concept2education-d6688.appspot.com",
  messagingSenderId: "935238135029",
  appId: "1:935238135029:web:629b8b18f88b65b9c1a9bc",
  measurementId: "G-PT8DRP9LL0"
};

firebase.initializeApp(firebaseConfig);
export default firebase;

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);