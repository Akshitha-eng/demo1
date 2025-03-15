import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // ✅ Import the combined reducers

export const store = configureStore({
  reducer: rootReducer, // ✅ Pass the valid reducers here
});

export default store;
