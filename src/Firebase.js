import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";  // ✅ Add this

// 🔄 Your Firebase config
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

// ✅ Initialize services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);  // ✅ Export Auth
