import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
};

export const openModalSlice = createSlice({
  name: "openModal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = action.payload.isModalOpen;
    },
  },
});

export const { openModal } = openModalSlice.actions;
export const selectOpenModal = (state) => state.openModalSlice.isModalOpen;
