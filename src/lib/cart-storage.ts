import type { CartItem } from "@/types/product";

const CART_STORAGE_KEY = "cart";

function isCartItem(value: unknown): value is CartItem {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const item = value as Record<string, unknown>;
  return (
    typeof item.id === "number" &&
    Number.isInteger(item.id) &&
    typeof item.name === "string" &&
    typeof item.description === "string" &&
    typeof item.image === "string" &&
    typeof item.price === "number" &&
    Number.isFinite(item.price) &&
    typeof item.qty === "number" &&
    Number.isInteger(item.qty) &&
    item.qty > 0
  );
}

export function loadCartFromStorage(): CartItem[] | null {
  try {
    const serializedCart = window.localStorage.getItem(CART_STORAGE_KEY);
    if (serializedCart === null) {
      return null;
    }

    const parsed: unknown = JSON.parse(serializedCart);
    if (!Array.isArray(parsed) || !parsed.every(isCartItem)) {
      throw new Error("Stored cart data has an invalid shape.");
    }

    return parsed;
  } catch (error) {
    console.error("Unable to load the saved cart from localStorage.", error);
    return null;
  }
}

export function saveCartToStorage(items: CartItem[]): void {
  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error("Unable to save the cart to localStorage.", error);
  }
}
