import type { Metadata } from "next";
import { nunitoSans } from './fonts';
import "./globals.css";




export const metadata: Metadata = {
  title: "Africargo: Effortless Logistics, Elevated Performance.",
  description: "Streamline your supply chain with Africargo – the ultimate logistics solution designed to automate, optimize, and deliver",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
