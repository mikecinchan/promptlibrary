import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 🔄 Replace with your Firebase config from console
const firebaseConfig = {
  apiKey: "AIzaSyBGb6Yy1UvEtw9rWOcOKSxJMVEXhLNxYbU",
  authDomain: "prompt-library-74b02.firebaseapp.com",
  projectId: "prompt-library-74b02",
  storageBucket: "prompt-library-74b02.firebasestorage.app",
  messagingSenderId: "942460547467",
  appId: "1:942460547467:web:8f2ce6ff94269f181dbf8e"

};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Firestore & Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
