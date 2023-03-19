import { combineReducers } from "@reduxjs/toolkit";
import { darkModeSlice } from "./slices/darkModeSlice";
import { loadingSlice } from "./slices/loadingSlice";
import { openModalSlice } from "./slices/openModalSlice";

const rootReducer = combineReducers({
  loadingSlice: loadingSlice.reducer,
  darkModeSlice: darkModeSlice.reducer,
  openModalSlice: openModalSlice.reducer,
});

export default rootReducer;
