import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/poppins-bold-webfont.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "QR Code Generator",
  description: "Easily create custom QR codes with personalized colors, backgrounds, and logos for all your needs.",
  keywords: ["QR Code Generator", "Custom QR Codes", "QR Code Maker", "Web App"],
  authors: [{ name: "KHALID", url: "https://khalid-tourhzaoui.vercel.app/" }],
  viewport: "width=device-width, initial-scale=1", // Ensures proper scaling
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/png" href="/qr-code.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
