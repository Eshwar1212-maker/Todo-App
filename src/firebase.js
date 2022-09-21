// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbKbcposHk8q6O8TTF2kRybdCn7oCSXDo",
  authDomain: "todoapp-ee76e.firebaseapp.com",
  projectId: "todoapp-ee76e",
  storageBucket: "todoapp-ee76e.appspot.com",
  messagingSenderId: "201228898431",
  appId: "1:201228898431:web:db370fdcd74ae00591af4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)