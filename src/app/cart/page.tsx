"use client";

import Image from "next/image";
import Link from "next/link";
import {
  decrement,
  increment,
  removeCart,
  removeFromCart,
} from "@/lib/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const formatCurrency = (amount: number) =>
  `$${amount.toLocaleString("en-US")}`;

export default function CartPage() {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );
  const itemCount = items.reduce((total, item) => total + item.qty, 0);

  if (items.length === 0) {
    return (
      <main className="mx-auto flex min-h-[65vh] max-w-7xl items-center justify-center px-5 py-16 sm:px-8">
        <section className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm sm:px-12">
          <div
            aria-hidden="true"
            className="mx-auto flex size-16 items-center justify-center rounded-full bg-teal-50 text-2xl text-teal-800"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l2.4 11.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 8H6"
              />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
          </div>
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Your cart is empty
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Find something useful for your everyday and it will show up here.
          </p>
          <Link
            href="/products"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            Browse products
            <span aria-hidden="true" className="ml-2">
              &rarr;
            </span>
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-800">
            Your picks
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Shopping cart
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
          </p>
        </div>
        <Link
          href="/products"
          className="text-sm font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 transition hover:text-teal-950"
        >
          &larr; Continue shopping
        </Link>
      </header>

      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-8">
        <section
          aria-label="Cart items"
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">
            <h2 className="font-semibold text-slate-950">Items</h2>
            <button
              type="button"
              onClick={() => dispatch(removeCart())}
              className="rounded-md text-sm font-medium text-slate-500 transition hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              Clear cart
            </button>
          </div>

          <ul className="divide-y divide-slate-200">
            {items.map((item) => (
              <li
                key={item.id}
                className="grid gap-4 px-5 py-5 sm:grid-cols-[7rem_minmax(0,1fr)_auto] sm:items-center sm:px-6"
              >
                <div className="relative aspect-square w-28 overflow-hidden rounded-xl bg-slate-50 sm:w-28">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="112px"
                    className="object-contain p-3"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-950">{item.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-700 sm:hidden">
                    {formatCurrency(item.price)} each
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <div
                      aria-label={`Quantity for ${item.name}`}
                      className="inline-flex items-center rounded-full border border-slate-200"
                    >
                      <button
                        type="button"
                        onClick={() => dispatch(decrement(item.id))}
                        aria-label={`Decrease quantity or remove ${item.name}`}
                        className="inline-flex size-9 items-center justify-center rounded-l-full text-lg text-slate-700 transition hover:bg-slate-100 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-teal-700"
                      >
                        &minus;
                      </button>
                      <span className="min-w-9 text-center text-sm font-semibold text-slate-900">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => dispatch(increment(item.id))}
                        aria-label={`Increase quantity of ${item.name}`}
                        className="inline-flex size-9 items-center justify-center rounded-r-full text-lg text-slate-700 transition hover:bg-slate-100 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-teal-700"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-sm font-medium text-slate-500 underline decoration-slate-300 underline-offset-4 transition hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-3 sm:block sm:border-0 sm:pt-0 sm:text-right">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500 sm:hidden">
                    Line total
                  </p>
                  <div>
                    <p className="hidden text-sm text-slate-500 sm:block">
                      {formatCurrency(item.price)} each
                    </p>
                    <p className="mt-0 text-base font-bold text-slate-950 sm:mt-2">
                      {formatCurrency(item.price * item.qty)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-950">Order summary</h2>
          <div className="mt-5 space-y-4 border-b border-slate-200 pb-5 text-sm">
            <div className="flex justify-between gap-4 text-slate-600">
              <span>Subtotal</span>
              <span className="font-medium text-slate-900">
                {formatCurrency(subtotal)}
              </span>
            </div>
          </div>
          <div className="flex justify-between gap-4 pt-5">
            <span className="font-semibold text-slate-950">Total</span>
            <span className="text-lg font-bold text-slate-950">
              {formatCurrency(subtotal)}
            </span>
          </div>
        </aside>
      </div>
    </main>
  );
}
