import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAFuLAdV8ZLRV52uyoG1tApm5zId3Oj50",
  authDomain: "shopping-app-d656e.firebaseapp.com",
  projectId: "shopping-app-d656e",
  storageBucket: "shopping-app-d656e.appspot.com",
  messagingSenderId: "151591097571",
  appId: "1:151591097571:web:517a41399b311f4d3f21d6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const register = async (email, password) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

export const login = async (email, password) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const logout = async () => {
  await signOut(auth);
  return true;
};

export const update = async (data) => {
  await updateProfile(auth.currentUser, data);
  return true;
};

export default app;
