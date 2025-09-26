import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaGlobe,
  FaMoneyCheckAlt,
  FaHome,
  FaShieldAlt,
  FaUniversity,
  FaHandsHelping,
  FaClock,
  FaQuestionCircle,
  FaPercent, // 👉 yeh add karo
} from "react-icons/fa";

/**
 * ServicesPage.jsx
 * In-depth services page for:
 *  - Forex Card & Remittances
 *  - Accommodation
 *  - Medical Insurance
 *  - Education Loan
 *
 * Theme: green + sky accents; Poppins for headings (hint), Inter for body.
 */

const THEME_GREEN = "#0f766e";

export default function ServicesPage() {
  const reduce = useReducedMotion();
  return (
    <main
      className="bg-gradient-to-br from-white via-sky-50 to-emerald-50 min-h-screen"
      style={{
        fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto",
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <Hero reduce={reduce} />

        <section aria-labelledby="services-detailed" className="mt-12">
          <h2
            id="services-detailed"
            className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our Services — detailed
          </h2>

          <p className="text-sm text-slate-600 max-w-3xl">
            We provide end-to-end support for students relocating or studying in
            Europe/Germany. Below you’ll find in-depth descriptions of each
            service, what we handle, required documents, timelines and how we
            help you at every step.
          </p>

          <div className="mt-8 space-y-8">
            <ServiceForex reduce={reduce} />
            <ServiceAccommodation reduce={reduce} />
            <ServiceInsurance reduce={reduce} />
            <ServiceEducationLoan reduce={reduce} />
          </div>
        </section>

        <HowWeWork reduce={reduce} />

        <FAQsAndCTA reduce={reduce} />
      </div>
    </main>
  );
}

/* ---------------- HERO ---------------- */
function Hero({ reduce }) {
  return (
    <header className="rounded-2xl bg-white shadow-sm border border-gray-100 p-6 md:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-8">
          <p
            className="text-sm font-semibold tracking-widest text-emerald-600"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            OUR SERVICES
          </p>

          <h1
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Practical support for every step — money, stay, health and funding
          </h1>

          <p className="mt-4 text-sm md:text-base text-slate-700 max-w-2xl">
            We combine domain expertise and trusted partners to provide Forex &
            remittance solutions, student accommodation, medical insurance and
            education loan support — all tailored for students heading to
            Europe.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#services-detailed"
              className="inline-flex items-center gap-2 bg-[var(--green,#0f766e)] text-white px-5 py-3 rounded-md font-semibold shadow"
              style={{ backgroundColor: THEME_GREEN }}
            >
              Explore services
            </a>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 border border-gray-200 px-4 py-3 rounded-md bg-white text-[var(--green,#0f766e)]"
              style={{ color: THEME_GREEN }}
            >
              Get personalised help
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 hidden lg:flex items-center justify-center">
          <div className="w-full max-w-[300px] p-4 bg-emerald-50 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center border border-gray-100">
                <FaGlobe className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-sm text-slate-700">Trusted partners</div>
                <div className="font-semibold text-slate-900">
                  Banks, insurers, landlords
                </div>
              </div>
            </div>

            <ul className="mt-4 text-sm text-slate-600 space-y-2">
              <li className="flex items-start gap-2">
                <FaClock className="mt-1 text-green-600" />{" "}
                <span>Fast turnarounds on common tasks</span>
              </li>
              <li className="flex items-start gap-2">
                <FaHandsHelping className="mt-1 text-green-600" />{" "}
                <span>End-to-end guidance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------------- SERVICE: FOREX CARD & REMITTANCES ---------------- */
function ServiceForex({ reduce }) {
  return (
    <motion.section
      initial={reduce ? {} : { opacity: 0, y: 8 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      aria-labelledby="s-forex"
      className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm"
    >
      <div className="md:flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-lg bg-emerald-50 flex items-center justify-center">
            <FaMoneyCheckAlt className="w-6 h-6 text-green-600" />
          </div>
        </div>

        <div className="flex-1">
          <h3
            id="s-forex"
            className="text-lg md:text-xl font-bold text-slate-900"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Forex Card & Remittances
          </h3>

          <p className="mt-3 text-sm text-slate-600">
            Secure international payments and convenient forex cards for
            students — low conversion margins, easy top-ups, emergency cash
            support and guided outward remittance to universities.
          </p>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoBox
              title="What we do"
              icon={<FaGlobe className="w-4 h-4 text-green-600" />}
            >
              Partner with banks & forex providers, help you pick the best forex
              card (multi-currency), perform outward remittances and advise on
              tax / compliance.
            </InfoBox>

            <InfoBox
              title="Benefits"
              icon={<FaPercent className="w-4 h-4 text-green-600" />}
            >
              Competitive exchange rates, contactless forex cards, emergency
              top-ups and fast transfers to European accounts.
            </InfoBox>

            <InfoBox
              title="Docs & eligibility"
              icon={<FaHandsHelping className="w-4 h-4 text-green-600" />}
            >
              Passport, admission/fee invoice for university remittances, KYC
              documents for card issuance and occasional bank forms.
            </InfoBox>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--green,#0f766e)] text-white px-4 py-2 rounded-md font-semibold"
              style={{ backgroundColor: THEME_GREEN }}
            >
              Start Forex process
            </a>
            <a
              href="/services/forex-remittance"
              className="inline-flex items-center gap-2 border border-gray-200 px-3 py-2 rounded-md bg-white text-[var(--green,#0f766e)]"
              style={{ color: THEME_GREEN }}
            >
              Remittance details
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ---------------- SERVICE: ACCOMMODATION ---------------- */
function ServiceAccommodation({ reduce }) {
  return (
    <motion.section
      initial={reduce ? {} : { opacity: 0, y: 8 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.04 }}
      aria-labelledby="s-accommodation"
      className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm"
    >
      <div className="md:flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-lg bg-emerald-50 flex items-center justify-center">
            <FaHome className="w-6 h-6 text-green-600" />
          </div>
        </div>

        <div className="flex-1">
          <h3
            id="s-accommodation"
            className="text-lg md:text-xl font-bold text-slate-900"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Accommodation (Student housing & rentals)
          </h3>

          <p className="mt-3 text-sm text-slate-600">
            Finding safe, affordable housing near campus is critical. We connect
            you with verified landlords, university dorms, flat-shares and
            provide application support and pre-arrival inspection tips.
          </p>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoBox
              title="Offerings"
              icon={<FaHome className="w-4 h-4 text-green-600" />}
            >
              University dorm help, private rentals, room/flatmate matching,
              lease review and move-in checklists.
            </InfoBox>

            <InfoBox
              title="Safeguards"
              icon={<FaShieldAlt className="w-4 h-4 text-green-600" />}
            >
              Verified listings, landlord checks, contract translation and
              deposit guidance to prevent fraud.
            </InfoBox>

            <InfoBox
              title="Timing & fees"
              icon={<FaClock className="w-4 h-4 text-green-600" />}
            >
              Start searching 1–3 months before arrival. We help with short-term
              stays until permanent housing is secured.
            </InfoBox>
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href="/services/accommodation"
              className="inline-flex items-center gap-2 bg-[var(--green,#0f766e)] text-white px-4 py-2 rounded-md font-semibold"
              style={{ backgroundColor: THEME_GREEN }}
            >
              Find housing
            </a>
            <a
              href="/services/accommodation"
              className="inline-flex items-center gap-2 border border-gray-200 px-3 py-2 rounded-md bg-white text-[var(--green,#0f766e)]"
              style={{ color: THEME_GREEN }}
            >
              Accommodation
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ---------------- SERVICE: MEDICAL INSURANCE ---------------- */
function ServiceInsurance({ reduce }) {
  return (
    <motion.section
      initial={reduce ? {} : { opacity: 0, y: 8 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.08 }}
      aria-labelledby="s-insurance"
      className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm"
    >
      <div className="md:flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-lg bg-emerald-50 flex items-center justify-center">
            <FaShieldAlt className="w-6 h-6 text-green-600" />
          </div>
        </div>

        <div className="flex-1">
          <h3
            id="s-insurance"
            className="text-lg md:text-xl font-bold text-slate-900"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Medical Insurance (Student Health cover)
          </h3>

          <p className="mt-3 text-sm text-slate-600">
            Mandatory health cover for many European destinations — we compare
            plans (public/private), advise on visa-compliant policies, and help
            with claims assistance.
          </p>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoBox
              title="What we compare"
              icon={<FaShieldAlt className="w-4 h-4 text-green-600" />}
            >
              Local statutory schemes vs private student insurance, deductible
              options, inpatient/outpatient coverage & repatriation cover.
            </InfoBox>

            <InfoBox
              title="Visa compliance"
              icon={<FaUniversity className="w-4 h-4 text-green-600" />}
            >
              We ensure the policy meets consulate and university requirements
              (coverage min, duration & accepted insurers).
            </InfoBox>

            <InfoBox
              title="Claims support"
              icon={<FaHandsHelping className="w-4 h-4 text-green-600" />}
            >
              Assistance with local language insurance forms, hospital
              navigation and claims submission.
            </InfoBox>
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href="/services/medical-insurance"
              className="inline-flex items-center gap-2 bg-[var(--green,#0f766e)] text-white px-4 py-2 rounded-md font-semibold"
              style={{ backgroundColor: THEME_GREEN }}
            >
              Compare plans
            </a>
            <a
              href="/services/medical-insurance"
              className="inline-flex items-center gap-2 border border-gray-200 px-3 py-2 rounded-md bg-white text-[var(--green,#0f766e)]"
              style={{ color: THEME_GREEN }}
            >
              Insurance help
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ---------------- SERVICE: EDUCATION LOAN ---------------- */
function ServiceEducationLoan({ reduce }) {
  return (
    <motion.section
      initial={reduce ? {} : { opacity: 0, y: 8 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.12 }}
      aria-labelledby="s-loan"
      className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm"
    >
      <div className="md:flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-lg bg-emerald-50 flex items-center justify-center">
            <FaUniversity className="w-6 h-6 text-green-600" />
          </div>
        </div>

        <div className="flex-1">
          <h3
            id="s-loan"
            className="text-lg md:text-xl font-bold text-slate-900"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Education Loan support
          </h3>

          <p className="mt-3 text-sm text-slate-600">
            From eligibility checks to lender selection, co-borrower guidance
            and disbursal coordination — we help secure funding so you can focus
            on admissions and travel.
          </p>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoBox
              title="Loan types"
              icon={<FaMoneyCheckAlt className="w-4 h-4 text-green-600" />}
            >
              Unsecured, secured/collateral, top-up loans, international
              disbursal and ISAs (where available).
            </InfoBox>

            <InfoBox
              title="What we do"
              icon={<FaHandsHelping className="w-4 h-4 text-green-600" />}
            >
              Lender shortlist, paperwork support, rate negotiation and
              disbursal tracking.
            </InfoBox>

            <InfoBox
              title="Illustrative EMI"
              icon={<FaPercent className="w-4 h-4 text-green-600" />}
            >
              Static EMI examples available — request a personalised calculation
              for exact numbers.
            </InfoBox>
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href="/services/education-loan"
              className="inline-flex items-center gap-2 bg-[var(--green,#0f766e)] text-white px-4 py-2 rounded-md font-semibold"
              style={{ backgroundColor: THEME_GREEN }}
            >
              Get loan assistance
            </a>
            <a
              href="/services/education-loan"
              className="inline-flex items-center gap-2 border border-gray-200 px-3 py-2 rounded-md bg-white text-[var(--green,#0f766e)]"
              style={{ color: THEME_GREEN }}
            >
              Check eligibility
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* small info box used repeatedly */
function InfoBox({ title, children, icon }) {
  return (
    <div className="bg-emerald-50/60 rounded-lg p-3 border border-gray-100 h-full">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center border border-gray-100">
          {icon}
        </div>
        <div>
          <div className="font-semibold text-slate-900">{title}</div>
          <div className="mt-1 text-sm text-slate-700">{children}</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- HOW WE WORK ---------------- */
function HowWeWork({ reduce }) {
  const steps = [
    {
      n: 1,
      title: "Initial consult",
      text: "Free 20–30 minute call to understand your need and match services.",
    },
    {
      n: 2,
      title: "Partner & plan",
      text: "We propose lenders, insurance plans or housing options tailored to your profile.",
    },
    {
      n: 3,
      title: "Document & submit",
      text: "Assisted paperwork, translations, landlord checks and lender submissions.",
    },
    {
      n: 4,
      title: "Disbursal & support",
      text: "Funds, accommodation keys or insurance policy confirmed — ongoing help after arrival.",
    },
  ];

  return (
    <section id="how" className="mt-12" aria-labelledby="how-heading">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
          <FaHandsHelping className="w-5 h-5 text-green-600" />
        </div>
        <h2
          id="how-heading"
          className="text-xl md:text-2xl font-extrabold text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          How we work — step by step
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <motion.article
            key={s.n}
            initial={reduce ? {} : { opacity: 0, y: 6 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[var(--green,#0f766e)]/10 text-[var(--green,#0f766e)] font-bold">
                {s.n}
              </div>
              <div>
                <div className="font-semibold text-slate-900">{s.title}</div>
                <p className="text-sm text-slate-600 mt-1">{s.text}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- FAQ + CTA ---------------- */
function FAQsAndCTA({ reduce }) {
  const faqs = [
    {
      q: "Do you charge for consultation?",
      a: "Initial short consultations are typically free; follow-up or in-depth advisory may be part of paid packages — we'll always be transparent.",
    },
    {
      q: "Can you liaise directly with banks / landlords?",
      a: "Yes — with your consent we liaise directly for faster processing and to avoid miscommunication.",
    },
    {
      q: "Are your partners verified?",
      a: "We work only with verified banks, insurers and landlords who meet our due-diligence standards.",
    },
  ];

  return (
    <section id="faq" className="mt-12 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3
            className="text-xl font-extrabold text-slate-900"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Frequently asked questions
          </h3>

          <div className="mt-4 space-y-3">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm"
              >
                <summary className="font-semibold text-slate-900 flex items-center gap-2">
                  <FaQuestionCircle className="text-green-600" /> {f.q}
                </summary>
                <div className="mt-2 text-sm text-slate-700">{f.a}</div>
              </details>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full flex flex-col justify-between">
            <div>
              <h4
                className="text-lg font-semibold text-slate-900"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Ready to get started?
              </h4>
              <p className="mt-2 text-sm text-slate-700">
                Book a free discovery call so we can propose a tailored plan for
                your needs — forex, stay, insurance or funding.
              </p>

              <ul className="mt-4 text-sm text-slate-600 space-y-2">
                <li className="flex items-start gap-2">
                  <FaHandsHelping className="text-green-600 mt-1" /> End-to-end
                  support
                </li>
                <li className="flex items-start gap-2">
                  <FaClock className="text-green-600 mt-1" /> Fast turnarounds
                </li>
                <li className="flex items-start gap-2">
                  <FaShieldAlt className="text-green-600 mt-1" /> Verified
                  partners
                </li>
              </ul>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="/book"
                className="inline-flex items-center gap-2 bg-[var(--green,#0f766e)] text-white px-4 py-2 rounded-md font-semibold"
                style={{ backgroundColor: THEME_GREEN }}
              >
                Book a call
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-gray-200 px-3 py-2 rounded-md bg-white text-[var(--green,#0f766e)]"
                style={{ color: THEME_GREEN }}
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
