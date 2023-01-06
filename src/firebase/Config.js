// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBnQJkooySgvdY8eBX5sV-3Qyv7QUWuYJw",
  authDomain: "bellaestore-62176.firebaseapp.com",
  projectId: "bellaestore-62176",
  storageBucket: "bellaestore-62176.appspot.com",
  messagingSenderId: "1086237485977",
  appId: "1:1086237485977:web:e2a6e45fd34a7750a64108",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
