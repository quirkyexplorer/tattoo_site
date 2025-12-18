import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsappLive from "./WhatsappLive";
import Nav from "./homeSections/Nav";
import Footer from "./homeSections/Footer";
import "@fontsource/permanent-marker";
import "@fontsource/shadows-into-light";
import '@fontsource/unifrakturmaguntia';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mr. Tattooz",
  description: "Tattoo Art by Miguel Rivas",
};

const instaHandle:string = "https://www.instagram.com/mr.tattooz_";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  z-0`}
        data-new-gr-c-s-check-loaded="8.927.0"
        data-gr-ext-installed=""
      >
        <Nav/>
        {children}
        <Footer instaHandle={instaHandle}/> 
        <WhatsappLive/>
      
      </body>

    </html>
  );
}
