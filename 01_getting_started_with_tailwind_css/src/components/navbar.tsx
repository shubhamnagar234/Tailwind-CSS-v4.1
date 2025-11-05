import Link from "next/link";

export const Navbar = () => {
  const links = [
    {
      href: "/guide",
      title: "Guide",
    },
    {
      href: "/pricing",
      title: "Pricing",
    },
    {
      href: "/login",
      title: "Login",
    },
  ];
  return (
    <div className="flex items-center justify-between gap-8">
      <Link href="/">Home</Link>
      <div className="flex items-center gap-8">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="text-neutral-800 font-medium hover:text-neutral-500 transition duration-200"
          >
            {link.title}
          </Link>
        ))}
        <button className="bg-[#2579F4] px-4 py-2 rounded-lg text-white shadow-lg text-shadow-md tracking-wide cursor-pointer">
          Start free trial
        </button>
      </div>
    </div>
  );
};
