import React from "react";
import Navbar from "./Navbar";
import getNavbar from "../../lib/getNavbar";

export default async function NavbarServer() {
  const navbarData = await getNavbar();
  return <Navbar {...navbarData} />;
}
