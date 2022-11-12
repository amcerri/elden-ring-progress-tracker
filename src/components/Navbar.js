import React from "react";
import logo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // Location links
  const links = [
    { to: "/", element: "Playthrough" },
    {
      to: "/achievements",
      element: "Achievements",
    },
    {
      to: "/weapons",
      element: "Weapons & Shields",
    },
    { to: "/armor", element: "Armor Sets" },
    { to: "/misc", element: "Misc" },
    { to: "/faq", element: "FAQ" },
  ];

  const currentLocation = useLocation().pathname;

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when the user clicks outside of it
  React.useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.classList.contains("menu-btn")) {
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);


  return (
    <header className="sticky bg-black text-white">
      <nav className="container p-2 md:mx-auto">
        <div className="relative flex h-12 space-x-6 py-2 my-auto items-center md:h-24">
          {/* Logo */}
          <Link to="/" className="h-full">
            <img
              src={logo}
              className="hidden h-full md:block"
              alt="Elden Ring Logo"
            ></img>
          </Link>
          {/* Hamburguer Icon */}
          <button
            className={`block hamburguer md:hidden ${
              isMenuOpen ? "hamburguer--active" : ""
            }`}
            onClick={toggleMenu}
          >
            <span className="hamburguer-top"></span>
            <span className="hamburguer-middle"></span>
            <span className="hamburguer-bottom"></span>
          </button>
          {/* Heading and Menu */}
          <div className="w-full space-y-3">
            {/* Heading */}
            <p className="text-md font-mantinia md:text-2xl md:first-letter:text-3xl">
              ELDEN RING PROGRESS TRACKER
            </p>
            {/* Menu (Desktop) */}
            <ul className="hidden md:flex items-center space-x-6">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className={`text-lg ${
                      currentLocation === link.to
                        ? "menu-desktop--active"
                        : "menu-desktop--inactive"
                    }`}
                  >
                    {link.element}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Menu Mobile */}
        <ul
          className={`absolute left-0 flex-col w-full px-8 py-4 space-y-2 rounded-md bg-black md:hidden ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          {links.map((link, index) => (
            <li
              key={index}
              className={`menu-item ${
                currentLocation === link.to
                  ? "menu-mobile--active"
                  : "menu-mobile--inactive"
              }`}
            >
              <Link to={link.to}>{link.element}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
