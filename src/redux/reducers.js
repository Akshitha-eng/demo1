import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};


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
  user: userReducer, 
});

export default rootReducer;
