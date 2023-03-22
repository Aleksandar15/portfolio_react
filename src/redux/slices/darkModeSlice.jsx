import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkModeState: {
    darkMode: false,
  },
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.darkModeState = { darkMode: action.payload.darkModeState.darkMode };
    },
  },
});

export const { setDarkMode } = darkModeSlice.actions;
export const selectDarkMode = (state) => state.darkModeSlice.darkModeState;
