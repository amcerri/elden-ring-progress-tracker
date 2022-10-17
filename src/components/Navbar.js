import React from "react";
import logo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const links = [
    { to: "/elden-ring-progress-tracker", element: "Playthrough" },
    {
      to: "/elden-ring-progress-tracker/achievements",
      element: "Achievements",
    },
    {
      to: "/elden-ring-progress-tracker/weapons",
      element: "Weapons & Shields",
    },
    { to: "/elden-ring-progress-tracker/armor", element: "Armor Sets" },
    { to: "/elden-ring-progress-tracker/misc", element: "Misc" },
    { to: "/elden-ring-progress-tracker/faq", element: "FAQ" },
  ];

  const currentLocation = useLocation().pathname;

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className="bg-black text-white">
      <nav className="relative container mx-auto p-2">
        <div className="flex h-12 space-x-6 py-2 my-auto items-center md:h-24">
          {/* Logo */}
          <Link to="/elden-ring-progress-tracker" className="h-full">
            <img
              src={logo}
              className="hidden h-full md:block"
              alt="Elden Ring Logo"
            ></img>
          </Link>
          {/* Hamburguer Icon */}
          <button
            className={`block hamburguer menu-btn md:hidden ${
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
            <span className="text-lg font-mantinia md:text-4xl">E</span>
            <span className="text-md font-mantinia md:text-2xl">
              LDEN RING PROGRESS TRACKER
            </span>
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
          className={`flex-col px-8 py-4 space-y-2 md:hidden ${
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
