import React, { useMemo } from "react";
import {
  FaUserShield,
  FaHospitalAlt,
  FaPlane,
  FaStethoscope,
  FaMoneyBillWave,
  FaClipboardCheck,
} from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";
import BookAppointment from "../../components/common/BookAppointment";

/**
 * MedicalInsurancePage.jsx
 * Theme: green (#0f766e) + sky accents; Poppins headings, Inter body
 *
 * Sections:
 * - Hero (left aligned)
 * - Coverage Types (3x2 grid desktop)
 * - How it works (4 steps)
 * - Plan comparison (simple responsive table/cards)
 * - FAQs
 * - CTA
 *
 * Notes:
 * - Icons are green to match theme
 * - Cards do NOT have bottom dividing lines (per request)
 * - Animations respect prefers-reduced-motion
 */

const THEME_GREEN = "#0f766e";

export default function MedicalInsurancePage() {
  const reduce = useReducedMotion();

  return (
    <main
      className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-emerald-50 py-12"
      style={{
        fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto",
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
        <Hero reduce={reduce} />
        <CoverageGrid reduce={reduce} />
        <HowItWorks reduce={reduce} />
        <PlansTable reduce={reduce} />
        <FAQs reduce={reduce} />
        <FinalCTA />
      </div>
    </main>
  );
}

/* -------------------- HERO -------------------- */
function Hero({ reduce }) {
  return (
    <header className="rounded-2xl p-6 md:p-10 lg:p-14 bg-white shadow-sm border border-gray-100 mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7">
          <p
            className="text-sm font-semibold tracking-widest"
            style={{ color: "#0ea5a4", fontFamily: "Poppins, sans-serif" }}
          >
            MEDICAL INSURANCE
          </p>

          <h1
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            International student medical insurance — secure, compliant, simple
          </h1>

          <p
            className="mt-4 text-sm md:text-base text-slate-700 max-w-2xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            We help students choose plans that meet visa requirements and
            provide worry-free healthcare coverage while you study abroad.
            Compare plans, check exclusions, and get contract-review help.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#plans"
              className="inline-flex items-center gap-2 bg-[var(--green,#0f766e)] text-white px-5 py-3 rounded-md font-semibold shadow"
              style={{ backgroundColor: THEME_GREEN }}
            >
              Compare plans
            </a>

            <a
              href="#how"
              className="inline-flex items-center gap-2 border border-[#cfeee8] text-[var(--green,#0f766e)] px-4 py-3 rounded-md font-medium bg-white"
              style={{ color: THEME_GREEN }}
            >
              How it works
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center">
                <FaClipboardCheck className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">
                  Visa-compliant
                </div>
                <div className="text-slate-600">
                  Plans that meet embassy rules
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center">
                <FaHospitalAlt className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">
                  Cashless treatment
                </div>
                <div className="text-slate-600">Wide hospital network</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center">
                <FaMoneyBillWave className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">
                  Cost effective
                </div>
                <div className="text-slate-600">Student-friendly premiums</div>
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
                <FaUserShield className="w-6 h-6 text-green-600" />
              </div>

              <div>
                <div className="text-sm text-slate-700">
                  Recommended for students
                </div>
                <div className="font-semibold text-slate-900">
                  International Student Plan — Basic
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white rounded-lg p-3 border border-gray-100">
                <div className="text-xs text-slate-500">Premium / month</div>
                <div className="font-semibold text-slate-900">€29</div>
              </div>

              <div className="bg-white rounded-lg p-3 border border-gray-100">
                <div className="text-xs text-slate-500">Deductible</div>
                <div className="font-semibold text-slate-900">
                  €0 / cashless
                </div>
              </div>

              <div className="bg-white rounded-lg p-3 border border-gray-100">
                <div className="text-xs text-slate-500">Coverage</div>
                <div className="font-semibold text-slate-900">
                  Illness, accidents
                </div>
              </div>

              <div className="bg-white rounded-lg p-3 border border-gray-100">
                <div className="text-xs text-slate-500">Visa letter</div>
                <div className="font-semibold text-slate-900">Included</div>
              </div>
            </div>

            <div className="mt-4 flex gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--green,#0f766e)] text-white px-4 py-2 rounded-md font-semibold"
                style={{ backgroundColor: THEME_GREEN }}
              >
                Get this plan
              </a>
              <a
                href="/plans"
                className="inline-flex items-center gap-2 border border-gray-200 px-3 py-2 rounded-md bg-white text-[var(--green,#0f766e)]"
                style={{ color: THEME_GREEN }}
              >
                View all plans
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

/* -------------------- COVERAGE TYPES GRID -------------------- */
function CoverageGrid({ reduce }) {
  const cards = [
    {
      key: "basic",
      title: "Basic Student Plan",
      desc: "Covers essential medical treatment, accidents and emergency hospital visits. Visa letter provided.",
      icon: <FaStethoscope className="w-6 h-6 text-green-600" />,
    },
    {
      key: "comprehensive",
      title: "Comprehensive Plan",
      desc: "Broader coverage including specialist visits, diagnostics and limited dental treatment.",
      icon: <FaHospitalAlt className="w-6 h-6 text-green-600" />,
    },
    {
      key: "family",
      title: "Family Plan",
      desc: "Extends coverage for spouse/dependents — suitable for students with family or staff relocating.",
      icon: <FaUserShield className="w-6 h-6 text-green-600" />,
    },
    {
      key: "travel",
      title: "Short-term / Travel Cover",
      desc: "Temporary cover for arrival period or exchange programs — medical emergency and repatriation included.",
      icon: <FaPlane className="w-6 h-6 text-green-600" />,
    },
    {
      key: "dental",
      title: "Dental Add-on",
      desc: "Optional add-on for dental emergencies and limited routine care — useful for longer stays.",
      icon: <FaClipboardCheck className="w-6 h-6 text-green-600" />,
    },
    {
      key: "topup",
      title: "Top-up Coverage",
      desc: "Supplemental cover to increase limits on hospitalization or outpatient benefits.",
      icon: <FaMoneyBillWave className="w-6 h-6 text-green-600" />,
    },
  ];

  return (
    <section id="coverage" className="mt-10" aria-labelledby="coverage-heading">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
          <FaStethoscope className="w-5 h-5 text-green-600" />
        </div>
        <h2
          id="coverage-heading"
          className="text-xl md:text-2xl font-extrabold text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Coverage types
        </h2>
      </div>

      <p className="mt-3 text-sm text-slate-600 max-w-2xl">
        Select a coverage type based on duration, family size and medical
        history. We assist with documentation and claims support.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <motion.article
            key={c.key}
            initial={reduce ? {} : { opacity: 0, y: 8 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full"
            aria-labelledby={`cov-${c.key}-title`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                {c.icon}
              </div>

              <div className="flex-1">
                <h3
                  id={`cov-${c.key}-title`}
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

                <div className="mt-4 flex gap-3">
                  <a
                    href="/contact"
                    className="text-sm font-semibold text-[var(--green,#0f766e)] inline-flex items-center gap-2"
                  >
                    Get assistance
                  </a>
                  <a href="/plans" className="text-sm text-slate-600">
                    Compare plans
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

/* -------------------- HOW IT WORKS -------------------- */
function HowItWorks({ reduce }) {
  const steps = [
    {
      n: 1,
      title: "Assess needs",
      desc: "We check visa rules, duration and any pre-existing conditions to recommend suitable plans.",
    },
    {
      n: 2,
      title: "Choose & quote",
      desc: "We present 2–3 plans, premium, exclusions and payment options for your consideration.",
    },
    {
      n: 3,
      title: "Buy & get docs",
      desc: "Complete a secure payment and receive policy documents & visa letter within 24 hours.",
    },
    {
      n: 4,
      title: "Claims & support",
      desc: "Local claims support and 24/7 emergency assistance while you study.",
    },
  ];

  return (
    <section
      id="howitworks"
      className="mt-12"
      aria-labelledby="how-works-heading"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
          <FaClipboardCheck className="w-5 h-5 text-green-600" />
        </div>
        <h2
          id="how-works-heading"
          className="text-xl md:text-2xl font-extrabold text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          How it works
        </h2>
      </div>

      <ol className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {steps.map((s, idx) => (
          <motion.li
            key={s.n}
            initial={reduce ? {} : { opacity: 0, x: -8 }}
            animate={reduce ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: idx * 0.04 }}
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

/* -------------------- PLANS TABLE / CARDS -------------------- */
function PlansTable({ reduce }) {
  // simple mock plans
  const plans = useMemo(
    () => [
      {
        id: "basic",
        title: "Basic Student",
        priceMonthly: 29,
        coverLimit: "€50k / year",
        visaLetter: true,
        cashless: true,
      },
      {
        id: "plus",
        title: "Plus (recommended)",
        priceMonthly: 49,
        coverLimit: "€150k / year",
        visaLetter: true,
        cashless: true,
        dental: true,
      },
      {
        id: "comprehensive",
        title: "Comprehensive",
        priceMonthly: 79,
        coverLimit: "€500k / year",
        visaLetter: true,
        cashless: true,
        dental: true,
        family: true,
      },
    ],
    []
  );

  return (
    <section id="plans" className="mt-12" aria-labelledby="plans-heading">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
          <FaUserShield className="w-5 h-5 text-green-600" />
        </div>
        <h2
          id="plans-heading"
          className="text-xl md:text-2xl font-extrabold text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Plans & Pricing
        </h2>
      </div>

      <p className="mt-3 text-sm text-slate-600 max-w-2xl">
        Transparent premiums, clear exclusions. Contact us for student-group
        discounts and longer-term pricing.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((p, i) => (
          <motion.div
            key={p.id}
            initial={reduce ? {} : { opacity: 0, y: 8 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
            className={`bg-white rounded-2xl p-6 shadow-sm border ${
              p.id === "plus"
                ? "border-[var(--green,#0f766e)] shadow-md"
                : "border-gray-100"
            }`}
            aria-labelledby={`plan-${p.id}-title`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3
                  id={`plan-${p.id}-title`}
                  className="text-lg font-bold text-slate-900"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {p.title}
                </h3>
                <div className="text-sm text-slate-600">Monthly</div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-extrabold text-slate-900">
                  €{p.priceMonthly}
                </div>
                <div className="text-xs text-slate-500">per month</div>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                Coverage:{" "}
                <span className="text-slate-900 font-medium">
                  {p.coverLimit}
                </span>
              </li>
              <li>
                {p.cashless ? "Cashless treatment" : "Reimbursement model"}
              </li>
              {p.dental && <li>Dental: limited cover</li>}
              {p.family && <li>Family add-on available</li>}
              <li>Visa letter included</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href="/contact"
                className={`inline-flex items-center gap-2 ${
                  p.id === "plus"
                    ? "bg-[var(--green,#0f766e)] text-white"
                    : "bg-white text-[var(--green,#0f766e)] border border-gray-200"
                } px-4 py-2 rounded-md font-semibold`}
                style={{
                  backgroundColor: p.id === "plus" ? THEME_GREEN : undefined,
                  color: p.id === "plus" ? "white" : THEME_GREEN,
                }}
              >
                Choose plan
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-slate-700 px-3 py-2 rounded-md border border-gray-100"
              >
                Talk to advisor
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- FAQs -------------------- */
function FAQs({ reduce }) {
  const faqs = [
    {
      q: "Does this meet German visa requirements?",
      a: "Yes — our recommended student plans include the visa letter and minimum coverage required for student visas in most German states. We confirm specifics depending on your university and city.",
    },
    {
      q: "How quickly do I get the policy documents?",
      a: "After purchase and payment, documents & visa letters are normally issued within 24 hours (often same-day).",
    },
    {
      q: "Are pre-existing conditions covered?",
      a: "Coverage for pre-existing conditions varies. We’ll check policy wording and advise which plan fits your medical history.",
    },
    {
      q: "How do I make a claim?",
      a: "For cashless hospitals: present policy ID and call the insurer's claims number. We assist with claims escalation where needed.",
    },
  ];

  return (
    <section className="mt-12" aria-labelledby="faq-med-heading">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
          <FaHospitalAlt className="w-5 h-5 text-green-600" />
        </div>
        <h2
          id="faq-med-heading"
          className="text-xl md:text-2xl font-extrabold text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Frequently asked questions — Medical Insurance
        </h2>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((f, idx) => (
          <details
            key={idx}
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
