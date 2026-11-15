import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";

const featuredProducts = products.slice(0, 3);
const heroProduct = products[0];

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
            <span aria-hidden="true" className="size-2 rounded-full bg-teal-500" />
            Thoughtful tech for everyday life
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Good gadgets.
            <span className="mt-2 block text-teal-700">Better everyday.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Find useful tech that fits your day, from fitness essentials to
            better sound and a little more peace of mind.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              Explore products
              <span aria-hidden="true" className="ml-2">
                &rarr;
              </span>
            </Link>
            <span className="text-sm text-slate-500">
              Simple shopping, useful finds.
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2.5rem] bg-teal-100/70 sm:-inset-6"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-5 shadow-xl shadow-slate-900/10 sm:p-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                Featured find
              </span>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                Customer favorite
              </span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-50">
              <Image
                src={heroProduct.image}
                alt={heroProduct.name}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-contain p-8"
              />
            </div>
            <div className="flex items-end justify-between gap-4 pt-5">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  {heroProduct.name}
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  {heroProduct.description}
                </p>
              </div>
              <p className="shrink-0 text-lg font-bold text-slate-950">
                ${heroProduct.price}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-800">
                Shop the collection
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Useful tech, picked for you
              </h2>
            </div>
            <Link
              href="/products"
              className="text-sm font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 transition hover:text-teal-950"
            >
              View all products
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
