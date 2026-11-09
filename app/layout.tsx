import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Symbols } from "@/components/almswell/symbols";
import "./globals.css";
import "./almswell.css";

export const metadata: Metadata = {
  icons: {
    icon: "https://framerusercontent.com/images/LH2AuFe4lGlMLL8QJeupxberA.png",
    apple: "https://framerusercontent.com/images/KtzUBWYTEFE1nmfyDDax3rgRuzQ.png",
  },
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
