import { auth } from "../firebase/firebaseConfig";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User signed up:", userCredential.user);
    return { success: true }; // Add this line to return success
  } catch (error) {
    console.error("Error signing up:", error.message);
    return { success: false, error: error.message }; // Return error message
  }
};

export const logIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User logged in:", userCredential.user);
    return { success: true }; // Add this line to return success
  } catch (error) {
    console.error("Error logging in:", error.message);
    return { success: false, error: error.message }; // Return error message
  }
};
