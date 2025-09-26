import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaHome,
  FaHospitalAlt,
  FaUniversity,
} from "react-icons/fa";

/**
 * PrimaryServicesThemeMatched.jsx
 * Theme-matched to CredibilitySection:
 * - green + sky accents, Poppins + Inter fonts
 * - framer-motion subtle entrance
 * - 4 compact cards (Forex, Accommodation, Medical Insurance, Education Loan)
 * - icons in green, no thin bottom line on cards
 */

const SERVICES = [
  {
    key: "forex",
    title: "Forex & Remittances",
    bullets: [
      "Competitive exchange rates & transparent fees",
      "Fast international transfers to German accounts",
      "Help with forex documentation",
    ],
    route: "/services/forex-remittances",
    Icon: FaMoneyBillWave,
  },
  {
    key: "accommodation",
    title: "Accommodation",
    bullets: [
      "University-area & budget options",
      "Short-term arrival stays & long-term leases",
      "Assistance with landlord paperwork (Anmeldung support)",
    ],
    route: "/services/accommodation",
    Icon: FaHome,
  },
  {
    key: "insurance",
    title: "Medical Insurance",
    bullets: [
      "Student & travel health plans for Germany",
      "Policy comparison & claim help",
      "Registration support with local providers",
    ],
    route: "/services/medical-insurance",
    Icon: FaHospitalAlt,
  },
  {
    key: "loan",
    title: "Education Loan",
    bullets: [
      "Loan sourcing for tuition & living costs",
      "Documentation & application assistance",
      "Flexible repayment partner options",
    ],
    route: "/services/education-loan",
    Icon: FaUniversity,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.992 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.45, ease: "easeOut" },
  }),
};

export default function PrimaryServices() {
  return (
    <section
      aria-labelledby="primary-services-heading"
      className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-green-50 py-16 lg:py-24"
    >
      {/* subtle SVG pattern layer like CredibilitySection (low opacity) */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M30 10c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20zm0 36c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.163 16-16 16z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto px-6 md:px-12 lg:px-20">
        <header className="max-w-3xl mx-auto text-center mb-8">
          <p
            className="text-sm md:text-base font-semibold tracking-widest"
            style={{ color: "#0f766e", fontFamily: "Poppins, sans-serif" }}
          >
            SERVICES
          </p>

          <h2
            id="primary-services-heading"
            className="mt-3 text-2xl md:text-4xl font-extrabold text-gray-900"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Core services to support your move to Europe
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Quick access to our most-requested services — each card links to a
            full page with details, pricing and booking options.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((svc, idx) => {
            const Icon = svc.Icon;
            return (
              <motion.article
                key={svc.key}
                custom={idx}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className="bg-white rounded-2xl p-5 md:p-6 shadow-lg border border-gray-100 flex flex-col justify-between focus:outline-none focus:ring-4 focus:ring-green-100"
                style={{
                  fontFamily:
                    "Inter, system-ui, -apple-system, 'Segoe UI', Roboto",
                  // ensure no thin bottom line — full-card look
                  borderBottomWidth: 0,
                }}
                tabIndex={0}
                aria-labelledby={`svc-${svc.key}-title`}
              >
                <div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-green-600" aria-hidden />
                    </div>

                    <div className="flex-1">
                      <h3
                        id={`svc-${svc.key}-title`}
                        className="text-lg font-semibold text-gray-900"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {svc.title}
                      </h3>

                      <ul
                        className="mt-3 text-sm text-gray-600 space-y-2"
                        style={{ lineHeight: 1.45 }}
                        role="list"
                        aria-label={`${svc.title} short bullets`}
                      >
                        {svc.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 20 20"
                              fill="none"
                              aria-hidden
                              className="flex-shrink-0 mt-1"
                            >
                              <circle cx="10" cy="10" r="6" fill="#0f766e" />
                            </svg>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <Link
                    to={svc.route}
                    className="text-sm font-medium text-green-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a4]/30"
                    aria-label={`Learn more about ${svc.title}`}
                  >
                    Learn more
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-green-700 transition"
                    aria-label={`Get help with ${svc.title}`}
                  >
                    Get help
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
