import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBc6ILVVQatzA76MUO0jtWufH4SpJuvEvk",
  authDomain: "github-usernames.firebaseapp.com",
  projectId: "github-usernames",
  storageBucket: "github-usernames.appspot.com",
  messagingSenderId: "868993787800",
  appId: "1:868993787800:web:99ea0eab9e95bfb61feded"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init database
export const db = getFirestore(app);
