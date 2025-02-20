import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  searchterm:'',
  filteredData:[]
};
const productSlice = createSlice({
  name: "productSlice",
  initialState: initialState,
  reducers: {
    setProduct(state, action) {
      state.products = action.payload;
    },
    setSearchTerm(state,action){
      state.searchterm=action.payload
      state.filteredData=state.products.filter((product)=>product.name.toLowerCase().includes(state.searchterm.toLowerCase()))
    }
  },
});

export const productAction = productSlice.actions;
export default productSlice;
