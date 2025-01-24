import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display:'swap'
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display:'swap'
});

export const metadata: Metadata = {
  title: "Amisha Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          {/* Preload critical assets */}
          <link rel="preload" href="/Adventure.mp3" as="audio" />
        <link rel="preload" href="/cat.svg" as="image" />
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="icon" href="/catlogo.png" />
    
      </head>
  
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
        {children}
     
    
      </body>
    </html>
  );
}
