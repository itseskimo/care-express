"use client";
import "./globals.css";
import { Plus_Jakarta_Sans } from "@next/font/google";
import { Provider } from "react-redux";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import store from '../redux/store'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const stripePromise =  loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


export default function RootLayout({ children }) {
  return (

    <Elements stripe={stripePromise}>
    <Provider store={store}>
    <html lang="en" className={`${plusJakartaSans.variable} font-sans`}>
      <head>
      </head>
      <body> {children}</body>  
    </html>
    </Provider>
    </Elements>

  );
}
