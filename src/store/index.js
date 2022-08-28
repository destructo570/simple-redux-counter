import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-store";
import counterSlice from "./counter-store";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
