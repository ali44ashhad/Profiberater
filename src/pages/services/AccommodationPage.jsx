import React, { useEffect, useMemo, useState } from "react";
import {
  FaHome,
  FaBuilding,
  FaBed,
  FaMapMarkerAlt,
  FaRegClock,
  FaFileAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";
import BookAppointment from "../../components/common/BookAppointment";

/**
 * AccommodationPage.jsx
 * Theme: green (#0f766e) + sky accents, Poppins headings, Inter body
 *
 * Sections:
 * - Hero (left aligned)
 * - Accommodation types (3x2 grid on desktop)
 * - How to search & book (step timeline)
 * - Budget Helper (simple calculator)
 * - FAQs (accessible)
 * - Final CTA
 *
 * Notes:
 * - Uses inline fontFamily hints (Poppins / Inter)
 * - Icons use green color to match theme
 * - Animations respect prefers-reduced-motion via framer-motion hook
 */

const THEME_GREEN = "#0f766e";

export default function AccommodationPage() {
  const reduce = useReducedMotion();

  useEffect(() => {
    // small accessibility: set document title when this component mounts
    const prev = document.title;
    document.title = "Accommodation — Profiberater / career consultant";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <main
      className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-emerald-50 py-12"
      style={{
        fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto",
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
        <HeroSection reduce={reduce} />
        <TypesGrid reduce={reduce} />
        <HowToBook reduce={reduce} />
        <BudgetHelper />
        <FAQs reduce={reduce} />
        <FinalCTA />
      </div>
    </main>
  );
}

/* -------------------- HERO -------------------- */
function HeroSection({ reduce }) {
  return (
    <header className="rounded-2xl p-6 md:p-10 lg:p-14 bg-white shadow-sm border border-gray-100 mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7">
          <p
            className="text-sm font-semibold tracking-widest"
            style={{ color: "#0ea5a4", fontFamily: "Poppins, sans-serif" }}
          >
            ACCOMMODATION
          </p>

          <h1
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Find safe, affordable housing for your studies in Germany
          </h1>

          <p
            className="mt-4 text-sm md:text-base text-slate-700 max-w-2xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            We help students find verified halls, private rooms, shared flats
            and short-term stays near universities. Get guidance on contracts,
            deposits, and tenant rights — plus tailored options that match your
            budget and lifestyle.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#types"
              className="inline-flex items-center gap-2 bg-[var(--green,#0f766e)] text-white px-5 py-3 rounded-md font-semibold shadow hover:scale-[1.01] transition"
              style={{ backgroundColor: THEME_GREEN }}
            >
              Browse options
            </a>

            <a
              href="#how"
              className="inline-flex items-center gap-2 border border-[#cfeee8] text-[var(--green,#0f766e)] px-4 py-3 rounded-md font-medium bg-white hover:bg-sky-50 transition"
              style={{ color: THEME_GREEN }}
            >
              How it works
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center">
                <FaMapMarkerAlt className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">
                  Near your campus
                </div>
                <div className="text-slate-600">Walking / transit options</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center">
                <FaRegClock className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">
                  Fast response
                </div>
                <div className="text-slate-600">
                  Listings & support same-day
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center">
                <FaFileAlt className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">
                  Contract help
                </div>
                <div className="text-slate-600">
                  We explain clauses and deposit rules
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 8 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[linear-gradient(135deg,#ecfdfa_0%,#f0f9ff_100%)] rounded-2xl p-6 border border-gray-100 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg bg-emerald-50 flex items-center justify-center">
                <FaHome className="w-6 h-6 text-green-600" />
              </div>

              <div>
                <div className="text-sm text-slate-700">
                  Featured: University Halls
                </div>
                <div className="font-semibold text-slate-900">
                  Comfort Hall — Mitte, Berlin
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white rounded-lg p-3 border border-gray-100">
                <div className="text-xs text-slate-500">Rent / month</div>
                <div className="font-semibold text-slate-900">€420</div>
              </div>

              <div className="bg-white rounded-lg p-3 border border-gray-100">
                <div className="text-xs text-slate-500">Distance</div>
                <div className="font-semibold text-slate-900">12 min walk</div>
              </div>

              <div className="bg-white rounded-lg p-3 border border-gray-100">
                <div className="text-xs text-slate-500">Deposit</div>
                <div className="font-semibold text-slate-900">
                  €840 (2 months)
                </div>
              </div>

              <div className="bg-white rounded-lg p-3 border border-gray-100">
                <div className="text-xs text-slate-500">Availability</div>
                <div className="font-semibold text-slate-900">Immediate</div>
              </div>
            </div>

            <div className="mt-4 flex gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--green,#0f766e)] text-white px-4 py-2 rounded-md font-semibold"
                style={{ backgroundColor: THEME_GREEN }}
              >
                Enquire now
              </a>
              <a
                href="/listings"
                className="inline-flex items-center gap-2 border border-gray-200 px-3 py-2 rounded-md bg-white text-[var(--green,#0f766e)]"
                style={{ color: THEME_GREEN }}
              >
                View listings
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

/* -------------------- TYPES GRID (3 columns x 2 rows on desktop) -------------------- */
function TypesGrid({ reduce }) {
  const cards = [
    {
      key: "halls",
      title: "University Halls",
      desc: "Single rooms in student residences — organised, secure and close to campus. Often includes utilities & wifi.",
      icon: <FaBuilding className="w-6 h-6 text-green-600" />,
    },
    {
      key: "shared",
      title: "Shared Flats (WG)",
      desc: "Shared apartments (Wohngemeinschaft) — private room + shared kitchen. Affordable and social for international students.",
      icon: <FaBed className="w-6 h-6 text-green-600" />,
    },
    {
      key: "studio",
      title: "Private Studio",
      desc: "Self-contained studio apartments — higher cost but privacy and convenience for single students or couples.",
      icon: <FaHome className="w-6 h-6 text-green-600" />,
    },
    {
      key: "short",
      title: "Short-term / Homestay",
      desc: "Temporary placements, homestays, or serviced apartments — perfect for arrival and initial settling in.",
      icon: <FaRegClock className="w-6 h-6 text-green-600" />,
    },
    {
      key: "family",
      title: "Family Housing",
      desc: "Larger apartments suitable for couples and families — guidance on schools and neighbourhoods included.",
      icon: <FaMapMarkerAlt className="w-6 h-6 text-green-600" />,
    },
    {
      key: "agent",
      title: "Assisted Placement",
      desc: "We arrange a pre-screened accommodation package (move-in ready) including contracts and local support.",
      icon: <FaFileAlt className="w-6 h-6 text-green-600" />,
    },
  ];

  return (
    <section id="types" className="mt-10" aria-labelledby="types-heading">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
          <FaBuilding className="w-5 h-5 text-green-600" />
        </div>
        <h2
          id="types-heading"
          className="text-xl md:text-2xl font-extrabold text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Accommodation types
        </h2>
      </div>

      <p className="mt-3 text-sm text-slate-600 max-w-2xl">
        Choose the housing type that fits your budget, study style and duration
        — we explain pros and cons below.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <motion.article
            key={c.key}
            initial={reduce ? {} : { opacity: 0, y: 8 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full"
            aria-labelledby={`type-${c.key}-title`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                {c.icon}
              </div>

              <div className="flex-1">
                <h3
                  id={`type-${c.key}-title`}
                  className="font-semibold text-slate-900"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {c.title}
                </h3>
                <p
                  className="mt-2 text-sm text-slate-600"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {c.desc}
                </p>

                {/* remove bottom line per request — no divider */}
                <div className="mt-4 flex gap-3">
                  <a
                    href="/listings"
                    className="text-sm font-semibold text-[var(--green,#0f766e)] inline-flex items-center gap-2"
                  >
                    View listings
                  </a>
                  <a href="/contact" className="text-sm text-slate-600">
                    Ask an advisor
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* -------------------- HOW TO SEARCH & BOOK (timeline) -------------------- */
function HowToBook({ reduce }) {
  const steps = [
    {
      n: 1,
      title: "Tell us your needs",
      desc: "Share your university, arrival date, budget and preferences (room type, commute time).",
    },
    {
      n: 2,
      title: "Shortlist & virtual tours",
      desc: "We send curated options with photos & video tours. Book slots for live viewing.",
    },
    {
      n: 3,
      title: "Contract & advice",
      desc: "We explain the tenancy contract, deposit rules, utility setup and registration (Anmeldung) basics.",
    },
    {
      n: 4,
      title: "Move-in support",
      desc: "We coordinate check-in, inventory verification and emergency contact setup.",
    },
  ];

  return (
    <section id="how" className="mt-12" aria-labelledby="how-heading">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
          <FaFileAlt className="w-5 h-5 text-green-600" />
        </div>
        <h2
          id="how-heading"
          className="text-xl md:text-2xl font-extrabold text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          How to search & book
        </h2>
      </div>

      <ol className="mt-6 space-y-4">
        {steps.map((s, idx) => (
          <motion.li
            key={s.n}
            initial={reduce ? {} : { opacity: 0, x: -10 }}
            animate={reduce ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-4 items-start"
          >
            <div className="min-w-[44px] h-11 rounded-full bg-[var(--green,#0f766e)]/10 text-[var(--green,#0f766e)] flex items-center justify-center font-semibold">
              {s.n}
            </div>
            <div>
              <div
                className="font-semibold text-slate-900"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {s.title}
              </div>
              <p
                className="text-sm text-slate-600 mt-1"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {s.desc}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

/* -------------------- BUDGET HELPER (simple) -------------------- */
function BudgetHelper() {
  const [rent, setRent] = useState(450);
  const [depositMonths, setDepositMonths] = useState(2);
  const [utilities, setUtilities] = useState(80);
  const [durationMonths, setDurationMonths] = useState(12);

  const totalInitial = useMemo(() => {
    // initial cost = deposit + first month rent + setup
    const deposit = rent * depositMonths;
    const firstMonth = rent;
    const setup = 60;
    return deposit + firstMonth + setup;
  }, [rent, depositMonths]);

  const monthlyOngoing = useMemo(() => {
    return rent + utilities;
  }, [rent, utilities]);

  const totalYear = useMemo(() => {
    return monthlyOngoing * durationMonths + (depositMonths === 0 ? 0 : 0); // deposit already counted in initial
  }, [monthlyOngoing, durationMonths]);

  return (
    <section className="mt-12" aria-labelledby="budget-heading">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
          <FaMoney className="w-5 h-5 text-green-600" />
        </div>
        <h2
          id="budget-heading"
          className="text-xl md:text-2xl font-extrabold text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Budget helper
        </h2>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <label className="block">
              <div className="text-xs text-slate-500">
                Estimated monthly rent (€)
              </div>
              <input
                type="number"
                value={rent}
                onChange={(e) => setRent(Number(e.target.value || 0))}
                className="mt-1 w-full rounded-md border px-3 py-2"
                min={0}
              />
            </label>

            <label className="block">
              <div className="text-xs text-slate-500">Deposit (months)</div>
              <input
                type="number"
                value={depositMonths}
                onChange={(e) => setDepositMonths(Number(e.target.value || 0))}
                className="mt-1 w-full rounded-md border px-3 py-2"
                min={0}
              />
            </label>

            <label className="block">
              <div className="text-xs text-slate-500">
                Utilities / month (€)
              </div>
              <input
                type="number"
                value={utilities}
                onChange={(e) => setUtilities(Number(e.target.value || 0))}
                className="mt-1 w-full rounded-md border px-3 py-2"
                min={0}
              />
            </label>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <label className="text-sm text-slate-600">Duration (months)</label>
            <input
              type="range"
              min={1}
              max={24}
              value={durationMonths}
              onChange={(e) => setDurationMonths(Number(e.target.value))}
              className="w-full"
            />
            <div className="w-14 text-right font-semibold">
              {durationMonths}m
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-gray-50 rounded-lg p-4 text-sm">
              <div className="text-xs text-slate-500">Initial cost</div>
              <div className="font-semibold text-slate-900">
                €{totalInitial.toLocaleString()}
              </div>
              <div className="text-xs text-slate-600 mt-1">
                Deposit + first month + setup
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 text-sm">
              <div className="text-xs text-slate-500">Monthly ongoing</div>
              <div className="font-semibold text-slate-900">
                €{monthlyOngoing.toLocaleString()}
              </div>
              <div className="text-xs text-slate-600 mt-1">
                Rent + utilities
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 text-sm">
              <div className="text-xs text-slate-500">
                Estimated total ({durationMonths}m)
              </div>
              <div className="font-semibold text-slate-900">
                €{(totalInitial + totalYear).toLocaleString()}
              </div>
              <div className="text-xs text-slate-600 mt-1">
                Includes initial cost + ongoing
              </div>
            </div>
          </div>
        </div>

        <aside className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h4 className="font-semibold text-slate-900">Money-saving tips</h4>
          <ul className="mt-3 text-sm text-slate-600 space-y-2">
            <li>Share a WG to split utilities and internet.</li>
            <li>Ask for 1-month rent reduction for annual contracts.</li>
            <li>Use off-season move-in dates for lower rent.</li>
          </ul>

          <div className="mt-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--green,#0f766e)] text-white px-4 py-2 rounded-md font-semibold"
              style={{ backgroundColor: THEME_GREEN }}
            >
              Get personalised plan
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* -------------------- FAQs -------------------- */
function FAQs({ reduce }) {
  const faqs = [
    {
      q: "How much deposit is typical in Germany?",
      a: "Deposits commonly range from 1–3 months' rent. Many student halls require 1–2 months. Always ask about deposit refund terms.",
    },
    {
      q: "Can I sign a contract before arriving?",
      a: "Yes — many landlords allow remote signing with digital copies and bank transfers for deposit. We verify listings before you sign.",
    },
    {
      q: "Are utilities & internet included?",
      a: "Depends — some halls include utilities and internet, while private flats often list 'Kaltmiete' (rent without utilities). Check 'Nebenkosten' for extras.",
    },
    {
      q: "Do you help with Anmeldung (resident registration)?",
      a: "We provide checklists and guidance for Anmeldung registration, and can arrange local support in select cities for in-person help.",
    },
  ];

  return (
    <section className="mt-12" aria-labelledby="faq-acc-heading">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
          <FaFileAlt className="w-5 h-5 text-green-600" />
        </div>
        <h2
          id="faq-acc-heading"
          className="text-xl md:text-2xl font-extrabold text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Frequently asked questions — Accommodation
        </h2>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((f, i) => (
          <details
            key={i}
            className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm"
          >
            <summary
              className="cursor-pointer font-semibold text-slate-900"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {f.q}
            </summary>
            <div
              className="mt-2 text-sm text-slate-600"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {f.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* -------------------- FINAL CTA -------------------- */
function FinalCTA() {
  return (
    <section className="mt-12 mb-8">
      <BookAppointment />
    </section>
  );
}
/* helper missing icon fallback (FaMoney doesn't exist in react-icons/fa default export) */
function FaMoney(props) {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="none" {...props}>
      <path
        d="M12 1v22"
        stroke="#0f766e"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 5H7a3 3 0 00-3 3v8a3 3 0 003 3h10a3 3 0 003-3V8a3 3 0 00-3-3z"
        stroke="#0f766e"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 9h4M10 15h4"
        stroke="#0f766e"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
