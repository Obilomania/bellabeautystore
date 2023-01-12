// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBAY_xn_P8b1IljZrAIZGr4e-dYEb0O3Eg",
  authDomain: "bella-beauty-fad0f.firebaseapp.com",
  projectId: "bella-beauty-fad0f",
  storageBucket: "bella-beauty-fad0f.appspot.com",
  messagingSenderId: "24902294406",
  appId: "1:24902294406:web:9d2422f7047a2b67e4ea07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
