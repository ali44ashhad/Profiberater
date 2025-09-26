import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/**
 * Theme-matched Challenges component
 * - Colors / spacing / patterns aligned to CredibilitySection theme (green + sky accents)
 * - Accessible accordion (one open at a time), keyboard nav, focus management
 * - Subtle framer-motion entrance, respects prefers-reduced-motion
 * - Cards have no thin bottom rule (removed)
 */

export default function Challenges({
  imageSrc = "https://be.rooton.ca/uploads/challenges_bg_f932414470.png",
  items = [
    "Overstay in Schengen Area",
    "Multiple Germany Visa Refusals",
    "Educational Gap for German Universities",
    "Low Academic Profile for German Admissions",
    "Multiple Backlogs in Academics",
    "Language Proficiency Challenges (German/English)",
    "Financial Documentation Issues",
    "Age Limitations for German Student Visa",
    "Course Change or Field Switch Challenges",
  ],
  ctaText = "Get Free Germany Consultation",
  onCTAClick = null,
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();
  const panelRefs = useRef([]);
  const prefersReduced = useReducedMotion();

  // CTA fallback
  const handleCTA = () => {
    if (typeof onCTAClick === "function") return onCTAClick();
    navigate("/germany-consultation");
  };

  // toggle single panel
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  // focus panel content when opened
  useEffect(() => {
    if (openIndex !== null && panelRefs.current[openIndex]) {
      const el = panelRefs.current[openIndex];
      el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
    }
  }, [openIndex]);

  // close on Esc globally
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // motion variants (subtle, matches theme)
  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * i, duration: 0.45, ease: "easeOut" },
    }),
  };

  const panelVariants = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.32, ease: "easeOut" },
    },
  };

  const iconVariants = { closed: { rotate: 0 }, open: { rotate: 45 } };

  return (
    <div className="relative isolate w-screen left-1/2 -ml-[50vw] right-1/2 -mr-[50vw]">
      <section
        aria-labelledby="challenges-heading"
        className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-green-50 py-20 lg:py-28"
      >
        {/* subtle pattern to match CredibilitySection */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M30 10c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20zm0 36c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.163 16-16 16z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Title, CTA, illustration */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, x: -12 }}
              animate={prefersReduced ? {} : { opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <span
                className="text-sm md:text-base tracking-widest font-semibold"
                style={{ color: "#0f766e", fontFamily: "Poppins, sans-serif" }}
              >
                GERMANY ADMISSION CHALLENGES
              </span>

              <h2
                id="challenges-heading"
                className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <span className="bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent">
                  Overcoming common barriers to study in Germany
                </span>
              </h2>

              <p className="mt-6 text-base text-gray-600 leading-relaxed">
                From visa refusals to language or academic gaps, our specialist
                team builds realistic, step-by-step plans to improve your
                chances with German universities and immigration authorities.
              </p>

              <div className="mt-8">
                <button
                  onClick={handleCTA}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-sky-600 text-white rounded-xl px-6 py-3 font-semibold shadow hover:from-green-700 hover:to-sky-700 transition transform hover:-translate-y-0.5"
                >
                  {ctaText}
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-10 max-w-md">
                <img
                  src={imageSrc}
                  alt="Students facing challenges for German admissions"
                  className="w-full h-auto object-contain rounded-2xl shadow-lg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>

            {/* Right: Accordion list — theme-matched cards */}
            <div>
              <div className="space-y-4">
                {items.map((label, i) => {
                  const isOpen = openIndex === i;
                  const btnId = `challenge-btn-${i}`;
                  const panelId = `challenge-panel-${i}`;

                  return (
                    <motion.div
                      key={label}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={itemVariants}
                      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                      style={{ boxShadow: "0 12px 30px rgba(2,6,23,0.06)" }}
                    >
                      <button
                        id={btnId}
                        aria-controls={panelId}
                        aria-expanded={isOpen}
                        onClick={() => toggle(i)}
                        onKeyDown={(e) => {
                          if (e.key === "ArrowDown") {
                            e.preventDefault();
                            const next = (i + 1) % items.length;
                            document
                              .getElementById(`challenge-btn-${next}`)
                              ?.focus();
                          }
                          if (e.key === "ArrowUp") {
                            e.preventDefault();
                            const prev = (i - 1 + items.length) % items.length;
                            document
                              .getElementById(`challenge-btn-${prev}`)
                              ?.focus();
                          }
                        }}
                        className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-green-200 rounded-2xl"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              aria-hidden
                            >
                              <path
                                d="M12 2v20M2 12h20"
                                stroke="#0f766e"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>

                          <span className="text-lg font-semibold text-slate-900">
                            {label}
                          </span>
                        </div>

                        <motion.span
                          className={`flex items-center justify-center w-10 h-10 rounded-full border border-slate-100`}
                          initial={false}
                          animate={isOpen ? "open" : "closed"}
                          variants={iconVariants}
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 26,
                          }}
                        >
                          <svg
                            className={`w-4 h-4 ${
                              isOpen ? "text-white" : "text-slate-600"
                            }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.5 5.5v13M5.5 11.5h13"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={panelId}
                            ref={(el) => (panelRefs.current[i] = el)}
                            role="region"
                            aria-labelledby={btnId}
                            className="px-6 pb-6"
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            variants={panelVariants}
                          >
                            <p className="text-base text-slate-600">
                              We successfully handle <strong>"{label}"</strong>{" "}
                              cases. Our experienced team will assess your
                              profile, outline realistic chances with German
                              universities/authorities, and recommend a clear,
                              tailored next-step plan to improve your outcome.
                            </p>

                            <div className="mt-4 flex items-center gap-3">
                              <button
                                onClick={handleCTA}
                                className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-md font-medium border border-green-100 hover:bg-green-100 transition"
                              >
                                Get personalised help
                                <svg
                                  className="w-4 h-4"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden
                                >
                                  <path
                                    d="M5 12h14M12 5l7 7-7 7"
                                    stroke="currentColor"
                                    strokeWidth="1.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
