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
    "Voel je je verloren in de maatschappij of zoek je even rust? Bezoek onze zorgboerderij waar we met behulp van dieren manieren kijken naar een oplossing.",
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
