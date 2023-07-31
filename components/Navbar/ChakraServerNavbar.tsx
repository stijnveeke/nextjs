import React from "react";
import Navbar from "./ChakraNavbar/Navbar";
import getNavbar from "../../lib/getNavbar";

export default async function ChakraServerNavbar() {
  const navbar = await getNavbar();
  return (
    <Navbar
      items={navbar.navItems.map((item) => {
        return {
          label: item.label,
          href: item.scrollId,
          children: item.children,
        };
      })}
    />
  );
}
