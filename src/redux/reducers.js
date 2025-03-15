import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

// Sample reducer (Replace with actual reducers)
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  user: userReducer, // ✅ Ensure at least one reducer is provided
});

export default rootReducer;
