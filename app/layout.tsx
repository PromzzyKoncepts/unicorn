import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Symbols } from "@/components/humanitarian/symbols";
import "./globals.css";
import "./site-design.css";

export const metadata: Metadata = {
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Symbols />
      </body>
    </html>
  );
}

