"use client";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./store";
import { Header } from "@/components/layout/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
