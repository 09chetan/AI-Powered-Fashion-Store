// Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Hardcoded Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCrqTqazaXGbKLBbclYET5xunrRDbDm4MQ",
  authDomain: "aifashionstore.firebaseapp.com",
  projectId: "aifashionstore",
  storageBucket: "aifashionstore.appspot.com",
  messagingSenderId: "492697764979",
  appId: "1:492697764979:web:7e058ec0506c3069a69606"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
