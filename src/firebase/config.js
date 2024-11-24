// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWysPhE7xqghalsCt8ZkUON6g1uFmObRg",
  authDomain: "journal2024-3985c.firebaseapp.com",
  projectId: "journal2024-3985c",
  storageBucket: "journal2024-3985c.firebasestorage.app",
  messagingSenderId: "361334548571",
  appId: "1:361334548571:web:f4ed50c17811494309777e",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
