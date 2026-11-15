import Image from "next/image";
import type { Product } from "@/types/product";
import { AddToCartButton } from "./add-to-cart-button";

export function ProductCard({ product }: Readonly<{ product: Product }>) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/10">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-lg font-semibold text-slate-950">{product.name}</h2>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
          {product.description}
        </p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-lg font-bold text-slate-950">${product.price}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </article>
  );
}
