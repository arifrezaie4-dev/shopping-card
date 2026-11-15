import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";

export const metadata: Metadata = {
  title: "Products | Shopping",
  description: "Explore useful tech for everyday life.",
};

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
      <header className="mb-9 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-800">
          The collection
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Products for your everyday
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Browse fitness, audio, and home tech selected to make the little
          things in your day work better.
        </p>
      </header>

      <section
        aria-label="All products"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
