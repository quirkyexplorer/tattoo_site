import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsappLive from "./WhatsappLive";
import Nav from "./homeSections/Nav";
import Footer from "./homeSections/Footer";
import "@fontsource/permanent-marker";
import "@fontsource/shadows-into-light";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mignus_Art",
  description: "Tattoo Art by Miguel Rivas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        data-new-gr-c-s-check-loaded="8.927.0"
        data-gr-ext-installed=""
      >
        <Nav/>
        
        {children}
        <Footer/>
        <WhatsappLive/>
       
      </body>
    </html>
  );
}
