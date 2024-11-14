"use client"

import { DataProvider } from "@/api/client";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[#2b2b2b] h-full`}
      >
        <DataProvider>
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
