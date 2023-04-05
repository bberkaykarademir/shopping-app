import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  doc,
  setDoc,
  updateDoc,
  deleteField,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import store from "./components/store";
import { setFirebaseCart } from "./components/store/firebaseCart";

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
export const db = getFirestore(app);

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

export const addProduct = async (data) => {
  const result = await addDoc(collection(db, "cart"), data);
  console.log(result);
};

export const updateProducts = async (document, data) => {
  const docRef = doc(db, "cart", document);
  const res = await updateDoc(docRef, data);
  // console.log(res);
};

// onSnapshot(collection(db, "cart"), (doc) => {
//   doc.docs.map((products) => {
//     console.log(products.data());
//   });
//   console.log("Current data: ", doc.docs[3]);
// });

export var cartProducts;

export const getProducts = (document) => {
  onSnapshot(doc(db, "cart", document), (doc) => {
    store.dispatch(setFirebaseCart(doc.data()));
  });
};

export const deleteProduct = async (document, product) => {
  const docRef = doc(db, "cart", document);
  const data = { [product]: deleteField() };
  await updateDoc(docRef, data);
};

export const deleteProducts = async (document) => {
  await setDoc(doc(db, "cart", document), {});
};

export const createDocument = async (user) => {
  await setDoc(doc(db, "cart", user), {});
};

export default app;
