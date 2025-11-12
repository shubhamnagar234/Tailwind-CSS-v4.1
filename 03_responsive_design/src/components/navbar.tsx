import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
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
    <div className="flex rounded-full bg-white justify-between items-center mt-4 max-w-4xl mx-auto px-2 py-2 shadow-aceternity">
      <Image
        src="https://ui.aceternity.com/logo.png"
        alt="logo"
        width={30}
        height={30}
        className="rounded-full"
      />
      <div className="flex items-center gap-4 text-md text-neutral-500 mr-10">
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
  );
};
