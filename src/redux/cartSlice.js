import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id);
      if (itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      }
      state.totalPrice += newItem.price;
      state.totalQuantity++;
      // console.log("length is:",state.products.length)
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        state.totalPrice -= findItem.price;
        state.totalQuantity -= findItem.quantity;
        state.products = state.products.filter((item) => item.id !== id); //adds the items to the store that does not match with id
        // alert("item Removed")
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totalQuantity++;
        state.totalPrice += findItem.price;
      }
    },
    decreseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem.quantity < 2) {
        state.products = state.products.filter((item) => item.id !== id);
      }
      if (findItem) {
        findItem.quantity--;
        findItem.totalPrice -= findItem.price;
        state.totalQuantity--;
        state.totalPrice -= findItem.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
