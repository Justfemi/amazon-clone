import  { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyAS_i772WaoKp4FPmru7hbmw5WcIzJyWiQ",
  authDomain: "clone-48e6c.firebaseapp.com",
  projectId: "clone-48e6c",
  storageBucket: "clone-48e6c.appspot.com",
  messagingSenderId: "11514209358",
  appId: "1:11514209358:web:c9e83e44dae93a55b64f1f",
  measurementId: "G-66KK77XVPT"
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();

// const auth = firebase.auth();

// export { db, auth };
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

export const login= (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}

export function useAuth() {
  const [ currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}