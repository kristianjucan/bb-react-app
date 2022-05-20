// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHQF7l8NCUeUms3UkCne1cFFMU_JvSQyw",
  authDomain: "better-buy-c860a.firebaseapp.com",
  projectId: "better-buy-c860a",
  storageBucket: "better-buy-c860a.appspot.com",
  messagingSenderId: "943852851382",
  appId: "1:943852851382:web:0938b412bab1f556d25617"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);