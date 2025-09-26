import React, { useEffect, useRef, useState } from "react";

const partners = [
  "https://be.rooton.ca/uploads/CELPIP_c182e81abc.png",
  "https://be.rooton.ca/uploads/CAEL_192c8ef6e6.png",
  "https://be.rooton.ca/uploads/partnership_hdfc_1ef1e4a385.png",
  "https://be.rooton.ca/uploads/partnership_pearson_91b1d701c5.png",
  "https://be.rooton.ca/uploads/partnership_ielts_ce0288a9c5.png",
  "https://be.rooton.ca/uploads/ets_1adc55f015.png",
  "https://be.rooton.ca/uploads/avanse_0fbd252101.png",
  "https://be.rooton.ca/uploads/lorien_finance_202211151157_dc5096ef64.png",
];

export default function BookPartnersSection({
  speed = 48.96, // seconds to complete one full loop
  pauseOnHover = true,
  showControls = true,
}) {
  const marqueeRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setPrefersReducedMotion(mq.matches);
    setPrefersReducedMotion(mq.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  // keyboard handling when the marquee wrapper is focused
  useEffect(() => {
    const node = marqueeRef.current;
    if (!node) return;
    const onKey = (e) => {
      if (document.activeElement !== node) return;
      if (e.key === " " || e.key === "Spacebar" || e.key === "Enter") {
        e.preventDefault();
        setPaused((p) => !p);
      }
      if (e.key === "Escape") {
        setPaused(false);
        node.blur();
      }
    };
    node.addEventListener("keydown", onKey);
    return () => node.removeEventListener("keydown", onKey);
  }, []);

  // hover / focus / touch handlers
  const onMouseEnter = () => pauseOnHover && setPaused(true);
  const onMouseLeave = () => pauseOnHover && setPaused(false);
  const onFocus = () => setPaused(true);
  const onBlur = () => setPaused(false);
  const onTouchStart = () => setPaused(true);
  const onTouchEnd = () => setPaused(false);

  // inline track style controlled by state (keeps runtime simple)
  const trackStyle = {
    animationName: prefersReducedMotion ? "none" : "marquee",
    animationDuration: prefersReducedMotion ? "0s" : `${speed}s`,
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationPlayState: paused || prefersReducedMotion ? "paused" : "running",
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  };

  // duplicate array for seamless scrolling
  const loop = [...partners, ...partners];

  return (
    // Full-bleed wrapper so background and pattern go edge-to-edge (no white bands)
    <div className="relative isolate w-screen left-1/2 -ml-[50vw] right-1/2 -mr-[50vw]">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-green-50 py-12 md:py-16">
        <div className="px-6 md:px-12 lg:px-20   mx-auto relative">
          {/* Header */}
          <div>
            <h2 className="text-emerald-700 text-sm font-semibold tracking-widest md:text-base">
              PARTNERSHIPS
            </h2>
            <h3 className="mt-3 text-2xl md:text-4xl font-extrabold text-slate-900">
              Our authorised partners
            </h3>
          </div>

          {/* Background layer — subtle grid + soft radial accents */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none -z-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(6,95,70,0.03) 1px, transparent 1px), " +
                "linear-gradient(to bottom, rgba(14,165,132,0.02) 1px, transparent 1px), " +
                "radial-gradient(circle at 8% 20%, rgba(14,165,132,0.035) 0%, transparent 25%), " +
                "radial-gradient(circle at 88% 80%, rgba(6,95,70,0.02) 0%, transparent 30%)",
              backgroundSize: "48px 48px, 48px 48px, 240px 240px, 240px 240px",
              mixBlendMode: "overlay",
              opacity: 0.95,
              animation: prefersReducedMotion
                ? "none"
                : "grid-drift 28s ease-in-out infinite",
            }}
          />

          {/* Marquee */}
          <div className="mt-6 w-full overflow-hidden relative">
            <div
              ref={marqueeRef}
              role="list"
              tabIndex={0}
              aria-label="Partners carousel — press space or Enter to pause / resume"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onFocus={onFocus}
              onBlur={onBlur}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              className="w-full focus:outline-none group"
            >
              {/* Track: we duplicate content (loop) and translateX -50% to create seamless loop */}
              <div className="flex will-change-transform" style={trackStyle}>
                {loop.map((src, idx) => (
                  <div
                    key={`p-${idx}`}
                    role="listitem"
                    className="relative ml-5 mb-8 mt-6 lg:mb-16 lg:mt-10 lg:ml-12 bg-white rounded-xl shadow-sm flex justify-center items-center max-w-[260px] min-w-[220px] w-[48vw] lg:w-[260px] h-[96px] lg:h-[140px] flex-shrink-0"
                    style={{
                      minWidth: 220,
                      boxShadow: "0 10px 30px rgba(2,6,23,0.06)",
                    }}
                  >
                    <img
                      src={src}
                      alt={`Partner logo ${(idx % partners.length) + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Controls (appear on hover or focus) */}
            {showControls && (
              <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200 pointer-events-none">
                <button
                  type="button"
                  onClick={() => setPaused((p) => !p)}
                  className="pointer-events-auto inline-flex items-center gap-2 bg-white/95 px-3 py-2 rounded-md shadow border border-gray-100 text-sm font-medium focus:ring-2 focus:ring-green-300"
                  aria-pressed={paused}
                  aria-label={
                    paused
                      ? "Resume partners carousel"
                      : "Pause partners carousel"
                  }
                >
                  <span className="text-slate-900">
                    {paused ? "Resume" : "Pause"}
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Decorative SVG (subtle, theme matched) */}
          <div className="mt-20 absolute top-0 right-0 w-1/3 h-full hidden lg:block pointer-events-none opacity-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="360"
              viewBox="0 0 1440 360"
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="bgGradSmall" x1="0" x2="1">
                  <stop offset="0%" stopColor="#E6FFFA" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#F0F9FF" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <rect width="1440" height="360" fill="url(#bgGradSmall)" />
            </svg>
          </div>

          {/* small inline styles / keyframes */}
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); } /* because content duplicated */
            }

            @keyframes grid-drift {
              0% { background-position: 0 0, 0 0, 0 0, 0 0; }
              50% { background-position: 24px 12px, -24px -12px, 48px 24px, -48px -24px; }
              100% { background-position: 0 0, 0 0, 0 0, 0 0; }
            }

            /* pause-on-hover fallback for users without JS control */
            .w-full:hover .will-change-transform { animation-play-state: paused; }

            /* respect reduced motion */
            @media (prefers-reduced-motion: reduce) {
              .will-change-transform { animation: none !important; }
              .grid-drift { animation: none !important; }
            }
          `}</style>
        </div>
      </section>
    </div>
  );
}
