import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nobait™ — Danske nyheder uden clickbait",
  description:
    "Chrome-extension der erstatter clickbait-overskrifter på Ekstrabladet, Politiken og Børsen med faktuelle overskrifter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#f5f5f0]`}
      >
        {children}
      </body>
    </html>
  );
}
