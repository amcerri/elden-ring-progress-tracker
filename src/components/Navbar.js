import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white">
      <nav className="relative container mx-auto p-2">
        {/* Header and Menu */}
        <div className="flex h-12 space-x-6 my-auto items-center md:h-24">
          {/* Logo */}
          <img
            src={logo}
            className="hidden h-full md:block"
            alt="Elden Ring Logo"
          ></img>
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
            <h1 className="text-2xl md:text-4xl">Elden Ring Progress Tracker</h1>
            {/* Menu (Desktop) */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/">Playthrough</Link>
              <Link to="/achievements">Achievements</Link>
              <Link to="/weapons">Weapons & Shields</Link>
              <Link to="/armor-sets">Armor Sets</Link>
              <Link to="/misc">Mis</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>
        </div>
        {/* Menu Mobile */}
        <div className={`flex-col px-8 py-4 ml-10 space-y-6 bg-black md:hidden ${isMenuOpen ? "flex" : "hidden"}`}>
              <Link to="/">Playthrough</Link>
              <Link to="/achievements">Achievements</Link>
              <Link to="/weapons">Weapons & Shields</Link>
              <Link to="/armor-sets">Armor Sets</Link>
              <Link to="/misc">Mis</Link>
              <Link to="/faq">FAQ</Link>
          </div>
      </nav>
    </header>
  );
};

export default Navbar;
