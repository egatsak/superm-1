import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.cart.find(
        (prod) => prod.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter((prod) => prod.id !== action.payload);
    },
  },
});

const cartValueSelector = (state) => {
  return state.cart.reduce(
    (sum, current) => sum + current.quantity * current.price,
    0
  );
};

const cartCountSelector = (state) => {
  return state.cart.reduce((sum, current) => sum + current.quantity, 0);
};

export const { addProduct, removeProduct } = cartSlice.actions;

export { cartCountSelector, cartValueSelector };
