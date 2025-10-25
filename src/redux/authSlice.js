import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLoggedIn: false,
  isRegistered: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = !!action.payload;
    },
    clearToken: (state) => {
      state.token = "";
      state.isLoggedIn = false;
    },
    setRegistered: (state, action) => {
      state.isRegistered = action.payload;
    },
  },
});

export const { setToken, clearToken, setRegistered } = authSlice.actions;
export default authSlice.reducer;
