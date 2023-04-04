import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import firebaseCart from "./firebaseCart";

const store = configureStore({
  reducer: {
    auth,
    firebaseCart,
  },
});

export default store;
