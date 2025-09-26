import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaHandsHelping,
  FaGraduationCap,
  FaBriefcase,
  FaGlobeEurope,
  FaMoneyBillWave,
} from "react-icons/fa";

/**
 * WhyChooseUsThemeMatched.jsx
 *
 * - Theme matched to CredibilitySection:
 *   green + sky accents, subtle SVG pattern, Poppins headings, Inter body
 * - Desktop: 3x2 grid (lg=3 cols), tilt-on-mousemove (respects reduced-motion)
 * - Accessible: focus styles, aria attributes
 * - No thin bottom line on cards
 */

const ITEMS = [
  {
    key: "expert",
    title: "Expert Counsellors with Industry Insight",
    body: "Our team consists of seasoned professionals with industry and academic experience, providing practical guidance tailored to German & European pathways.",
    Icon: FaUserTie,
  },
  {
    key: "personal",
    title: "Personalized Attention",
    body: "We accept a limited number of students per intake to give each applicant the time and tailored strategy they deserve.",
    Icon: FaHandsHelping,
  },
  {
    key: "levels",
    title: "Support Across All Academic Levels",
    body: "From Undergraduate to PhD — we tailor applications, test prep and visa guidance to the specific level you apply for.",
    Icon: FaGraduationCap,
  },
  {
    key: "fields",
    title: "Wide Range of Study Fields",
    body: "Engineering, CS, Business, Arts and more — we match your background to programs with the best fit and outcomes.",
    Icon: FaBriefcase,
  },
  {
    key: "europe",
    title: "Specialization in European Admissions",
    body: "Deep knowledge of German & European admissions, eligibility rules, cultural expectations and scholarship routes.",
    Icon: FaGlobeEurope,
  },
  {
    key: "tuition",
    title: "Opportunities for Tuition-Free Education",
    body: "We identify tuition-free or low-fee programs and craft competitive applications that increase scholarship chances.",
    Icon: FaMoneyBillWave,
  },
];

export default function WhyChooseUs() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const cardRefs = useRef([]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const rafMap = new Map();

    function onMove(e, idx) {
      const el = cardRefs.current[idx];
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * 8; // subtle
      const rotateX = (0.5 - py) * 6; // subtle
      const translateZ = 6;

      if (rafMap.has(idx)) cancelAnimationFrame(rafMap.get(idx));
      rafMap.set(
        idx,
        requestAnimationFrame(() => {
          el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
          el.style.boxShadow = "0 18px 40px rgba(15,118,110,0.08)";
        })
      );
    }

    function onLeave(idx) {
      const el = cardRefs.current[idx];
      if (!el) return;
      if (rafMap.has(idx)) cancelAnimationFrame(rafMap.get(idx));
      rafMap.set(
        idx,
        requestAnimationFrame(() => {
          el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
          el.style.boxShadow = "0 8px 20px rgba(2,6,23,0.06)";
        })
      );
    }

    // attach listeners
    cardRefs.current.forEach((el, idx) => {
      if (!el) return;
      const move = (ev) => onMove(ev, idx);
      const leave = () => onLeave(idx);
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      el.addEventListener("blur", leave);
      el.__cleanup = () => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
        el.removeEventListener("blur", leave);
      };
    });

    return () => {
      rafMap.forEach((id) => cancelAnimationFrame(id));
      cardRefs.current.forEach((el) => {
        if (el && el.__cleanup) el.__cleanup();
      });
    };
  }, [prefersReducedMotion]);

  const onFocus = (idx) => {
    const el = cardRefs.current[idx];
    if (!el) return;
    el.style.transform = "perspective(900px) translateY(-6px) translateZ(6px)";
    el.style.boxShadow = "0 18px 40px rgba(15,118,110,0.08)";
  };
  const onBlur = (idx) => {
    const el = cardRefs.current[idx];
    if (!el) return;
    el.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    el.style.boxShadow = "0 8px 20px rgba(2,6,23,0.06)";
  };

  return (
    <section
      aria-labelledby="why-choose-heading"
      className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-green-50 py-16 lg:py-24"
    >
      {/* subtle background pattern (low opacity like CredibilitySection) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M30 10c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20zm0 36c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.163 16-16 16z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-20">
        <div className="text-center mb-10">
          <p
            className="text-sm md:text-base font-semibold tracking-widest"
            style={{ color: "#0f766e", fontFamily: "Poppins, sans-serif" }}
          >
            WHY CHOOSE US
          </p>

          <motion.h2
            id="why-choose-heading"
            className="mt-3 text-2xl md:text-4xl font-extrabold text-slate-900"
            style={{ fontFamily: "Poppins, sans-serif" }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48 }}
          >
            Practical guidance, personalised for Europe
          </motion.h2>

          <motion.p
            className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.08, duration: 0.45 }}
          >
            We combine experienced counsellors, focused attention and deep
            knowledge of European admissions to help you make confident,
            realistic decisions.
          </motion.p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Key differentiators"
        >
          {ITEMS.map((it, idx) => {
            const Icon = it.Icon;
            return (
              <motion.article
                key={it.key}
                ref={(el) => (cardRefs.current[idx] = el)}
                role="listitem"
                tabIndex={0}
                onFocus={() => onFocus(idx)}
                onBlur={() => onBlur(idx)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-transparent focus:outline-none focus:ring-4 focus:ring-emerald-100"
                aria-labelledby={`why-${it.key}-title`}
                aria-describedby={`why-${it.key}-desc`}
                style={{
                  transform:
                    "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
                  willChange: "transform",
                  transition: prefersReducedMotion
                    ? "none"
                    : "transform 220ms cubic-bezier(.2,.9,.2,1), box-shadow 220ms ease",
                  // ensure full-card look (no thin bottom line)
                  borderBottomWidth: 0,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-green-600" aria-hidden />
                  </div>

                  <div className="flex-1">
                    <h3
                      id={`why-${it.key}-title`}
                      className="text-lg font-semibold text-slate-900"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {it.title}
                    </h3>

                    <p
                      id={`why-${it.key}-desc`}
                      className="mt-2 text-sm text-slate-600 leading-relaxed"
                      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                    >
                      {it.body}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
