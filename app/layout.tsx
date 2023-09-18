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
  title: "Dieren Manieren - Dagbesteding",
  description:
    "Voel je je opgesloten in de maatschappij, ben je niet meer zeker wat je nu doet of wat je wilt, ga je niet meer naar school of is werken nu niet aan de orde. Kom dan naar de zorgboerderij.",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content={metadata.title} />
        <meta name="og:description" content={metadata.description} />
        <meta name="og:image" content="assets/dierenmanieren.png" />
        <meta name="og:url" content="https://dierenmanieren.nl" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="assets/dierenmanieren.png" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="assets/dierenmanieren.png" />
        <meta name="twitter:url" content="https://dierenmanieren.nl" />
        <meta
          name="keywords"
          content="zorgboerderij, dagbesteding, honden coaching, paarden coaching, natuur, therapie, dieren, dieren manieren"
        ></meta>
      </head>
      <body className={inter.className}>
        <ServerProviders>
          <ClientProviders>
            <ChakraServerNavbar />
            {/* <PageContent>{children}</PageContent> */}
            {children}
            <Footer />
          </ClientProviders>
        </ServerProviders>
      </body>
    </html>
  );
}
