import { combineReducers } from "@reduxjs/toolkit";
import { darkModeSlice } from "./slices/darkModeSlice";
import { loadingSlice } from "./slices/loadingSlice";

const rootReducer = combineReducers({
  loadingSlice: loadingSlice.reducer,
  darkModeSlice: darkModeSlice.reducer,
});

export default rootReducer;
