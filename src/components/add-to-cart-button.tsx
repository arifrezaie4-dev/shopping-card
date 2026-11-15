"use client";

import { addToCart } from "@/lib/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/hooks";
import type { Product } from "@/types/product";

export function AddToCartButton({ product }: Readonly<{ product: Product }>) {
  const dispatch = useAppDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(addToCart(product))}
      aria-label={`Add ${product.name} to cart`}
      className="inline-flex min-h-10 items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
    >
      Add to cart
    </button>
  );
}
