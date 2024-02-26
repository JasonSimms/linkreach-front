// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: <KEY>,
//   authDomain: <KEY>,
//   projectId: <KEY>,
//   storageBucket: <KEY>,
//   messagingSenderId: <KEY>,
//   appId: <KEY>,
//   measurementId: <KEY>
// };

const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG) || null;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

// firebase deploy --only hosting:linkreach