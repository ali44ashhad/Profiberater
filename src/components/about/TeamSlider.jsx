import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

/**
 * TeamSliderEnhanced — updated team as requested
 */

const team = [
  {
    id: 1,
    name: "Dr. Pavan B.",
    role: "Biomedical / Biotech / Biology",
    img: "https://via.placeholder.com/600x800?text=Dr.+Pavan+B.",
  },
  {
    id: 2,
    name: "Sagar P.",
    role: "Business Development Manager (Mechanical Engineer)",
    img: "https://via.placeholder.com/600x800?text=Sagar+P.",
  },
  {
    id: 3,
    name: "Vivek P.",
    role: "CEO (Mechanical Engineer)",
    img: "https://via.placeholder.com/600x800?text=Vivek+P.",
  },
  {
    id: 4,
    name: "Dr. Pavan Reddy",
    role: "Biomedical / Biotech / Biology",
    img: "https://via.placeholder.com/600x800?text=Dr.+Pavan+Reddy",
  },
  {
    id: 5,
    name: "Dr. Arindam",
    role: "COEP / Automobile Field / SAP",
    img: "https://via.placeholder.com/600x800?text=Dr.+Arindam",
  },
];

export default function TeamSliderEnhanced({
  autoplay = true,
  autoplayInterval = 5200,
}) {
  const trackRef = useRef(null);
  const cardRef = useRef(null);
  const autoplayRef = useRef(null);
  const hoverRef = useRef(false);
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(320);
  const [gap, setGap] = useState(24);
  const [visible, setVisible] = useState(1);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const computeVisible = useCallback(() => {
    if (typeof window === "undefined") return 1;
    if (window.matchMedia("(min-width:1024px)").matches) return 3;
    if (window.matchMedia("(min-width:768px)").matches) return 2;
    return 1;
  }, []);

  useEffect(() => {
    const mq =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    if (mq) {
      setPrefersReducedMotion(mq.matches);
      mq.addEventListener?.("change", () =>
        setPrefersReducedMotion(mq.matches)
      );
    }

    function measure() {
      const v = computeVisible();
      setVisible(v);

      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setCardWidth(Math.round(rect.width));
      } else {
        if (v === 3) setCardWidth(320);
        else if (v === 2) setCardWidth(360);
        else setCardWidth(Math.max(260, Math.round(window.innerWidth - 48)));
      }

      setGap(v === 1 ? 16 : 24);
      setIndex((prev) => Math.min(prev, Math.max(0, team.length - v)));
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [computeVisible]);

  const maxIndex = Math.max(0, team.length - visible);
  const trackTranslate = -(index * (cardWidth + gap));

  // autoplay
  useEffect(() => {
    if (!autoplay || prefersReducedMotion) return;
    function tick() {
      if (hoverRef.current) return;
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }
    autoplayRef.current = setInterval(tick, autoplayInterval);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [autoplay, autoplayInterval, maxIndex, prefersReducedMotion]);

  // pause autoplay on hover/focus
  const handleMouseEnter = () => (hoverRef.current = true);
  const handleMouseLeave = () => (hoverRef.current = false);

  // keyboard navigation
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
      else if (e.key === "ArrowRight")
        setIndex((i) => Math.min(maxIndex, i + 1));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [maxIndex]);

  const activeIndex = Math.min(
    team.length - 1,
    index + Math.floor(visible / 2)
  );
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));
  const goTo = (i) => setIndex(Math.max(0, Math.min(maxIndex, i)));

  // Framer Motion variants (subtle)
  const cardVariants = {
    hidden: { opacity: 0, y: 8 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
    hover: { scale: 1.03, boxShadow: "0 18px 40px rgba(3,7,18,0.12)" },
  };

  return (
    <section className="relative isolate w-screen left-1/2 -ml-[50vw] right-1/2 -mr-[50vw] bg-gradient-to-br from-white via-sky-50 to-green-50 py-12 md:py-16">
      <div className=" mx-auto px-6 md:px-12 lg:px-20">
        <style>{`
          .square-grid {
            background-image:
              linear-gradient(to right, rgba(6,95,70,0.02) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(14,165,164,0.015) 1px, transparent 1px);
            background-size: 48px 48px;
          }
          .card-scale { transform-origin: center; transition: transform 420ms cubic-bezier(.2,.9,.2,1); }
          @media (prefers-reduced-motion: reduce) {
            .card-scale { transition: none !important; }
          }
        `}</style>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2
              className="text-2xl md:text-4xl font-extrabold mt-2 text-slate-900"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Meet the people who will coach you
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              disabled={index <= 0}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center disabled:opacity-40 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300/30"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="#0f172a"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </button>

            <button
              onClick={next}
              aria-label="Next"
              disabled={index >= maxIndex}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center disabled:opacity-40 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300/30"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
                <path
                  d="M9 6l6 6-6 6"
                  stroke="#0f172a"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className="square-grid rounded-2xl p-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={() => (hoverRef.current = true)}
          onBlur={() => (hoverRef.current = false)}
        >
          <div className="relative overflow-hidden">
            <div
              ref={trackRef}
              className="flex slider-track transition-transform duration-500"
              style={{
                transform: `translateX(${trackTranslate}px)`,
                gap: `${gap}px`,
                paddingBottom: 6,
              }}
              role="region"
              aria-roledescription="carousel"
              aria-label="Team members carousel"
            >
              {team.map((m, i) => {
                const isActive = i === activeIndex;
                const scale = isActive ? 1.04 : 1;
                const zIndex = isActive ? 20 : 10;

                return (
                  <motion.div
                    key={m.id}
                    ref={i === 0 ? cardRef : null}
                    className="flex-shrink-0 bg-white rounded-2xl shadow-lg"
                    initial="hidden"
                    animate="enter"
                    variants={cardVariants}
                    whileHover={prefersReducedMotion ? {} : "hover"}
                    style={{
                      width: `${cardWidth}px`,
                      minWidth: `${cardWidth}px`,
                      transform: `scale(${scale})`,
                      zIndex,
                      overflow: "hidden",
                    }}
                    aria-roledescription="slide"
                    aria-label={`${m.name}, ${m.role}`}
                    tabIndex={0}
                  >
                    <div
                      style={{
                        height: 320,
                        overflow: "hidden",
                        background: "#fff",
                      }}
                    >
                      <img
                        src={m.img}
                        alt={m.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <div style={{ padding: 20 }}>
                      <div
                        className="font-bold text-slate-900 text-lg"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {m.name}
                      </div>
                      <div className="text-sm text-slate-500 mt-1">
                        {m.role}
                      </div>

                      <p className="text-slate-700 text-sm mt-3 leading-relaxed">
                        Experienced expert available for consultations and
                        coaching.
                      </p>

                      <button
                        onClick={() => alert(`Book session with ${m.name}`)}
                        className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium"
                        style={{
                          background: "linear-gradient(90deg,#16A34A,#0EA5A4)",
                          color: "#fff",
                        }}
                        aria-label={`Book a session with ${m.name}`}
                      >
                        Book
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div
            className="flex items-center gap-2 justify-center mt-6"
            role="tablist"
            aria-label="Jump to group"
          >
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-pressed={i === index}
                className={`w-2.5 h-2.5 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-green-300 ${
                  i === index
                    ? "bg-gradient-to-r from-green-600 to-sky-600"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <div className="flex md:hidden justify-center gap-4 mt-4">
            <button
              onClick={prev}
              aria-label="Previous"
              disabled={index <= 0}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center disabled:opacity-40 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300/30"
            >
              ◀
            </button>
            <button
              onClick={next}
              aria-label="Next"
              disabled={index >= maxIndex}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center disabled:opacity-40 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300/30"
            >
              ▶
            </button>
          </div>

          <div className="sr-only" aria-live="polite" aria-atomic="true">
            {`Showing ${Math.min(activeIndex + 1, team.length)} of ${
              team.length
            }: ${team[activeIndex]?.name}, ${team[activeIndex]?.role}`}
          </div>
        </div>
      </div>
    </section>
  );
}
