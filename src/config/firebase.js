import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAHycXdc717yjSJ0Q7fr-3x14ji8TkE-mk",
  authDomain: "aquatope-ue5.firebaseapp.com",
  projectId: "aquatope-ue5",
  storageBucket: "aquatope-ue5.firebasestorage.app",
  messagingSenderId: "542972398010",
  appId: "1:542972398010:web:c62813d207c39fe95a7583",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
