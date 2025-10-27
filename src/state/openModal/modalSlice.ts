import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../types/recipeTypes";

interface ModalState {
  isOpen: boolean;
  editList: Recipe[]; // Ensure this is Recipe[], not ModalPayload
}

const initialState: ModalState = {
  isOpen: false,
  editList: [],
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
    editList(state, action: PayloadAction<Recipe[]>) {
      // Payload is Recipe[]
      state.editList = action.payload;
    },
  },
});

export const { openModal, closeModal, editList } = modalSlice.actions;
export default modalSlice.reducer;
