// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWCe7UWUi9j9La5Y_Czf3FZuOZfPW8ybQ",
    authDomain: "link-reach.firebaseapp.com",
    projectId: "link-reach",
    storageBucket: "link-reach.appspot.com",
    messagingSenderId: "674697743640",
    appId: "1:674697743640:web:32f965efcc2d52c586e26d",
    measurementId: "G-XGZ19Q5N3M"
  };
// const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);
// console.log('firebaseConfig', firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log('app', app);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

// firebase deploy --only hosting:linkreach