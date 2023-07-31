import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import getNavbar from "../lib/getNavbar";
import { ClientProviders } from "./ClientProviders";
import ChakraServerNavbar from "../components/Navbar/ChakraServerNavbar";
import PageContent from "./PageContent";
import React from "react";
import { ServerProviders } from "./ServerProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dieren manieren",
  description: "",
};

export default async function RootLayout({ children }) {
  const navbar = await getNavbar();
  const bodyRef = React.createRef<HTMLBodyElement>();
  return (
    <html
      lang="en"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <head>
        <link type="image/png" rel="icon" href="assets/dierenmanieren.png" />
        <meta name="description" content="" />
      </head>
      <body className={inter.className}>
        <ServerProviders>
          <ClientProviders>
            <ChakraServerNavbar />
            <PageContent>{children}</PageContent>
            <Footer />
          </ClientProviders>
        </ServerProviders>
      </body>
    </html>
  );
}
