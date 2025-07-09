// src/firebase.js
import { initializeApp } from 'firebase/app';

// Firebase config loaded securely from .env
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "high-or-die.firebaseapp.com",
  projectId: "high-or-die",
  storageBucket: "high-or-die.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// ✅ Initialize the app
const app = initializeApp(firebaseConfig);

// ✅ Export the app
export { app };
