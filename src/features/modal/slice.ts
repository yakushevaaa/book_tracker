import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  isOpened: boolean;
}

const initialState: ModalState = {
  isOpened: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpened = true;
    },

    closeModal: (state) => {
      state.isOpened = false;
    },

    switchModal: (state) => {
      state.isOpened = !state.isOpened;
    },
  },
});

export const { openModal, closeModal, switchModal } = modalSlice.actions;
export default modalSlice.reducer;
