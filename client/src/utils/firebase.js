import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aiinterview-4558e.firebaseapp.com",
  projectId: "aiinterview-4558e",
  storageBucket: "aiinterview-4558e.firebasestorage.app",
  messagingSenderId: "695769050327",
  appId: "1:695769050327:web:70176d090099e5c7f75492"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };