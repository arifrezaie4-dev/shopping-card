"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/lib/store";
import { loadCartFromStorage, saveCartToStorage } from "@/lib/cart-storage";
import { hydrateCart } from "@/lib/features/cart/cartSlice";
import type { AppStore } from "@/lib/store";

function CartPersistence({
  store,
  children,
}: Readonly<{ store: AppStore; children: ReactNode }>) {
  useEffect(() => {
    const items = loadCartFromStorage();
    if (items !== null) {
      store.dispatch(hydrateCart(items));
    }

    return store.subscribe(() => {
      saveCartToStorage(store.getState().cart.items);
    });
  }, [store]);

  return children;
}

export function StoreProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [store] = useState(makeStore);

  return (
    <Provider store={store}>
      <CartPersistence store={store}>{children}</CartPersistence>
    </Provider>
  );
}
