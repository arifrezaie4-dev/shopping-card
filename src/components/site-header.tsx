"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/cart", label: "Cart" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const cartQuantity = useAppSelector((state) =>
    state.cart.items.reduce((quantity, item) => quantity + item.qty, 0),
  );

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-2 px-5 sm:gap-4 sm:px-8"
      >
        <Link
          href="/"
          className="shrink-0 text-lg font-bold tracking-tight text-slate-950 sm:text-xl"
        >
          Shopping<span className="text-teal-700">.</span>
        </Link>
        <ul className="flex items-center gap-0 sm:gap-3">
          {navigation.map(({ href, label }) => {
            const isActive =
              pathname === href ||
              (href !== "/" && pathname.startsWith(`${href}/`));

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-flex min-h-10 items-center rounded-full px-2 text-xs font-medium transition sm:px-4 sm:text-sm ${
                    isActive
                      ? "bg-teal-50 text-teal-900"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  {label}
                  {href === "/cart" && (
                    <span
                      aria-label={`${cartQuantity} ${
                        cartQuantity === 1 ? "item" : "items"
                      } in cart`}
                      className="ml-1 inline-flex min-w-5 items-center justify-center rounded-full bg-teal-700 px-1 py-0.5 text-xs font-semibold text-white sm:ml-2 sm:px-1.5"
                    >
                      {cartQuantity > 99 ? "99+" : cartQuantity}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
