"use client";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import React from "react";
import { NavItem } from "./Navitem";
import * as FaIcons from "react-icons/fa";
import { IconBase } from "react-icons";
import Icon from "../Icon";

export const Navbar: React.FC<INavbar> = (props) => {
  console.log(props);
  return (
    <Disclosure as="nav" className="navbar bg-tertiary">
      {({ open }) => (
        <>
          <div className="relative mx-auto w-100 px-2 sm:px-6 lg:px-8">
            <div className="items-center justify-between">
              <div className="grid grid-cols-6 items-center justify-between">
                <div className="inset-y-0 flex items-center sm:hidden col-span-1">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-tertiary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <FaIcons.FaTimes
                        className="block h-6 w-6 text-primary hover:text-primaryHover"
                        aria-hidden="true"
                      />
                    ) : (
                      <FaIcons.FaBars
                        className="block h-6 w-6 text-primary hover:text-primaryHover"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex justify-center sm:justify-start items-center col-span-4 sm:col-span-1">
                  <Image
                    src={"/assets/" + props.logo.path}
                    alt={props.logo.alt}
                    width={100}
                    height={100}
                    className="block h-10 sm:h-23 w-auto p-2"
                  />
                </div>
                <div className="hidden sm:flex items-center justify-center col-span-4">
                  {/* <div className="flex space-x-4 items-center"> */}
                  {props.navItems.map((item, index) => (
                    <NavItem
                      key={index}
                      label={item.label}
                      href={"#" + item.scrollId}
                      className="text-primary hover:text-primaryHover px-3 py-2 rounded-md text-sm font-medium"
                    />
                  ))}
                  {/* </div> */}
                </div>
                <div className={"col-span-1 w-auto"}>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {props.socialLinks.map((link, index) => (
                      <Icon
                        key={index}
                        iconTag={link.icon}
                        className={
                          "text-primary hover:text-primaryHover h-6 w-6 mx-1"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
