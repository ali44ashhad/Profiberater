import React, { useState } from "react";
import {
  FaCreditCard,
  FaExchangeAlt,
  FaGlobe,
  FaMoneyBillWave,
  FaRegClock,
  FaFileDownload,
  FaCheckCircle,
  FaPhoneAlt,
  FaShieldAlt,
  FaQuestionCircle, // 👈 yeh add karo
} from "react-icons/fa";
import BookAppointment from "../../components/common/BookAppointment";

/**
 * ForexRemittancesPage.jsx
 * Detailed, theme-matching page for Forex Card & Remittances.
 *
 * - Theme: green (#0f766e) + sky accents
 * - Fonts: Poppins (headings) & Inter (body) — inline fontFamily hints provided
 * - Accessibility: semantic headings, aria attributes, reduced motion friendly
 *
 * Sections (detailed):
 *  1. Hero (left-aligned text + pricing card)
 *  2. Deep Benefits (6 cards — each with examples & who it helps)
 *  3. In-depth Process / How it works (6 steps with timeline-style details)
 *  4. Fees, limits & side-by-side comparison (cards + example scenarios)
 *  5. Remittance Options & Speed table (bank, partner, express)
 *  6. Resources / Downloads (fee-sheet, checklist)
 *  7. FAQs (expanded)
 *  8. CTA (clear next step)
 *
 * Note: adjust links (href) to integrate with your router / pages.
 */

const THEME_GREEN = "#0f766e";

