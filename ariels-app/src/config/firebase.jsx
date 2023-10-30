// Import the necessary functions from the Firebase SDK
import { initializeApp } from "firebase/app";

// Import the function to set up authentication
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

// Configuration object that holds the Firebase settings.
// These settings are retrieved from environment variables.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: "ariels-beauty-bc34b",
  storageBucket: "ariels-beauty-bc34b.appspot.com",
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
};

// Initialize Firebase with the provided configuration
const app = initializeApp(firebaseConfig);

// Set up authentication using the initialized Firebase app
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, googleProvider, db, storage };
