import "../styles/globals.css";
import "../styles/display.css";

import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Casting Express",
  description: "Une application web pour gérer tout ton parcours casting !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gradient-to-b from-slate-500">
        {children}
      </body>
    </html>
  );
}
