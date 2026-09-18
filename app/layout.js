import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "NOIRÉ Studio — Luxury Interior Architecture",
  description:
    "NOIRÉ Studio creates timeless interiors shaped by architecture, material and light.",
  keywords: ["interior design", "luxury interiors", "architecture", "renovation", "Mumbai", "Dubai"],
  openGraph: {
    title: "NOIRÉ Studio — Luxury Interior Architecture",
    description: "Spaces designed to be remembered.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#F3EBDD] text-[#1D1D1B] font-[var(--font-manrope)] antialiased">
        {children}
      </body>
    </html>
  );
}

