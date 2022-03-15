// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF8UT7FcdMKX_vhjL0VtYcJ0FfZ6EpZdA",
  authDomain: "house-marketplace-app-351ad.firebaseapp.com",
  projectId: "house-marketplace-app-351ad",
  storageBucket: "house-marketplace-app-351ad.appspot.com",
  messagingSenderId: "347135322228",
  appId: "1:347135322228:web:518cb3ed63cc078e68c921",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
