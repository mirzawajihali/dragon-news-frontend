// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP27TvchGjbSRir4QLRzAWe1b9k62bcrc",
  authDomain: "dragon-news-frontend-8c73a.firebaseapp.com",
  projectId: "dragon-news-frontend-8c73a",
  storageBucket: "dragon-news-frontend-8c73a.firebasestorage.app",
  messagingSenderId: "730381485691",
  appId: "1:730381485691:web:8a8e1e54a00e0e4a8d44de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;