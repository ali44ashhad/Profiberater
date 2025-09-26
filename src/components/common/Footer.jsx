// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0f172a] text-white">
      <div className="px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg,#0ea5a4 0%,#0f766e 100%)",
                  boxShadow: "0 6px 18px rgba(15,23,42,0.08)",
                }}
                aria-hidden
              >
                <span className="text-white font-bold text-xl select-none">
                  C
                </span>
              </div>

              <div>
                <span
                  className="block text-2xl font-extrabold text-white tracking-tight select-none"
                  style={{ fontFamily: "Poppins, Inter, system-ui" }}
                >
                  Profiberater
                </span>
                <p className="text-sm text-[#94a3b8] m-0">
                  Consulting & Coaching
                </p>
              </div>
            </Link>

            <p className="text-[#94a3b8] mb-6 max-w-prose">
              Empowering professionals with CV reviews, interview coaching and
              personalised career roadmaps. We help you communicate your value
              and land the role you want.
            </p>

            <div className="flex items-center space-x-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-[#0b1220] rounded-full flex items-center justify-center text-[#cbd5e1] hover:text-white hover:bg-[#0f766e] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 bg-[#0b1220] rounded-full flex items-center justify-center text-[#cbd5e1] hover:text-white hover:bg-[#0f766e] transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-[#0b1220] rounded-full flex items-center justify-center text-[#cbd5e1] hover:text-white hover:bg-[#0f766e] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-[#0b1220] rounded-full flex items-center justify-center text-[#cbd5e1] hover:text-white hover:bg-[#0f766e] transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-[#cbd5e1] hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#cbd5e1] hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/coaching"
                  className="text-[#cbd5e1] hover:text-white transition-colors"
                >
                  Coaching
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-[#cbd5e1] hover:text-white transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/more-services"
                  className="text-[#cbd5e1] hover:text-white transition-colors"
                >
                  More Services
                </Link>
              </li>
            </ul>
          </div> */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-[#cbd5e1] hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#cbd5e1] hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-[#cbd5e1] hover:text-white transition-colors"
                >
                  Coaching
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-[#cbd5e1] hover:text-white transition-colors"
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Info
            </h3>
            <div className="space-y-4 text-[#cbd5e1]">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#0ea5a4] mr-3 flex-shrink-0" />
                <span>123 Business Ave, Toronto, ON</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#0ea5a4] mr-3 flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-white">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#0ea5a4] mr-3 flex-shrink-0" />
                <a
                  href="mailto:hello@careerconsultant.example"
                  className="hover:text-white"
                >
                  hello@careerconsultant.example
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#0b1220] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#94a3b8] text-sm">
              &copy; {currentYear} Profiberater. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center space-x-6">
              <Link
                to="/book-rcic"
                className="text-[#cbd5e1] hover:text-white text-sm transition-colors"
              >
                Book a Meeting RCIC
              </Link>
              <Link
                to="/privacy"
                className="text-[#cbd5e1] hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-[#cbd5e1] hover:text-white text-sm transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/disclaimer"
                className="text-[#cbd5e1] hover:text-white text-sm transition-colors"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
