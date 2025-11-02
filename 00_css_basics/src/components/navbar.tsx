export const Navbar = () => {
  const links = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "Login",
      href: "#",
    },
  ];

  return (
    <div className="navbar-root">
      <div className="logo">Home</div>
      <div className="links">
        {links.map((link, idx) => (
          <a className="link-items" key={idx} href={link.href}>
            {link.title}
          </a>
        ))}
        <button className="btn">
          <p>Start free trial</p>
        </button>
      </div>
    </div>
  );
};
