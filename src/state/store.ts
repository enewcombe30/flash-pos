import { configureStore } from "@reduxjs/toolkit";
import OrderReducer from "./orders/orderSlice";
import CounterReducer from "./counter/CounterSlice";
import LoginReducer from "./login/loginSlice";
import numberPadReducer from "./numberPad/numberSlice";
import openModalReducer from "./modal/modalSlice";
import keyboardReducer from "./keyboard/keyboardSlice";

export const store = configureStore({
  reducer: {
    orders: OrderReducer,
    counter: CounterReducer,
    login: LoginReducer,
    numberPad: numberPadReducer,
    modal: openModalReducer,
    keyboard: keyboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
