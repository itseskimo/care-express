"use client";
import "./globals.css";
import Script from 'next/script'
import { Plus_Jakarta_Sans } from "@next/font/google";
import { Provider } from "react-redux";
import store from '../redux/store'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
    <html lang="en" className={`${plusJakartaSans.variable} font-sans`}>
      <head>
      {/* <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css"/> */}
      </head>

      <body> {children}
      {/* <Script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></Script> */}
      </body>
      
    </html>
    </Provider>

  );
}
