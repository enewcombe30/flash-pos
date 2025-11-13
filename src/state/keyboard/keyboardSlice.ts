import { createSlice } from "@reduxjs/toolkit";

interface isOpen {
  open: boolean;
}

const initialState: isOpen = {
  open: false,
};

export const keyboardSlice = createSlice({
  name: "keyboard",
  initialState,
  reducers: {
    openKeyboard: (state) => {
      state.open = true;
    },
    closeKeyboard: (state) => {
      state.open = false;
    },
  },
});

export const { openKeyboard, closeKeyboard } = keyboardSlice.actions;

export default keyboardSlice.reducer;
