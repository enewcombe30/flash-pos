import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../types/recipeTypes";
import { MODAL_PAGES, EDIT_TYPES } from "../../constants/editModalConstants";

interface ModalState {
  isOpen: boolean;
  editList: Recipe[];
  isOpening: boolean;
  currentPage: string;
  editType: string;
}

const initialState: ModalState = {
  isOpen: false,
  editList: [],
  isOpening: false,
  currentPage: MODAL_PAGES.PRODUCT_LIST,
  editType: EDIT_TYPES.OVERVIEW,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
      state.isOpening = false;
    },
    closeModal(state) {
      state.isOpen = false;
      state.isOpening = false;
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
    setEditType(state, action: PayloadAction<string>) {
      state.editType = action.payload;
    },
  },
});

export const {
  openModal,
  closeModal,
  editList,
  setIsOpening,
  setCurrentPage,
  setEditType,
} = modalSlice.actions;
export default modalSlice.reducer;
