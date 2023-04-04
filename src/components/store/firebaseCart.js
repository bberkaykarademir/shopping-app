import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firebaseCart: [],
};

const firebaseCart = createSlice({
  name: "firebaseCart",
  initialState,
  reducers: {
    setFirebaseCart: (state, action) => {
      state.firebaseCart = action.payload;
    },
  },
});

export const { setFirebaseCart } = firebaseCart.actions;
export default firebaseCart.reducer;
