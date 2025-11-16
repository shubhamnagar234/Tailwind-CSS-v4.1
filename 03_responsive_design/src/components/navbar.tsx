"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconMenu2 } from "@tabler/icons-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/projects",
      title: "Projects",
    },
    {
      href: "/contact",
      title: "Contact",
    },
  ];
  return (
    <div className="relative">
      <div className="flex relative md:rounded-full bg-white justify-between items-center mt-4 max-w-4xl mx-auto px-2 py-2 shadow-aceternity">
        <Image
          src="https://ui.aceternity.com/logo.png"
          alt="logo"
          width={30}
          height={30}
          className="rounded-full"
        />
        <div className="hidden md:flex items-center gap-4 text-md text-neutral-500 mr-10">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="hover:text-neutral-900 transition duration-200"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <IconMenu2 />
        </button>
        {open && (
          <div className="absolute md:hidden inset-x-0 bg-white rounded-md shadow-aceternity top-15 max-w-[95%] mx-auto">
            <div className="flex flex-col items-center gap-4 text-md text-neutral-500 p-4">
              {links.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className="hover:text-neutral-900 transition duration-200"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
