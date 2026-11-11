import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, Product } from "@/types/product";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const existing = state.items.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
    increment(state, action: PayloadAction<number>) {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) {
        product.qty += 1;
      }
    },
    decrement(state, action: PayloadAction<number>) {
      const product = state.items.find((item) => item.id === action.payload);
      if (product && product.qty > 1) {
        product.qty -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    removeCart(state) {
      state.items = [];
    },
    hydrateCart(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload;
    },
  },
});

export const {
  addToCart,
  increment,
  decrement,
  removeFromCart,
  removeCart,
  hydrateCart,
} = cartSlice.actions;
export default cartSlice.reducer;
