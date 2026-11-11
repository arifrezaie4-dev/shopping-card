import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/lib/features/cart/cartSlice";
import productReducer from "@/lib/features/products/productSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      product: productReducer,
      cart: cartReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
