import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farah-SHOP.CO",
  description: "hackathon 2 SHOP.CO website by Farah official",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AnnouncementBar/>
      <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
