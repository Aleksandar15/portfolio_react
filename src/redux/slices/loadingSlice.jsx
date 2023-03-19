import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingState: { isLoading: true },
};

export const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    setLoadingOn: (state, action) => {
      state.loadingState = {
        isLoading: action.payload.loadingState.isLoading,
      };
    },
    setLoadingOff: (state, action) => {
      state.loadingState = { isLoading: action.payload.loadingState.isLoading };
    },
  },
});

export const { setLoadingOn, setLoadingOff } = loadingSlice.actions;
export const selectLoadingState = (state) => state.loadingSlice.loadingState;
