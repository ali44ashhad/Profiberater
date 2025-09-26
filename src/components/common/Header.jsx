import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Coaching", href: "#" },
    { name: "Team", href: "#" },

    { name: "Contact Us", href: "#" },
  ];
  // const navigation = [
  //   { name: "Home", href: "/" },
  //   { name: "About Us", href: "#" },
  //   { name: "Services", href: "#" },
  //   { name: "Coaching", href: "#" },
  //   { name: "Team", href: "#" },
  //   { name: "More Services", href: "#" },
  //   { name: "Contact Us", href: "#" },
  // ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="w-full bg-[#0f766e] text-white py-2">
        <div className="px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>contact@consultancy.de</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <nav className="px-4" aria-label="Primary">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 no-underline"
              aria-label="Profiberater — home"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #0ea5a4 0%, #0f766e 100%)",
                  boxShadow: "0 6px 18px rgba(15,23,42,0.08)",
                }}
              >
                <span className="text-white font-bold text-xl">C</span>
              </div>

              <div className="leading-tight">
                <span
                  className="block text-2xl font-extrabold text-[#0f172a] tracking-tight"
                  style={{ fontFamily: "Poppins, Inter, system-ui" }}
                >
                  Profiberater
                </span>
                <p
                  className="text-sm text-[#64748b] m-0"
                  style={{ fontFamily: "Inter, system-ui" }}
                >
                  Consulting & Coaching
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative py-2 font-medium text-base no-underline ${
                    isActive(item.href)
                      ? "text-[#0f766e]"
                      : "text-[#374151] hover:text-[#0f766e]"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span
                      className="absolute left-0 -bottom-1 w-full h-0.5"
                      style={{ backgroundColor: "#0f766e" }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button (desktop) */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white shadow"
                style={{
                  background:
                    "linear-gradient(180deg, #0f766e 0%, #0ea5a4 100%)",
                }}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0ea5a4]"
              onClick={() => setIsMenuOpen((s) => !s)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden transition-max-h duration-300 overflow-hidden ${
              isMenuOpen ? "max-h-[600px]" : "max-h-0"
            }`}
            aria-hidden={!isMenuOpen}
          >
            <div className="border-t border-gray-200 bg-white px-2 pt-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-3 rounded-lg text-base font-medium no-underline ${
                    isActive(item.href)
                      ? "text-[#0f766e] bg-[#ecfdf7]"
                      : "text-[#374151] hover:text-[#0f766e] hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-4 py-2 rounded-lg font-semibold text-white shadow"
                  style={{
                    background:
                      "linear-gradient(180deg, #0f766e 0%, #0ea5a4 100%)",
                  }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
