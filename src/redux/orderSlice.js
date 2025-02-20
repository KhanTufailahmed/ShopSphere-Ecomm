import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  order: null
};
const orderSlice = createSlice({
  name: "orderSlice",
  initialState: initialState,
  reducers: {
    setOrder(state, action) {
      state.order = action.payload;
    },
  },
});

export const orderAction = orderSlice.actions;
export default orderSlice;
