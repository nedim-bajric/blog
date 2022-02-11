import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcIp6r1ZE2TiSpCTYI5azhnyG4Zj1U6x8",
  authDomain: "blog-bedb4.firebaseapp.com",
  projectId: "blog-bedb4",
  storageBucket: "blog-bedb4.appspot.com",
  messagingSenderId: "803090564585",
  appId: "1:803090564585:web:dbffecfa307af34a477778",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
