import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Znajdź fachowca | Marketplace usług",
  description:
    "Znajdź zweryfikowanego fachowca w Twojej okolicy: hydraulik, elektryk, sprzątanie, przeprowadzki, remonty i więcej.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white font-sans text-gray-900">
        {children}
      </body>
    </html>
  );
}
