import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 100,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Fonksiyon İşlemleri
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});
// Fonksiyon tanımlamaları
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
