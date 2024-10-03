import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducer";

// const initialState = {
//   contacts: {
//     items: [],
//   },
//   filters: {
//     name: "",
//   },
// };

// export const contactReducer = (state = initialState, action) => {
//   return state;
// };
// export const store = configureStore({
//   reducer: contactReducer,
// });

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
