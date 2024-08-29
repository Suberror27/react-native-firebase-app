// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpEn2Iwl9iHsJWv4Keo2fAva3xqwnTq44",
  authDomain: "react-native-firebase-ap-2c0a5.firebaseapp.com",
  projectId: "react-native-firebase-ap-2c0a5",
  storageBucket: "react-native-firebase-ap-2c0a5.appspot.com",
  messagingSenderId: "446419135541",
  appId: "1:446419135541:web:4ce0bb2e8898465b6e557c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firestore
export const db = getFirestore(app)