import { combineReducers } from "@reduxjs/toolkit";
import { darkModeSlice } from "./slices/darkModeSlice";
import { loadingSlice } from "./slices/loadingSlice";
import { openModalSlice } from "./slices/openModalSlice";
import { projectInfoSlice } from "./slices/projectInfoSlice";

const rootReducer = combineReducers({
  loadingSlice: loadingSlice.reducer,
  darkModeSlice: darkModeSlice.reducer,
  openModalSlice: openModalSlice.reducer,
  projectInfoSlice: projectInfoSlice.reducer,
});

export default rootReducer;
