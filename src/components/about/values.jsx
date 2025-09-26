import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Font Awesome
import {
  FaMoneyCheckAlt,
  FaHome,
  FaUserShield,
  FaUniversity,
} from "react-icons/fa";

/**
 * WhatWeValue.jsx — theme-matched services section
 * Services: Forex & Remittances, Accommodation, Medical Insurance, Education Loan
 * Icons: FA green styled
 */

const services = [
  {
    key: "forex-remittance",
    title: "Forex & Remittances",
    desc: "Competitive forex rates, fast remittance options and guidance for transferring funds to/from Germany safely.",
    route: "/services/forex-remittance",
    icon: <FaMoneyCheckAlt className="w-7 h-7 text-green-600" />,
  },
  {
    key: "accommodation",
    title: "Accommodation",
    desc: "Help finding student-friendly and professional accommodation, lease guidance and neighbourhood recommendations.",
    route: "/services/accommodation",
    icon: <FaHome className="w-7 h-7 text-green-600" />,
  },
  {
    key: "medical-insurance",
    title: "Medical Insurance",
    desc: "Compare German health insurance plans (statutory & private) and pick the right coverage for study or work.",
    route: "/services/medical-insurance",
    icon: <FaUserShield className="w-7 h-7 text-green-600" />,
  },
  {
    key: "education-loan",
    title: "Education Loan",
    desc: "Loan advisory and application support for study loans, repayment planning and document assistance.",
    route: "/services/education-loan",
    icon: <FaUniversity className="w-7 h-7 text-green-600" />,
  },
];

const cardMotion = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function WhatWeValue() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-green-50 py-20"
      aria-labelledby="what-we-value"
      style={{ fontFamily: "Inter, system-ui, 'Segoe UI', Roboto" }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
        <header className="mb-10 text-center md:text-left">
          <h2
            id="what-we-value"
            className="text-3xl md:text-4xl font-extrabold text-gray-900"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our Services
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Focused services to make your move and life in Germany easier —
            practical, transparent and tailored.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.article
              key={s.key}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardMotion}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  {s.icon}
                </div>
                <h3
                  id={`svc-${s.key}-title`}
                  className="text-lg font-bold text-gray-900"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <Link
                    to={s.route}
                    className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30"
                  >
                    {s.title}
                  </Link>
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                {s.desc}
              </p>
              <div className="mt-4">
                <Link
                  to={s.route}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-sky-600 transition"
                >
                  Learn more
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
