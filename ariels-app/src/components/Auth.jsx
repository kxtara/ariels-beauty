import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const Auth = () => {
  // State variables to store email, password, and a boolean to toggle password visibility
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowPassword] = useState(false);

  // Log the current user's email to the console (if available)
  console.log(auth?.currentUser?.email);

  // Function to create a new user account using email and password
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  // Function to sign in with a Google account using a pop-up
  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  // Function to log the user out
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {/* Input field for email */}
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="border-2"
        type="email"
        placeholder="Email..."
      />
      {/* Input field for password with optional visibility toggle */}
      <input
        onChange={(e) => setPassword(e.target.value)}
        className="border-2"
        type={showpassword ? "text" : "password"}
        placeholder="Password..."
      />
      {/* Button to toggle password visibility */}
      <button onClick={() => setShowPassword(!showpassword)}>Show</button>
      {/* Display the current email */}
      <h1>{email}</h1>
      {/* Button to initiate the sign-in process */}
      <button className="border-2 px-2" onClick={signIn}>
        Sign In
      </button>
      {/* Button to sign in with a Google account */}
      <button className="border-2 px-2" onClick={googleSignIn}>
        Sign In With Google
      </button>
      {/* Button to log out the user */}
      <button className="border-2 px-2" onClick={logout}>
        Logout
      </button>
    </div>
  );
};
