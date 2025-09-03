import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NumberPadState {
  padValue: string;
}

const initialState: NumberPadState = {
  padValue: "",
};

const numberPadSlice = createSlice({
  name: "numberPad",
  initialState,
  reducers: {
    setPadValue(state, action: PayloadAction<string>) {
      state.padValue = action.payload;
    },
    clearPadValue(state) {
      state.padValue = "";
    },
  },
});

export const { setPadValue, clearPadValue } = numberPadSlice.actions;
export default numberPadSlice.reducer;
