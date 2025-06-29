// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkDo_A9r0oH4ytkEC6Deub1OEuf59ymtk",
  authDomain: "high-or-die.firebaseapp.com",
  projectId: "high-or-die",
  storageBucket: "high-or-die.firebasestorage.app",
  messagingSenderId: "735152447939",
  appId: "1:735152447939:web:f030cc3a940c120cc11d76",
  measurementId: "G-8CZVS4J6CV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { app, database, analytics };