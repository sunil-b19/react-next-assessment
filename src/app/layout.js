"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import head from 'next/head';
import Header from "@/components/Header";
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import 'chart.js/auto'; // Import chart.js/auto

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></link>
        <title>Exclusive</title>
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          <Header />
          {children}
        </Provider>
        <ToastContainer autoClose={500} position='top-right' />
      </body>
    </html>
  );
}
