import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: null,
  name: "Nile",
  mobileNumber: "890000",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
    updateUserInfo: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
    },
    // setUserInfo: (state, action) => {
    //   console.log("setUserInfo-----");
    //   console.log(action.payload);
    //   const { _id, name, mobileNumber } = action.payload;
    //   state._id = _id;
    //   state.name = name;
    //   state.mobileNumber = mobileNumber;
    //   console.log("--------------00000000000000000---------------");
    //   console.log(state);
    //   console.log(_id);
    //   console.log(name);
    //   console.log(mobileNumber);
    // },
    clearUserInfo: (state) => {
      state._id = null;
      state.name = "";
      state.mobileNumber = "";
      // state.email = "";
      // state.role = "user";
    },
  },
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;
export default userSlice.reducer;