export default function ForexRemittancesPageDetailed() {
  return (
    <main
      className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-emerald-50 py-12"
      style={{
        fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto",
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
        <HeroLarge />
        <DeepBenefits />
        <ProcessDetailed />
        <FeesAndComparison />
        <RemittanceOptions />
        <ResourcesDownloads />
        <FAQsDetailed />
        <FinalCTA />
      </div>
    </main>
  );
}

/* ----------------------- HERO ----------------------- */
function HeroLarge() {
  return (
    <header
      className="rounded-2xl p-6 md:p-10 lg:p-14 bg-gradient-to-br from-white via-sky-50 to-emerald-50 shadow-sm"
      aria-labelledby="hero-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <p
            className="text-sm md:text-base font-semibold tracking-widest"
            style={{ color: "#0ea5a4", fontFamily: "Poppins, sans-serif" }}
          >
            FOREX & REMITTANCES
          </p>

          <h1
            id="hero-heading"
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Secure Forex Travel Cards & Low-Cost Remittances — Designed for
            Students & Families
          </h1>

          <p
            className="mt-4 text-sm md:text-base text-slate-700 max-w-2xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            We help students moving to Germany & Europe manage tuition, living
            costs and international transfers with transparent fees, emergency
            support, and multiple payment corridors. Choose the option tailored
            to your amount, speed and cost sensitivity.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--green,#0f766e)] text-white px-5 py-3 rounded-md font-semibold shadow hover:scale-[1.01] transition"
              style={{ backgroundColor: THEME_GREEN }}
            >
              Talk to an expert
            </a>

            <a
              href="#remittance-options"
              className="inline-flex items-center gap-2 border border-[#cfeee8] text-[var(--green,#0f766e)] px-4 py-3 rounded-md font-medium bg-white hover:bg-sky-50 transition"
              style={{ color: THEME_GREEN }}
            >
              Compare options
            </a>
          </div>

          {/* quick highlights */}
          <ul className="mt-6 flex flex-wrap gap-3 text-sm">
            <li className="inline-flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full shadow-sm border">
              <FaCheckCircle className="w-4 h-4 text-green-600" /> Locked FX
              rates available
            </li>
            <li className="inline-flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full shadow-sm border">
              <FaCheckCircle className="w-4 h-4 text-green-600" /> 24/7
              emergency support
            </li>
            <li className="inline-flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full shadow-sm border">
              <FaCheckCircle className="w-4 h-4 text-green-600" />{" "}
              Student-friendly plans & instalments
            </li>
          </ul>
        </div>

        <aside className="lg:col-span-5">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-lg bg-emerald-50 flex items-center justify-center">
                <FaCreditCard className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <div
                  className="text-sm font-semibold text-slate-900"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Prepaid Forex Travel Card
                </div>
                <div
                  className="text-xs text-slate-600 mt-1"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Lock foreign currency, avoid surprise card charges and spend
                  with a secure chip/PIN card in Europe.
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-gray-50 p-3">
                <div className="text-xs text-slate-500">
                  Supported currencies
                </div>
                <div className="font-semibold text-slate-800">
                  EUR · GBP · USD · CAD
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-3">
                <div className="text-xs text-slate-500">Issuance</div>
                <div className="font-semibold text-slate-800">24–48 hours</div>
              </div>

              <div className="rounded-lg bg-gray-50 p-3">
                <div className="text-xs text-slate-500">Reloads</div>
                <div className="font-semibold text-slate-800">
                  Instant (major corridors)
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-3">
                <div className="text-xs text-slate-500">Security</div>
                <div className="font-semibold text-slate-800">
                  EMV chip, 3D Secure, 24/7 block
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--green,#0f766e)] text-white px-4 py-2 rounded-md font-semibold"
                style={{ backgroundColor: THEME_GREEN }}
              >
                Get a quote
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-md bg-white text-[var(--green,#0f766e)]"
                style={{ color: THEME_GREEN }}
              >
                Chat now
              </a>
            </div>
          </div>

          <div className="mt-4 text-xs text-slate-600">
            <strong>Tip:</strong> If you transfer tuition larger than €5,000,
            ask us about staged transfers to optimise FX spread.
          </div>
        </aside>
      </div>
    </header>
  );
}

/* -------------------- DEEP BENEFITS -------------------- */
function DeepBenefits() {
  const cards = [
    {
      title: "Lower FX Cost",
      desc: "Lock rates for major currencies to avoid dynamic bank/merchant markups. Particularly useful for predictable expenses like tuition and rent.",
      who: "Students paying tuition, families sending monthly support",
      icon: <FaExchangeAlt className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Global Acceptance",
      desc: "Accepted at ATMs, POS and online shops in supported countries — no need to juggle multiple cards when studying across Schengen countries.",
      who: "Multi-city students and frequent travellers",
      icon: <FaGlobe className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Secure & Regulated",
      desc: "Issued by regulated financial partners — EMV chip, optional 3D Secure for online payments and instant block on loss/theft.",
      who: "Anyone who wants security & traceability",
      icon: <FaShieldAlt className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Emergency Assistance",
      desc: "24/7 support for lost cards, emergency cash disbursement, and temporary limits for urgent needs while abroad.",
      who: "Students arriving in a new country with limited cash",
      icon: <FaRegClock className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Multi-Currency",
      desc: "Hold multiple currencies on one card to avoid repeated conversions when travelling across Eurozone + UK or studying across countries.",
      who: "Students travelling between EUR/GBP/other corridors",
      icon: <FaCreditCard className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Easy Reload & Management",
      desc: "Top up online, via bank transfer or using our support desk. Transaction history and receipts available for university records.",
      who: "Students who need receipts for tuition or reimbursements",
      icon: <FaMoneyBillWave className="w-6 h-6 text-green-600" />,
    },
  ];

  return (
    <section className="mt-12" aria-labelledby="benefits-heading">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
          <FaExchangeAlt className="w-5 h-5 text-green-600" />
        </div>
        <h2
          id="benefits-heading"
          className="text-xl md:text-2xl font-extrabold text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Benefits in detail
        </h2>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c, idx) => (
          <article
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center">
                {c.icon}
              </div>
              <div>
                <h3
                  className="font-semibold text-slate-900"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {c.title}
                </h3>
                <p
                  className="text-sm text-slate-600 mt-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {c.desc}
                </p>
                <div className="mt-3 text-xs text-slate-500">
                  Who benefits:{" "}
                  <span className="text-slate-700 font-medium">{c.who}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------- PROCESS / HOW IT WORKS (DETAILED) -------------------- */
function ProcessDetailed() {
  const steps = [
    {
      step: 1,
      title: "Initial Consultation",
      detail:
        "We discuss your corridor (country-country), expected monthly spend, tuition dates and whether you need instalments. This lets us recommend single vs multi-currency card or remittance schedule.",
      time: "10–20 minutes",
      required: ["Passport ID page", "Proof of funds / bank statement"],
    },
    {
      step: 2,
      title: "KYC & Compliance",
      detail:
        "We help you complete KYC securely — document upload, identity verification and AML checks. Our partners handle verification quickly for common corridors.",
      time: "Same day – 48 hours",
      required: ["Proof of address", "PAN / Tax ID (as applicable)"],
    },
    {
      step: 3,
      title: "Card Issuance & Activation",
      detail:
        "Card dispatched digitally or physically. Activate by setting PIN and enabling contactless if needed. We guide you through safe card setup.",
      time: "24–48 hours",
      required: ["Phone number for OTP"],
    },
    {
      step: 4,
      title: "Load & Manage Funds",
      detail:
        "Top up via bank transfer or online payment. Choose which currency to lock. We recommend splitting large tuition amounts into staged loads to reduce FX exposure.",
      time: "Instant – same day",
      required: ["Bank transfer details / receipt"],
    },
    {
      step: 5,
      title: "Using Abroad",
      detail:
        "Pay at POS, withdraw cash at ATMs (be mindful of ATM fees). Use app for transaction history and merchant receipts—useful for university reimbursements or accounting.",
      time: "Immediate",
      required: [],
    },
    {
      step: 6,
      title: "Block / Replace & Ongoing Support",
      detail:
        "Lost/stolen? We block the card instantly, arrange emergency cash or replacement delivery depending on location, and help with any refunds or disputes.",
      time: "Immediate response",
      required: ["Confirm identity over secure channel"],
    },
  ];

  return (
    <section className="mt-12" aria-labelledby="process-heading">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
          <FaRegClock className="w-5 h-5 text-green-600" />
        </div>
        <h2
          id="process-heading"
          className="text-xl md:text-2xl font-extrabold text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Step-by-step process
        </h2>
      </div>

      <ol className="mt-6 space-y-6">
        {steps.map((s) => (
          <li
            key={s.step}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="min-w-[52px] h-12 rounded-full bg-[var(--green,#0f766e)]/10 text-[var(--green,#0f766e)] flex items-center justify-center font-semibold">
                {s.step}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className="font-semibold text-slate-900"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {s.title}
                  </h3>
                  <div className="text-xs text-slate-500">{s.time}</div>
                </div>
                <p
                  className="text-sm text-slate-600 mt-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {s.detail}
                </p>

                {s.required && s.required.length > 0 && (
                  <div className="mt-3 text-xs text-slate-500">
                    <strong>Documents:</strong> {s.required.join(" • ")}
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* -------------------- FEES & COMPARISON -------------------- */
function FeesAndComparisonCard({ title, items }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm h-full">
      <h4
        className="font-semibold text-slate-900"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {title}
      </h4>
      <ul
        className="mt-3 space-y-2 text-sm text-slate-600"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {items.map((it, idx) => (
          <li key={idx} className="flex justify-between gap-4">
            <span>{it.label}</span>
            <span className="font-medium text-slate-900">{it.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeesAndComparison() {
  // Example scenario numbers — replace with real numbers from partners
  const cardFees = [
    { label: "Issuance fee", value: "€4 – €15 (often waived)" },
    { label: "Reload FX spread", value: "0.5% – 1.5% (negotiable)" },
    { label: "ATM Withdrawal", value: "€1.5 – €3 + ATM operator fee" },
    { label: "Monthly maintenance", value: "Free – €1.5" },
  ];

  const bankWire = [
    { label: "Transfer fee", value: "€8 – €35 (fixed + %) " },
    { label: "FX spread", value: "0.75% – 2.5%" },
    { label: "Speed", value: "1–5 business days" },
    { label: "Best for", value: "Large, infrequent transfers" },
  ];

  const expressPartner = [
    {
      label: "Transfer fee",
      value: "Low fixed fee or % (depends on corridor)",
    },
    { label: "FX spread", value: "0.5% – 1.2%" },
    { label: "Speed", value: "Minutes – hours" },
    { label: "Best for", value: "Urgent/medium transfers" },
  ];

  const scenarioExamples = [
    {
      title: "Tuition payment — €6,000",
      card: "Staged reloads: lower FX risk; total cost ≈ bank + lower spread",
      wire: "Single wire — convenience but higher fixed fees",
      tip: "For >€5k consider splitting across two reloads timed by market.",
    },
    {
      title: "Monthly living — €600",
      card: "Use card for POS/ATM; low monthly overhead",
      wire: "Not efficient due to fixed fees per transfer",
      tip: "Use monthly standing reloads or family remittance plan.",
    },
  ];

  return (
    <section className="mt-12" aria-labelledby="fees-heading">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
          <FaMoneyBillWave className="w-5 h-5 text-green-600" />
        </div>
        <h2
          id="fees-heading"
          className="text-xl md:text-2xl font-extrabold text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Fees, limits & comparison (examples)
        </h2>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeesAndComparisonCard
          title="Forex Travel Card (typical)"
          items={cardFees}
        />
        <FeesAndComparisonCard
          title="Bank Wire / Traditional"
          items={bankWire}
        />
        <FeesAndComparisonCard
          title="Express Partner Transfer"
          items={expressPartner}
        />
      </div>

      <div className="mt-6">
        <h3
          className="text-lg font-semibold text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Real-world scenarios
        </h3>
        <div className="mt-3 grid gap-4">
          {scenarioExamples.map((s, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold text-slate-900">{s.title}</div>
                  <p className="text-sm text-slate-600 mt-1">{s.tip}</p>
                </div>
                <div className="text-sm text-slate-700">
                  <div>
                    <strong>Card:</strong> {s.card}
                  </div>
                  <div className="mt-1">
                    <strong>Wire:</strong> {s.wire}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- REMITTANCE OPTIONS -------------------- */
function RemittanceOptions() {
  const options = [
    {
      name: "Partner Express",
      speed: "Minutes–Hours",
      ideal: "Urgent tuition or emergency",
      cost: "Low % + small fixed",
      notes: "Best for small-medium urgent amounts",
    },
    {
      name: "Bank Wire",
      speed: "1–5 business days",
      ideal: "Large single transfers",
      cost: "Higher fixed + spread",
      notes: "Good for single large tuition transfers",
    },
    {
      name: "Scheduled Monthly Transfer",
      speed: "1–3 days",
      ideal: "Monthly support & living",
      cost: "Low fixed per transfer",
      notes: "Set up standing instruction for predictable monthly needs",
    },
  ];

  return (
    <section
      id="remittance-options"
      className="mt-12"
      aria-labelledby="remit-heading"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
          <FaGlobe className="w-5 h-5 text-green-600" />
        </div>
        <h2
          id="remit-heading"
          className="text-xl md:text-2xl font-extrabold text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Remittance options & speeds
        </h2>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <thead>
            <tr className="text-left">
              <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                Option
              </th>
              <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                Typical speed
              </th>
              <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                Ideal for
              </th>
              <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                Cost
              </th>
              <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {options.map((o, i) => (
              <tr key={i} className="border-t">
                <td className="px-5 py-4 text-sm text-slate-800">{o.name}</td>
                <td className="px-5 py-4 text-sm text-slate-600">{o.speed}</td>
                <td className="px-5 py-4 text-sm text-slate-600">{o.ideal}</td>
                <td className="px-5 py-4 text-sm text-slate-600">{o.cost}</td>
                <td className="px-5 py-4 text-sm text-slate-600">{o.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-sm text-slate-600">
        If you need help choosing, our advisors run a corridor-specific cost
        simulation during the free consultation.
      </div>
    </section>
  );
}

/* -------------------- RESOURCES / DOWNLOADS -------------------- */
function ResourcesDownloads() {
  const resources = [
    { label: "Fee & Charges Sheet (Sample)", href: "#", size: "PDF • 1.1MB" },
    { label: "Student Remittance Checklist", href: "#", size: "PDF • 280KB" },
    {
      label: "How to manage currency risk (guide)",
      href: "#",
      size: "Article",
    },
  ];

  return (
    <section className="mt-12" aria-labelledby="resources-heading">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
          <FaFileDownload className="w-5 h-5 text-green-600" />
        </div>
        <h2
          id="resources-heading"
          className="text-xl md:text-2xl font-extrabold text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Resources & downloads
        </h2>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {resources.map((r, i) => (
          <a
            key={i}
            href={r.href}
            className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition flex items-center gap-4"
            aria-label={`Download ${r.label}`}
          >
            <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center">
              <FaFileDownload className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="font-semibold text-slate-900">{r.label}</div>
              <div className="text-sm text-slate-600 mt-1">{r.size}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* -------------------- DETAILED FAQs -------------------- */
function FAQsDetailed() {
  const faqs = [
    {
      q: "What's the main advantage of a forex travel card for students?",
      a: "Predictability. You lock an exchange rate at reload, so when tuition date arrives you know exactly how much local currency you'll have. This reduces the risk of currency fluctuations impacting your budget.",
    },
    {
      q: "Can I reload the card from India or my home country?",
      a: "Yes — most providers accept bank transfers and online reloads from your home country, subject to local remittance rules (including RBI/FX documentation for India). We help with compliance documentation.",
    },
    {
      q: "Are there limits on how much I can load or withdraw?",
      a: "Yes. Daily ATM withdrawal limits vary by provider & country. Large loads may be subject to additional KYC. We'll advise caps and set sensible limits in your account for security.",
    },
    {
      q: "Do you assist with refunds or disputes if a charge is incorrect?",
      a: "We assist in raising disputes with the issuer, providing transaction evidence and liaising until resolution. For card chargebacks, timelines depend on the merchant & network.",
    },
    {
      q: "How do you ensure transparency of charges?",
      a: "We provide a fee sheet and simulate the total cost for your corridor (fixed fees + FX spread + ATM). You receive transaction receipts and monthly statements for records.",
    },
    {
      q: "Can I transfer money to a bank account abroad instead of using a card?",
      a: "Yes — bank wires and partner transfers are supported. For large tuition transfers, wires may be more appropriate despite higher fixed fees; we’ll recommend the most cost-effective route.",
    },
  ];

  return (
    <section className="mt-12" aria-labelledby="faq-heading">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
          <FaQuestionCircle className="w-5 h-5 text-green-600" />
        </div>
        <h2
          id="faq-heading"
          className="text-xl md:text-2xl font-extrabold text-slate-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Frequently asked questions — detailed
        </h2>
      </div>

      <div className="mt-6 space-y-3">
        {faqs.map((f, i) => (
          <details
            key={i}
            className="bg-white rounded-lg p-4 border border-gray-100"
            aria-labelledby={`faq-${i}`}
          >
            <summary
              id={`faq-${i}`}
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
