import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../types/recipeTypes";
import { MODAL_PAGES } from "../../constants/modalConstants";

interface ModalState {
  isOpen: boolean;
  editList: Recipe[];
  isOpening: boolean; // Add this flag
  currentPage: string; // Add this flag to track the current modal page
}

const initialState: ModalState = {
  isOpen: false,
  editList: [],
  isOpening: false,
  currentPage: MODAL_PAGES.PRODUCT_LIST,
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
    setCurrentPage(state, action: PayloadAction<string>) {
      state.currentPage = action.payload;
    },
  },
});

export const { openModal, closeModal, editList, setIsOpening, setCurrentPage } =
  modalSlice.actions;
export default modalSlice.reducer;
