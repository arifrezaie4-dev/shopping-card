import type { Metadata } from "next";
import type { ReactNode } from "react";
import { StoreProvider } from "./providers";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopping | Useful tech for everyday life",
  description:
    "Shop useful everyday tech, from fitness essentials to speakers and security cameras.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <StoreProvider>
          <SiteHeader />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
