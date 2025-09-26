import React, { useEffect, useState, useRef, useCallback } from "react";

/**
 * TestimonialsSection — theme-matched (green + sky), full-bleed background,
 * accessible carousel with autoplay, pause-on-interaction, keyboard, swipe,
 * and prefers-reduced-motion support.
 */

const DEFAULT_TESTIMONIALS = [
  {
    id: 1,
    text: "Profiberater guided me through my German university application and visa process with clarity and care — my visa was approved faster than I expected. Deeply grateful!",
    name: "Aman Verma",
    role: "M.Sc. Computational Science — TU Munich",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    text: "Their APS and language support was extremely professional — I found the right university match and received help securing a scholarship.",
    name: "Sakshi Gupta",
    role: "B.Sc → M.Sc. — University of Freiburg",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    id: 3,
    text: "After multiple Germany visa refusals, Profiberater reworked my profile and strategy. They kept expectations realistic and finally helped me secure approval.",
    name: "Rohit Singh",
    role: "MS Applicant — RWTH Aachen (accepted)",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    rating: 5,
  },
  {
    id: 4,
    text: "Transparent fees, consistent updates, and a dedicated counsellor made the entire process smooth. Highly recommended for anyone applying to Germany.",
    name: "Neha Joshi",
    role: "Preparing for Studienkolleg / Language Courses",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    rating: 5,
  },
];

