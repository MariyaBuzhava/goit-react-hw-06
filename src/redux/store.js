import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

export const contactReducer = (state = initialState, action) => {
  return state;
};
export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});
