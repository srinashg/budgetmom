import type { Metadata } from "next";
import { Inter as GeistSans } from 'next/font/google';
import { Roboto_Mono as GeistMono } from 'next/font/google';
import "./globals.css";

const geistSans = GeistSans({
  subsets: ["latin"],
});

const geistMono = GeistMono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BudgetMom | Expense Tracking & Budgeting App",
  description: "Simplify your finances and take control of your budget with our all-in-one expense tracking and budgeting app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
