import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false };
const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authSliceActions = authSlice.actions;
export default authSlice;
