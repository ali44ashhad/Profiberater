import React, { useState, useRef, useEffect } from "react";

const DEFAULT_FAQS = [
  {
    id: 1,
    q: "What services does Profiberater provide?",
    a: "We specialize in German Profiberater: CV review and optimization, interview coaching, career roadmap planning, Blue Card and Job Seeker Visa guidance, and cultural preparation for the German job market.",
  },
  {
    id: 2,
    q: "Can you help me with my CV for the German market?",
    a: "Yes — we align your CV with German standards, ensuring it meets employer expectations. We also help with cover letters and LinkedIn profiles to maximize visibility with German recruiters.",
  },
  {
    id: 3,
    q: "Do you provide interview coaching?",
    a: "Absolutely. We prepare you with mock interviews tailored to German employers, covering both technical and cultural aspects, so you feel confident and well-prepared.",
  },
  {
    id: 4,
    q: "What is a career roadmap and how does it help?",
    a: "A career roadmap is a personalized step-by-step plan we create with you, aligning your skills, goals, and visa pathway. It ensures clarity in your journey to build a successful career in Germany.",
  },
  {
    id: 5,
    q: "Can you guide me on German visas like Job Seeker or Blue Card?",
    a: "Yes. We explain the eligibility, documents, and timelines for Job Seeker Visa and Blue Card applications. While we are not a law firm, we guide you on how these visas connect with your career goals.",
  },
  {
    id: 6,
    q: "Do I need German language skills for a job in Germany?",
    a: "Not always. Many tech and international companies hire in English, but having German skills (B1/B2 level) greatly expands opportunities. We guide you on the right balance for your field.",
  },
  {
    id: 7,
    q: "How long does the consulting process take?",
    a: "It depends on your needs. A CV review can be done in a few days, while a full career roadmap or interview coaching may take a few weeks. We customize timelines to your goals.",
  },
  {
    id: 8,
    q: "Do you offer free consultations?",
    a: "Yes, we typically begin with a free consultation call to understand your profile and career goals. After that, you can choose from tailored service packages.",
  },
];

export default function FAQSection({
  faqs = DEFAULT_FAQS,
  defaultOpenId = null,
}) {
  const [openId, setOpenId] = useState(defaultOpenId);
  const containerRef = useRef(null);
  const buttonRefs = useRef({}); // keyed refs for keyboard navigation

  useEffect(() => {
    // keyboard navigation for Up/Down arrows between questions
    const onKey = (e) => {
      if (!containerRef.current) return;
      // only handle when focus is inside this section
      if (!containerRef.current.contains(document.activeElement)) return;

      const focusable = Array.from(
        containerRef.current.querySelectorAll('[data-faq-button="true"]')
      );
      const idx = focusable.indexOf(document.activeElement);
      if (idx === -1) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = focusable[(idx + 1) % focusable.length];
        next.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = focusable[(idx - 1 + focusable.length) % focusable.length];
        prev.focus();
      } else if (e.key === "Home") {
        e.preventDefault();
        focusable[0].focus();
      } else if (e.key === "End") {
        e.preventDefault();
        focusable[focusable.length - 1].focus();
      } else if (e.key === "Enter" || e.key === " ") {
        // Enter/Space toggle is natively handled by button, but support space from some browsers
        // do nothing here so default button behavior runs
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    // full-bleed wrapper so background spans viewport width and removes white bands
    <div className="relative isolate w-screen left-1/2 -ml-[50vw] right-1/2 -mr-[50vw]">
      <section
        ref={containerRef}
        className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-green-50 py-12 md:py-16"
        aria-labelledby="faq-heading"
      >
        <div className="px-6 md:px-12 lg:px-20 max-w-screen-2xl mx-auto">
          {/* header */}
          <div className="mb-8">
            <span className="block text-emerald-700 text-sm font-semibold tracking-widest md:text-base">
              HELP
            </span>
            <h2
              id="faq-heading"
              className="text-slate-900 font-extrabold text-2xl md:text-4xl leading-[1.12] max-w-3xl"
            >
              Frequently Asked Questions
            </h2>
          </div>

          {/* subtle background pattern (non-interactive) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 10% 10%, rgba(14,165,132,0.02), transparent 20%), radial-gradient(circle at 90% 80%, rgba(6,95,70,0.015), transparent 25%)",
            }}
          />

          {/* FAQs list */}
          <div className="grid grid-cols-1 gap-4">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              const panelId = `faq-panel-${faq.id}`;
              const btnId = `faq-button-${faq.id}`;
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
                >
                  <h3 className="m-0">
                    <button
                      id={btnId}
                      data-faq-button="true"
                      ref={(el) => (buttonRefs.current[faq.id] = el)}
                      onClick={() => toggle(faq.id)}
                      aria-controls={panelId}
                      aria-expanded={isOpen}
                      className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300/40 transition-colors"
                    >
                      <span className="block text-left font-semibold text-slate-900">
                        {faq.q}
                      </span>

                      <span
                        className={`flex items-center justify-center w-9 h-9 rounded-full transition-transform duration-200 ${
                          isOpen
                            ? "bg-gradient-to-r from-green-600 to-sky-600 text-white"
                            : "bg-white border border-gray-200 text-slate-700"
                        }`}
                        aria-hidden
                      >
                        <svg
                          className={`w-4 h-4 transform ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        >
                          <path d="M5 8.5l5 5 5-5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className={`px-5 overflow-hidden transition-[max-height,opacity,padding] duration-300 ease-in-out ${
                      isOpen
                        ? "max-h-[480px] py-4 opacity-100"
                        : "max-h-0 py-0 opacity-0"
                    }`}
                  >
                    <div className="text-sm text-slate-700 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* small helper styles */}
        <style>{`
          /* reduce motion respect: disable transitions if user prefers reduced motion */
          @media (prefers-reduced-motion: reduce) {
            .transition-[max-height,opacity,padding] { transition: none !important; }
            .transition-colors { transition: none !important; }
          }
        `}</style>
      </section>
    </div>
  );
}
