import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectIdentifier: "loading",
};

export const projectInfoSlice = createSlice({
  name: "projectIdentifier",
  initialState,
  reducers: {
    setProjectIdentifier: (state, action) => {
      state.projectIdentifier = action.payload.projectIdentifier;
    },
  },
});

export const { setProjectIdentifier } = projectInfoSlice.actions;
export const selectProjectIdentifier = (state) => state.projectInfoSlice;
