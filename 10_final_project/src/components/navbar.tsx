"use client";

import { Container } from "./container";
import { Logo } from "./logo";
import Link from "next/link";

export const Navbar = () => {
  const navLinks = [
    {
      title: "Features",
      href: "/features",
    },
    {
      title: "Products",
      href: "/products",
    },
    {
      title: "Social",
      href: "/socials",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
  ];
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <Container className="py-4 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-sm text-neutral-600 dark:text-neutral-400 font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm text-neutral-600 dark:text-neutral-400 font-medium"
          >
            Login
          </Link>
          <Link
            href="/login"
            className="text-sm text-neutral-600 dark:text-neutral-400 font-medium"
          >
            Signup
          </Link>
        </div>
      </Container>
    </div>
  );
};
