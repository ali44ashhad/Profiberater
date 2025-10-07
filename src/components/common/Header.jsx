import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation Links
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Coaching", href: "/coaching" },
    { name: "Team", href: "/team" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ---------- Top Bar ---------- */}
      <div className="w-full bg-[#0f766e] text-white py-1">
        <div className=" mx-auto px-4">
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
              <span>Mon–Fri: 9:00 AM – 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Main Header ---------- */}
      <header
        className={`w-full sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <nav className="mx-auto px-4" role="navigation" aria-label="Primary">
          <div className="flex justify-between items-center h-20">
            {/* ---------- Logo ---------- */}
            <Link
              to="/"
              className="flex items-center space-x-3 no-underline"
              aria-label="Home"
            >
              <img src={logo} alt="logo" className="h-16 w-auto" />
            </Link>

            {/* ---------- Desktop Navigation ---------- */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative py-1 font-medium text-base no-underline transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-[#0f766e]"
                      : "text-[#374151] hover:text-[#0f766e]"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#0f766e]" />
                  )}
                </Link>
              ))}
            </div>

            {/* ---------- CTA Button (Desktop) ---------- */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-1.5 rounded-lg font-semibold text-white shadow-md transition-transform hover:scale-105"
                style={{
                  background:
                    "linear-gradient(180deg, #0f766e 0%, #0ea5a4 100%)",
                }}
              >
                Get Started
              </Link>
            </div>

            {/* ---------- Mobile Menu Button ---------- */}
            <button
              className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0ea5a4]"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* ---------- Mobile Navigation ---------- */}
          <div
            className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
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
                  className={`block px-3 py-1 rounded-lg text-base font-medium no-underline transition-colors duration-200 ${
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
                  className="block w-full text-center px-4 py-1 rounded-lg font-semibold text-white shadow-md transition-transform hover:scale-105"
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
