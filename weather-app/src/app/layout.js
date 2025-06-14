"use client";
import "./globals.css";
import Header from "./components/layout/Header";
import { store } from "./store";
import { Provider } from "react-redux";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?display=swap&family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=SF+Pro+Display:wght@400;500;600;700"
        />
      </head>
      <body>
        <Provider store={store}>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
