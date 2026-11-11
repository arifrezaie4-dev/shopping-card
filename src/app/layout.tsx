import type { Metadata } from "next";
import type { ReactNode } from "react";
import { StoreProvider } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "A simple shopping cart application.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
