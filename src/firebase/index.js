import { useState, useEffect } from "react";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcIp6r1ZE2TiSpCTYI5azhnyG4Zj1U6x8",
  authDomain: "blog-bedb4.firebaseapp.com",
  projectId: "blog-bedb4",
  storageBucket: "blog-bedb4.appspot.com",
  messagingSenderId: "803090564585",
  appId: "1:803090564585:web:dbffecfa307af34a477778",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const storage = getStorage();

export const auth = getAuth(app);
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser?.uid + ".png");

  setLoading(true);

  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, { photoURL });

  setLoading(false);
  alert("Uploaded file!");
}
