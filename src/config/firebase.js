// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjGhO3wI2TlhJVxkowe3PCs_To1hv2BRQ",
  authDomain: "vite-contact-67552.firebaseapp.com",
  projectId: "vite-contact-67552",
  storageBucket: "vite-contact-67552.appspot.com",
  messagingSenderId: "545521569093",
  appId: "1:545521569093:web:bd12d5d2c8b1cf6cd0422c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);