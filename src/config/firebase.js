// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUlDE63CcE_4d6UNyZe5_NZZsvh4szdwk",
  authDomain: "ecommerce-while.firebaseapp.com",
  projectId: "ecommerce-while",
  storageBucket: "ecommerce-while.appspot.com",
  messagingSenderId: "432190891355",
  appId: "1:432190891355:web:82ca4a2f135918c07e267e",
  measurementId: "G-FNTVGC3VVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);