export default function TestimonialsSection({
  testimonials = DEFAULT_TESTIMONIALS,
  autoplay = true,
  interval = 6000,
}) {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const touchStartX = useRef(null);
  const autoplayTimer = useRef(null);

  const calcVisibleCount = useCallback(() => {
    if (typeof window === "undefined") return 1;
    if (window.matchMedia("(min-width: 1024px)").matches) return 3;
    if (window.matchMedia("(min-width: 768px)").matches) return 2;
    return 1;
  }, []);

  useEffect(() => {
    setVisibleCount(calcVisibleCount());
    if (typeof window !== "undefined" && window.matchMedia) {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      const onChange = () => setPrefersReducedMotion(mq.matches);
      setPrefersReducedMotion(mq.matches);
      mq.addEventListener?.("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }
  }, [calcVisibleCount]);

  useEffect(() => {
    const onResize = () => {
      const vc = calcVisibleCount();
      setVisibleCount((prev) => {
        if (prev === vc) return prev;
        setIndex((prevIndex) => {
          const maxIndex = Math.max(0, testimonials.length - vc);
          return Math.min(prevIndex, maxIndex);
        });
        return vc;
      });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [calcVisibleCount, testimonials.length]);

  // autoplay
  useEffect(() => {
    if (!autoplay || prefersReducedMotion) return;
    if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    autoplayTimer.current = setInterval(() => {
      if (isPaused) return;
      setIndex((prev) => {
        const maxIndex = Math.max(0, testimonials.length - visibleCount);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, interval);

    return () => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
        autoplayTimer.current = null;
      }
    };
  }, [
    autoplay,
    interval,
    isPaused,
    visibleCount,
    testimonials.length,
    prefersReducedMotion,
  ]);

  // ensure refs length
  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, testimonials.length);
  }, [testimonials.length]);

  const next = useCallback(() => {
    const maxIndex = Math.max(0, testimonials.length - visibleCount);
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 2500);
  }, [testimonials.length, visibleCount]);

  const prev = useCallback(() => {
    const maxIndex = Math.max(0, testimonials.length - visibleCount);
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 2500);
  }, [testimonials.length, visibleCount]);

  const goTo = (i) => {
    const maxIndex = Math.max(0, testimonials.length - visibleCount);
    const clamped = Math.max(0, Math.min(i, maxIndex));
    setIndex(clamped);
    const el = itemRefs.current[clamped];
    if (el && typeof el.focus === "function") el.focus({ preventScroll: true });
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 2500);
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleFocusIn = () => setIsPaused(true);
  const handleFocusOut = (e) => {
    if (!containerRef.current?.contains(e.relatedTarget)) setIsPaused(false);
  };

  // swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches?.[0]?.clientX ?? null;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches?.[0]?.clientX ?? null;
    if (endX == null) return;
    const dx = endX - touchStartX.current;
    const threshold = 40;
    if (dx > threshold) prev();
    else if (dx < -threshold) next();
    touchStartX.current = null;
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // layout math for translate
  const N = testimonials.length;
  // width percentage per slide area (we render N items but visibleCount determines layout)
  // compute translate percent to shift left by index * (100 / N)
  const translatePercent = N > 0 ? -(index * (100 / N)) : 0;

  const totalSlides = Math.max(1, testimonials.length - visibleCount + 1);
  const srLive = `Showing ${Math.min(
    index + 1,
    totalSlides
  )} of ${totalSlides}`;

  return (
    // full-bleed wrapper to match other components' theme and avoid white bands
    <div className="relative isolate w-screen left-1/2 -ml-[50vw] right-1/2 -mr-[50vw]">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-green-50 py-12 md:py-16">
        <div className="px-6 md:px-12 lg:px-20  mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-6">
            <div>
              <span className="block text-green-600 text-sm font-semibold tracking-widest md:text-base">
                TESTIMONIALS
              </span>
              <h2 className="text-slate-900 font-extrabold text-2xl md:text-4xl leading-[1.12] max-w-3xl">
                What our students say about studying in Germany with
                Profiberater
              </h2>
            </div>

            <div className="flex items-center gap-3">
              {/* Desktop controls */}
              <div className="hidden md:flex gap-3 items-center">
                <button
                  aria-label="Previous testimonial"
                  onClick={prev}
                  className="w-11 h-11 inline-flex items-center justify-center bg-white border border-gray-200 shadow-sm rounded focus:outline-none focus:ring-4 focus:ring-green-300/40"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                  >
                    <path
                      d="M1.257 18 10 9.008 1.257 0 0 1.293l7.485 7.715L0 16.707z"
                      fill="#0f172a"
                    />
                  </svg>
                </button>

                <button
                  aria-label="Next testimonial"
                  onClick={next}
                  className="w-11 h-11 inline-flex items-center justify-center bg-white border border-gray-200 shadow-sm rounded focus:outline-none focus:ring-4 focus:ring-green-300/40"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                  >
                    <path
                      d="M1.257 18 10 9.008 1.257 0 0 1.293l7.485 7.715L0 16.707z"
                      fill="#0f172a"
                    />
                  </svg>
                </button>
              </div>

              {/* small pause/resume control (visible) */}
              <button
                onClick={() => {
                  setIsPaused((p) => !p);
                }}
                aria-pressed={isPaused}
                className="inline-flex items-center gap-2 bg-white px-3 py-2 rounded-md shadow border border-gray-100 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-green-300/40"
              >
                {isPaused ? "Resume" : "Pause"}
              </button>
            </div>
          </div>

          {/* carousel area */}
          <div
            ref={containerRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleFocusIn}
            onBlur={handleFocusOut}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  width: `${(N / Math.max(1, visibleCount)) * 100}%`,
                  transform: `translateX(${translatePercent}%)`,
                }}
                aria-live="polite"
                aria-roledescription="carousel"
                aria-label="Student testimonials carousel"
              >
                {testimonials.map((t, i) => (
                  <div
                    key={t.id ?? i}
                    className="p-4 md:p-6 flex-shrink-0"
                    style={{
                      width: `${100 / Math.max(1, N)}%`,
                    }}
                  >
                    <article
                      ref={(el) => (itemRefs.current[i] = el)}
                      role="group"
                      tabIndex={0}
                      aria-label={`Testimonial by ${t.name}`}
                      className="h-full bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between focus:outline-none focus:ring-4 focus:ring-green-300/40"
                    >
                      <div>
                        <blockquote className="text-sm md:text-base text-slate-700 leading-relaxed">
                          “{t.text}”
                        </blockquote>
                      </div>

                      <div className="mt-5 flex items-center gap-4">
                        <img
                          src={t.avatar}
                          alt={`${t.name} avatar`}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="text-sm font-bold text-slate-900">
                            {t.name}
                          </div>
                          <div className="text-xs text-slate-500 opacity-90">
                            {t.role}
                          </div>

                          <div className="flex items-center mt-1" aria-hidden>
                            {Array.from({ length: 5 }).map((_, si) => (
                              <svg
                                key={si}
                                width="14"
                                height="14"
                                viewBox="0 0 20 20"
                                fill={si < t.rating ? "#FFCA28" : "none"}
                                stroke="#FFCA28"
                                className="mr-0.5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M10 1.5l2.6 5.3 5.8.5-4.2 3.7 1.3 5.6L10 14.9 4.5 17.6l1.3-5.6L1.6 8.4l5.8-.5L10 1.5z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <div aria-live="polite" className="sr-only" role="status">
              {srLive}
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({
                length: Math.max(1, testimonials.length - visibleCount + 1),
              }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300/40 ${
                    index === i
                      ? "bg-gradient-to-r from-green-600 to-sky-600"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Mobile controls */}
            <div className="flex md:hidden justify-center gap-4 mt-4">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 inline-flex items-center justify-center bg-white border rounded focus:outline-none focus:ring-4 focus:ring-green-300/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                >
                  <path
                    d="M1.257 18 10 9.008 1.257 0 0 1.293l7.485 7.715L0 16.707z"
                    fill="#0f172a"
                  />
                </svg>
              </button>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 inline-flex items-center justify-center bg-white border rounded focus:outline-none focus:ring-4 focus:ring-green-300/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                >
                  <path
                    d="M1.257 18 10 9.008 1.257 0 0 1.293l7.485 7.715L0 16.707z"
                    fill="#0f172a"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <style>{`
          .sr-only { position: absolute !important; width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip: rect(0,0,0,0) !important; white-space: nowrap !important; border: 0 !important; }
          @media (prefers-reduced-motion: reduce) {
            .transition-transform { transition: none !important; }
          }
        `}</style>
      </section>
    </div>
  );
}
