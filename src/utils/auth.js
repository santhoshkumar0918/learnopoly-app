import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const signUp = async (email, password, name, phone, address) => {
  try {
    // Step 1: Create user in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User signed up with Firebase:", user);

    // Step 2: Send additional user details to the backend API
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
        phone,
        address,
      }),
    });

    const data = await response.json();

    if (data.success) {
      return { success: true };
    } else {
      // If backend API fails, you may want to delete the Firebase user
      // or handle the error differently, depending on your requirements
      console.error("Error from backend API:", data.error);
      return { success: false, error: data.error };
    }
  } catch (error) {
    console.error("Error signing up:", error.message);
    return { success: false, error: error.message };
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
  