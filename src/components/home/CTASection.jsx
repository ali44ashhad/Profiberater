import React from "react";
import { useNavigate } from "react-router-dom";

export default function CTASection({
  title = "Ready to begin your immigration journey?",
  subtitle = "Speak with our certified experts today — get a free initial consultation.",
  primaryText = "Book an Appointment",
  secondaryText = "Contact Us",
  onPrimary,
  onSecondary,
  backgroundImage,
}) {
  const navigate = useNavigate();

  const handlePrimary = () => {
    if (typeof onPrimary === "function") return onPrimary();
    navigate("/book-rcic");
  };

  const handleSecondary = () => {
    if (typeof onSecondary === "function") return onSecondary();
    navigate("/contact");
  };

  return (
    // full-bleed wrapper so background covers viewport width (prevents top/bottom white bands)
    <div className="relative isolate w-screen left-1/2 -ml-[50vw] right-1/2 -mr-[50vw]">
      <section
        aria-labelledby="cta-heading"
        className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-green-50 py-12 md:py-20"
      >
        {/* small theme & animation styles (respect prefers-reduced-motion) */}
        <style>{`
          :root {
            --cta-dark: #0f172a;
            --cta-green-start: #16A34A;
            --cta-sky-end: #0EA5A4;
            --cta-gold: #F59E0B;
            --cta-mid: #64748b;
          }
          @keyframes grid-drift {
            0% { background-position: 0 0, 0 0, 0 0, 0 0; }
            50% { background-position: 24px 12px, -24px -12px, 36px 18px, -36px -18px; }
            100% { background-position: 0 0, 0 0, 0 0, 0 0; }
          }
          .cta-card-enter { animation: cta-fade-up 560ms cubic-bezier(.2,.9,.2,1) both; }
          @keyframes cta-fade-up {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @media (prefers-reduced-motion: reduce) {
            .cta-card-enter { animation: none !important; }
            .grid-pattern { animation: none !important; }
          }
        `}</style>

        {/* decorative subtle grid + radial accents (non-interactive) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 pointer-events-none grid-pattern"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(6,95,70,0.03) 1px, transparent 1px), " +
              "linear-gradient(to bottom, rgba(14,165,132,0.02) 1px, transparent 1px), " +
              "radial-gradient(circle at 8% 20%, rgba(14,165,132,0.035) 0%, transparent 25%), " +
              "radial-gradient(circle at 88% 80%, rgba(6,95,70,0.02) 0%, transparent 30%)",
            backgroundSize: "48px 48px, 48px 48px, 240px 240px, 240px 240px",
            mixBlendMode: "overlay",
            opacity: 0.95,
            animation: "grid-drift 24s ease-in-out infinite",
          }}
        />

        <div className="px-6 md:px-12 lg:px-20 cta-card-enter">
          <div
            className="relative bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col lg:flex-row items-stretch"
            style={{ border: "1px solid rgba(15,23,42,0.04)" }}
          >
            {/* left content */}
            <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col justify-center">
              <span className="inline-block text-xs md:text-sm font-semibold tracking-widest text-green-700">
                READY?
              </span>

              <h2
                id="cta-heading"
                className="mt-4 text-2xl md:text-4xl font-extrabold text-[var(--cta-dark)] leading-tight"
                style={{ lineHeight: 1.06 }}
              >
                {title}
              </h2>

              <p className="mt-4 text-sm md:text-base text-[var(--cta-mid)]">
                {subtitle}
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
                <button
                  type="button"
                  onClick={handlePrimary}
                  aria-label={primaryText}
                  className="inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold shadow focus:outline-none focus:ring-4 focus:ring-green-300/30 transform transition-transform hover:scale-[1.01]"
                  style={{
                    minWidth: 180,
                    background:
                      "linear-gradient(90deg, var(--cta-green-start), var(--cta-sky-end))",
                    color: "#fff",
                    boxShadow: "0 8px 24px rgba(2,6,23,0.08)",
                  }}
                >
                  <span>{primaryText}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className="ml-3"
                    aria-hidden
                  >
                    <defs>
                      <linearGradient id="ctaGradBtn" x1="0%" x2="100%">
                        <stop offset="0%" stopColor="#FFDA00" />
                        <stop offset="100%" stopColor="#E3A430" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M2 10h14M10 4l6 6-6 6"
                      stroke="url(#ctaGradBtn)"
                      strokeWidth="1.6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={handleSecondary}
                  aria-label={secondaryText}
                  className="inline-flex items-center justify-center border rounded-lg px-4 py-3 font-medium bg-white text-[var(--cta-dark)] hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-[rgba(14,165,164,0.12)]"
                >
                  <span>{secondaryText}</span>
                </button>
              </div>
            </div>

            {/* right decorative area (image or subtle svg) */}
            <div className="hidden lg:block w-1/2 relative">
              {backgroundImage ? (
                <div className="absolute inset-0 flex items-end justify-end pr-8 pointer-events-none">
                  <img
                    src={backgroundImage}
                    alt=""
                    aria-hidden="true"
                    className="max-w-[520px] w-full h-auto object-contain"
                    style={{ filter: "saturate(0.98) contrast(0.98)" }}
                  />
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none">
                  {/* subtle theme SVG */}
                  <svg
                    width="420"
                    height="320"
                    viewBox="0 0 420 320"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <defs>
                      <linearGradient id="ctaBgGrad" x1="0%" x2="100%">
                        <stop offset="0%" stopColor="#ECFEFF" />
                        <stop offset="100%" stopColor="#ECFDF5" />
                      </linearGradient>
                    </defs>
                    <rect
                      x="0"
                      y="0"
                      width="420"
                      height="320"
                      rx="20"
                      fill="url(#ctaBgGrad)"
                    />
                    <circle
                      cx="320"
                      cy="80"
                      r="70"
                      fill="#FFDA00"
                      opacity="0.06"
                    />
                    <circle
                      cx="240"
                      cy="220"
                      r="90"
                      fill="#FFCA6C"
                      opacity="0.04"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* small footer note */}
          <div className="mt-4 text-xs text-[var(--cta-mid)]">
            <span>
              Career Consultant — CV review, interview coaching, and German visa
              guidance.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
