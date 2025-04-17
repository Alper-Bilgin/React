import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
};

export const getAllUsers = createAsyncThunk("users", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //Http isteği olmaz ise kullanılır !
  },
  extraReducers: (builder) => {
    //Http isteklerinde kullanılır !
    // Fonksiyon başarılı bir sonuç verdiğinde
    builder.addCase(getAllUsers.fulfilled, (state, responses) => {
      state.users = responses.payload;
    });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
