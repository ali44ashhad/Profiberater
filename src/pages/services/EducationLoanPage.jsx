import React, { useMemo } from "react";
import {
  FaGraduationCap,
  FaUniversity,
  FaPercent,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaHandshake,
  FaPlane, // 👈 add this
} from "react-icons/fa";

import { motion, useReducedMotion } from "framer-motion";
import BookAppointment from "../../components/common/BookAppointment";

/**
 * EducationLoanPage.jsx
 * - Theme: green (#0f766e) + sky accents
 * - Sections: Hero, Why choose loan, Loan types (3x2 grid on desktop), Steps to apply, EMI / example calculator, FAQs, CTA
 * - Icons use react-icons/fa colored green to match theme
 * - Animations respect prefers-reduced-motion
 */

const THEME_GREEN = "#0f766e";

export default function EducationLoanPage() {
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
        <WhyChoose reduce={reduce} />
        <LoanTypesGrid reduce={reduce} />
        <ApplySteps reduce={reduce} />
        <EMIExample reduce={reduce} />
        <FAQs reduce={reduce} />
        <FinalCTA />
      </div>
    </main>
  );
}

/* ---------------- HERO ---------------- */
function Hero({ reduce }) {
  return (
    <header className="rounded-2xl p-6 md:p-10 lg:p-14 bg-white shadow-sm border border-gray-100 mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7">
          <p
            className="text-sm font-semibold tracking-widest"
            style={{ color: "#0ea5a4", fontFamily: "Poppins, sans-serif" }}
          >
            EDUCATION LOANS
          </p>

          <h1
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Student loans tailored for studying in Europe & Germany
          </h1>

          <p
            className="mt-4 text-sm md:text-base text-slate-700 max-w-2xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Competitive interest rates, flexible repayment options, and
            partnerships with banks & non-bank lenders — we guide you from
            eligibility to disbursal.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#loan-types"
              className="inline-flex items-center gap-2 bg-[var(--green,#0f766e)] text-white px-5 py-3 rounded-md font-semibold shadow"
              style={{ backgroundColor: THEME_GREEN }}
            >
              See loan types
            </a>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 border border-[#cfeee8] text-[var(--green,#0f766e)] px-4 py-3 rounded-md font-medium bg-white"
              style={{ color: THEME_GREEN }}
            >
              How to apply
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center">
                <FaUniversity className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">
                  Bank partnerships
                </div>
                <div className="text-slate-600">Multiple lenders evaluated</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center">
                <FaPercent className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">
                  Competitive rates
                </div>
                <div className="text-slate-600">Transparent fee structure</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center">
                <FaHandshake className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">
                  Guided process
                </div>
                <div className="text-slate-600">
                  Document & application support
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
                <FaMoneyBillWave className="w-6 h-6 text-green-600" />
              </div>

              <div>
                <div className="text-sm text-slate-700">
                  Quick eligibility check
                </div>
                <div className="font-semibold text-slate-900">
                  Estimate your loan in 2 minutes
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white rounded-lg p-3 border border-gray-100">
                <div className="text-xs text-slate-500">Tenure</div>
                <div className="font-semibold text-slate-900">5–10 yrs</div>
              </div>

              <div className="bg-white rounded-lg p-3 border border-gray-100">
                <div className="text-xs text-slate-500">Processing time</div>
                <div className="font-semibold text-slate-900">7–21 days</div>
              </div>

              <div className="bg-white rounded-lg p-3 border border-gray-100 col-span-2">
                <div className="text-xs text-slate-500">Eligibility</div>
                <div className="font-semibold text-slate-900">
                  Admission letter + co-borrower / collateral options
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-3">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 bg-[var(--green,#0f766e)] text-white px-4 py-2 rounded-md font-semibold"
                style={{ backgroundColor: THEME_GREEN }}
              >
                Start eligibility check
              </a>
              <a
                href="#faq"
                className="inline-flex items-center gap-2 border border-gray-200 px-3 py-2 rounded-md bg-white text-[var(--green,#0f766e)]"
                style={{ color: THEME_GREEN }}
              >
                FAQs
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

/* ---------------- WHY CHOOSE ---------------- */
function WhyChoose({ reduce }) {
  const points = [
    {
      title: "Tailored loan options",
      desc: "We match lenders by program, country and your repayment ability — from unsecured student loans to collateral-backed options.",
      icon: <FaGraduationCap className="w-5 h-5 text-green-600" />,
    },
    {
      title: "Lower interest negotiation",
      desc: "We negotiate with partner banks for preferential student rates & flexible EMI start dates.",
      icon: <FaPercent className="w-5 h-5 text-green-600" />,
    },
    {
      title: "Documentation support",
      desc: "Complete assistance with loan documents, admission letters, bank forms and co-borrower paperwork.",
      icon: <FaClipboardIconFallback />,
    },
    {
      title: "Co-borrower & collateral options",
      desc: "Guidance on using parents, guardians or property as security to access higher loan amounts.",
      icon: <FaHandshake className="w-5 h-5 text-green-600" />,
    },
    {
      title: "Disbursal & foreign remittance",
      desc: "We ensure timely disbursal and can assist with outward remittance to foreign university accounts.",
      icon: <FaPlaneIconFallback />,
    },
    {
      title: "Post-disbursal support",
      desc: "Claim help, EMI scheduling and help with grace periods if needed.",
      icon: <FaCalendarCheck className="w-5 h-5 text-green-600" />,
    },
  ];

  return (
    <section className="mt-10" aria-labelledby="why-choose-heading">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
          <FaGraduationCap className="w-5 h-5 text-green-600" />
        </div>
        <h2
          id="why-choose-heading"
          className="text-xl md:text-2xl font-extrabold text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Why choose our education loan support
        </h2>
      </div>

      <p className="mt-3 text-sm text-slate-600 max-w-2xl">
        We act as your single point of contact for lenders, documentation, and
        disbursal so you can focus on admission & visas.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {points.map((p, i) => (
          <motion.article
            key={p.title}
            initial={reduce ? {} : { opacity: 0, y: 8 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-full"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                {p.icon}
              </div>

              <div>
                <h3
                  className="font-semibold text-slate-900"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* small icon fallbacks implemented below to avoid extra imports */
function FaClipboardIconFallback() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="text-green-600">
      <path
        fill="currentColor"
        d="M7 2h9a1 1 0 011 1v1h-2V4H8v1H6V3a1 1 0 011-1zM6 7h12v14a1 1 0 01-1 1H7a1 1 0 01-1-1V7z"
      />
    </svg>
  );
}
function FaPlaneIconFallback() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="text-green-600">
      <path
        fill="currentColor"
        d="M21 16v-2l-8-3V6l3-1-1-2-4 2v5l-8 3v2l8-1v4l-2 1v2l3-1 3 1v-2l-2-1v-4l8 1z"
      />
    </svg>
  );
}

/* -------------- LOAN TYPES GRID (3x2 desktop) -------------- */
function LoanTypesGrid({ reduce }) {
  const loans = [
    {
      key: "unsecured",
      title: "Unsecured Student Loan",
      desc: "No collateral; relies on co-borrower income & admission proof. Good for smaller amounts & quick processing.",
      icon: <FaUniversity className="w-6 h-6 text-green-600" />,
    },
    {
      key: "secured",
      title: "Secured / Collateral Loan",
      desc: "Property or fixed deposit as security — access higher loan amounts at lower rates.",
      icon: <FaMoneyBillWave className="w-6 h-6 text-green-600" />,
    },
    {
      key: "international",
      title: "International / Foreign Disbursal",
      desc: "Designed for universities abroad — disbursal directly to institution accounts and guided forex paperwork.",
      icon: <FaPlane className="w-6 h-6 text-green-600" />,
    },
    {
      key: "income-sharing",
      title: "Income Sharing Agreement (ISA)",
      desc: "Repay a percentage of future income for a fixed duration — growing in popularity for some programs.",
      icon: <FaHandshake className="w-6 h-6 text-green-600" />,
    },
    {
      key: "topup",
      title: "Top-up & Bridge Loans",
      desc: "Short-term top-ups to cover tuition gaps, living expenses or urgent fees after initial disbursement.",
      icon: <FaPercent className="w-6 h-6 text-green-600" />,
    },
    {
      key: "salaried",
      title: "Salaried Professional Loan",
      desc: "For students who are also employed or for professional courses — easier approvals with steady salary proof.",
      icon: <FaCalendarCheck className="w-6 h-6 text-green-600" />,
    },
  ];

  return (
    <section
      id="loan-types"
      className="mt-10"
      aria-labelledby="loan-types-heading"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
          <FaUniversity className="w-5 h-5 text-green-600" />
        </div>
        <h2
          id="loan-types-heading"
          className="text-xl md:text-2xl font-extrabold text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Loan types
        </h2>
      </div>

      <p className="mt-3 text-sm text-slate-600 max-w-2xl">
        Choose the structure that fits your program, family capacity and
        repayment preference.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loans.map((l, i) => (
          <motion.article
            key={l.key}
            initial={reduce ? {} : { opacity: 0, y: 8 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                {l.icon}
              </div>
              <div>
                <h3
                  className="font-semibold text-slate-900"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {l.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{l.desc}</p>
                <div className="mt-4">
                  <a
                    href="/contact"
                    className="text-sm font-semibold text-[var(--green,#0f766e)]"
                  >
                    Discuss options
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

/* ---------------- APPLY STEPS ---------------- */
function ApplySteps({ reduce }) {
  const steps = [
    {
      n: 1,
      title: "Eligibility & docs",
      desc: "Admission letter, passport, academic records, co-borrower KYC.",
    },
    {
      n: 2,
      title: "Lender selection",
      desc: "We shortlist lenders based on amount, rate & disbursal method.",
    },
    {
      n: 3,
      title: "Application submission",
      desc: "We prepare forms, help co-borrower sign and submit to bank.",
    },
    {
      n: 4,
      title: "Disbursal & monitoring",
      desc: "Funds transfer to university / account and ongoing support.",
    },
  ];

  return (
    <section id="apply" className="mt-12" aria-labelledby="apply-heading">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
          <FaCalendarCheck className="w-5 h-5 text-green-600" />
        </div>
        <h2
          id="apply-heading"
          className="text-xl md:text-2xl font-extrabold text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          How to apply (simple)
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
              <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

/* ---------------- EMI EXAMPLE (static illustrative calculator) ---------------- */
function EMIExample({ reduce }) {
  // static example values — replace with interactive calculator if you want
  const example = useMemo(() => {
    return {
      loanAmount: 15000, // in EUR
      tenureYears: 8,
      annualRate: 8.5, // %
    };
  }, []);

  // simple EMI formula monthly
  const monthlyRate = example.annualRate / 12 / 100;
  const months = example.tenureYears * 12;
  const emi = Math.round(
    (example.loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
  );

  return (
    <section className="mt-12" aria-labelledby="emi-heading">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
          <FaPercent className="w-5 h-5 text-green-600" />
        </div>
        <h2
          id="emi-heading"
          className="text-xl md:text-2xl font-extrabold text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          EMI example
        </h2>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="text-sm text-slate-500">Loan amount</div>
          <div className="font-extrabold text-2xl text-slate-900">
            €{example.loanAmount}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="text-sm text-slate-500">Tenure</div>
          <div className="font-extrabold text-2xl text-slate-900">
            {example.tenureYears} yrs
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="text-sm text-slate-500">Estimated EMI (monthly)</div>
          <div className="font-extrabold text-2xl text-slate-900">€{emi}</div>
          <div className="mt-2 text-xs text-slate-600">
            @ {example.annualRate}% p.a.
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-600">
        This is an illustrative calculation — exact EMI depends on lender terms,
        rate type and disbursal schedule. Contact us for a personalised quote.
      </p>
    </section>
  );
}

/* ---------------- FAQs ---------------- */
function FAQs({ reduce }) {
  const faqs = [
    {
      q: "What documents are required for loan approval?",
      a: "Admission letter, passport, academic records, co-borrower KYC, income proof (for salaried co-borrower) and property documents if collateral is used.",
    },
    {
      q: "Can I get a loan without a co-borrower?",
      a: "Some lenders offer unsecured loans for top institutions or with higher interest; co-borrower improves your chances & reduces rate.",
    },
    {
      q: "How long does disbursal take?",
      a: "Typically 7–21 working days after documentation & valuation (if collateral required). International disbursal to university accounts may take additional forex clearances.",
    },
    {
      q: "Can the loan be used to cover living expenses?",
      a: "Yes — loans can cover tuition + living allowances; lenders differ on how much they permit for living costs.",
    },
  ];

  return (
    <section id="faq" className="mt-12" aria-labelledby="faq-heading">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
          <FaGraduationCap className="w-5 h-5 text-green-600" />
        </div>
        <h2
          id="faq-heading"
          className="text-xl md:text-2xl font-extrabold text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Frequently asked questions — Education Loans
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

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="mt-12 mb-8">
      <BookAppointment />
    </section>
  );
}
