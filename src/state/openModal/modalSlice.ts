import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../types/recipeTypes";

interface ModalState {
  isOpen: boolean;
  editList: Recipe[];
  isOpening: boolean; // Add this flag
}

const initialState: ModalState = {
  isOpen: false,
  editList: [],
  isOpening: false, // Default to false
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
      state.isOpening = false; // Reset when modal opens
    },
    closeModal(state) {
      state.isOpen = false;
      state.isOpening = false; // Reset when modal closes
    },
    editList(state, action: PayloadAction<Recipe[]>) {
      state.editList = action.payload;
    },
    setIsOpening(state, action: PayloadAction<boolean>) {
      state.isOpening = action.payload;
    },
  },
});

export const { openModal, closeModal, editList, setIsOpening } =
  modalSlice.actions;
export default modalSlice.reducer;
