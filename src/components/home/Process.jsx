import React, { useEffect, useRef, useState, useCallback } from "react";

/**
 * Process (refined)
 * - steps: array of { id, title, desc }
 * - desktop: vertical timeline with markers and a snapping dot
 * - mobile: stacked cards
 */
export default function Process({
  steps = null,
  title = "Simple, smooth and transparent !",
  subtitle = "OUR PROCESS",
}) {
  const defaultSteps = [
    {
      id: 1,
      title: "Eligibility Assessment",
      desc: "We evaluate your qualifications, work experience, and goals to determine the best pathway for your immigration.",
    },
    {
      id: 2,
      title: "Counselling",
      desc: "Our expert counselors will guide you through the process, helping you make informed decisions at every step.",
    },
    {
      id: 3,
      title: "Legal Retainer Agreement",
      desc: "We provide a clear Retainer Agreement that outlines our services, costs, and expectations, ensuring complete transparency.",
    },
    {
      id: 4,
      title: "Payment",
      desc: "Access our services with payment plans that fit your budget.",
    },
    {
      id: 5,
      title: "Client Onboarding",
      desc: "Your personal account manager will ensure a smooth onboarding process, meticulously handling all documentation.",
    },
    {
      id: 6,
      title: "Application Processing",
      desc: "Our expert counselors will guide you through the process, ensuring all required documents and forms are prepared correctly.",
    },
    {
      id: 7,
      title: "Final Verification",
      desc: "Your application will be reviewed by a Regulated Consultant to ensure accuracy and compliance with regulations.",
    },
    {
      id: 8,
      title: "Application Submission",
      desc: "Once finally reviewed, we submit your application to the appropriate authorities on your behalf.",
    },
    {
      id: 9,
      title: "Status Updates",
      desc: "Stay informed with regular updates on your application's progress.",
    },
  ];

  const items = Array.isArray(steps) && steps.length > 0 ? steps : defaultSteps;

  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const markerRefs = useRef([]);
  const dotRef = useRef(null);
  const rafRef = useRef(null);

  const [dotTop, setDotTop] = useState(0);
  const [dotVisible, setDotVisible] = useState(false);
  const [snappedIndex, setSnappedIndex] = useState(0);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Compute dot position snapping to the nearest marker index
  const updateDot = useCallback(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    const dot = dotRef.current;
    if (!section || !line || !dot) return;

    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const sectionRect = section.getBoundingClientRect();

    // show only on desktop and when section intersects viewport
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const sectionInView = !(
      sectionRect.bottom < 0 || sectionRect.top > viewportHeight
    );
    if (!isDesktop || !sectionInView || prefersReducedMotion) {
      setDotVisible(false);
      return;
    }
    setDotVisible(true);

    // center-of-viewport anchor for predictable behaviour
    const sectionTopAbs = sectionRect.top + window.scrollY;
    const anchorY = window.scrollY + viewportHeight * 0.5;
    let progress = (anchorY - sectionTopAbs) / Math.max(1, sectionRect.height);
    progress = Math.max(0, Math.min(1, progress));

    // pick nearest marker index (snap behavior)
    const idx = Math.round(progress * (items.length - 1));
    const marker = markerRefs.current[idx];
    if (!marker) return;

    const markerRect = marker.getBoundingClientRect();
    const lineParentTop = line.offsetParent
      ? line.offsetParent.getBoundingClientRect().top + window.scrollY
      : 0;

    // desired translateY aligns center of dot with center of marker
    const desired =
      markerRect.top +
      window.scrollY -
      lineParentTop -
      (dot.getBoundingClientRect().height / 2 || 12);

    setSnappedIndex(idx);
    setDotTop(desired);
  }, [items.length, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDotVisible(false);
      return () => {};
    }

    const onScrollResize = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        updateDot();
      });
    };

    // initial
    onScrollResize();

    window.addEventListener("scroll", onScrollResize, { passive: true });
    window.addEventListener("resize", onScrollResize);

    return () => {
      window.removeEventListener("scroll", onScrollResize);
      window.removeEventListener("resize", onScrollResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateDot, prefersReducedMotion]);

  // ensure markerRef array length
  useEffect(() => {
    markerRefs.current = markerRefs.current.slice(0, items.length);
  }, [items.length]);

  return (
    // full-bleed wrapper consistent with other sections — prevents white bands
    <div className="relative isolate w-screen left-1/2 -ml-[50vw] right-1/2 -mr-[50vw]">
      <section
        ref={sectionRef}
        aria-labelledby="process-heading"
        className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-green-50 py-12 md:py-20"
      >
        {/* subtle background accents */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 8% 12%, rgba(14,165,132,0.02), transparent 18%), radial-gradient(circle at 90% 84%, rgba(6,95,70,0.015), transparent 24%)",
          }}
        />

        <div className="px-6 md:px-12 lg:px-20">
          <p className="text-sm md:text-base tracking-widest text-emerald-700 font-semibold">
            {subtitle}
          </p>

          <h2
            id="process-heading"
            className="mt-3 text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 max-w-3xl leading-tight"
          >
            {title}
          </h2>

          <div className="relative z-10 mt-12">
            {/* Desktop timeline */}
            <div className="hidden md:block">
              <div className="flex">
                {/* left: step number + title */}
                <div className="w-[37.5%] pr-8">
                  {items.map((it, idx) => (
                    <div
                      key={it.id ?? idx}
                      className="flex items-center py-6"
                      aria-hidden
                    >
                      <span className="min-w-[36px] flex-shrink-0 text-[28px] font-light text-emerald-700">
                        {it.id}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">
                          {it.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>

                {/* right: vertical line, markers and descriptions */}
                <div className="relative flex-1 pl-12">
                  {/* thin gradient line */}
                  <div
                    ref={lineRef}
                    className="absolute left-0 top-0 w-[4px] h-full rounded-full"
                    style={{
                      background: "linear-gradient(to bottom,#16A34A,#0EA5A4)",
                    }}
                    aria-hidden
                  />

                  {/* moving dot (snaps to marker centers) */}
                  <div
                    ref={dotRef}
                    className="hidden md:block absolute transition-all duration-300 ease-linear"
                    aria-hidden
                    style={{
                      left: "-12px",
                      width: 24,
                      height: 24,
                      transform: `translateY(${dotTop}px)`,
                      opacity: dotVisible ? 1 : 0,
                      pointerEvents: "none",
                    }}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-600 to-sky-600 shadow-xl border-2 border-white" />
                  </div>

                  {/* descriptions with markers */}
                  <div className="pl-12">
                    {items.map((it, idx) => (
                      <div key={it.id ?? idx} className="py-6 relative">
                        {/* marker centered on the line */}
                        <span
                          ref={(el) => (markerRefs.current[idx] = el)}
                          className={`absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${
                            snappedIndex === idx ? "scale-110" : ""
                          }`}
                          style={{
                            background:
                              "linear-gradient(180deg,#16A34A,#0EA5A4)",
                            boxShadow: "0 6px 14px rgba(2,6,23,0.06)",
                            transition: "transform 220ms ease",
                          }}
                          aria-hidden
                        />

                        <div className="pl-8">
                          <p className="opacity-90 text-lg font-medium leading-7 text-slate-600">
                            {it.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile stacked view */}
            <div className="block md:hidden mt-8 space-y-4">
              {items.map((it) => (
                <article
                  key={it.id}
                  className="p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="flex items-center mb-2">
                    <span className="text-2xl text-emerald-700 mr-3 font-light">
                      {it.id}
                    </span>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {it.title}
                    </h3>
                  </div>
                  <p className="text-[13px] font-medium leading-[1.62] text-slate-600 opacity-90">
                    {it.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* live status for screen readers */}
          <div className="sr-only" aria-live="polite">{`Step ${
            snappedIndex + 1
          } of ${items.length}`}</div>
        </div>

        <style>{`
          .sr-only { position: absolute !important; width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip: rect(0,0,0,0) !important; white-space: nowrap !important; border: 0 !important; }
          @media (prefers-reduced-motion: reduce) {
            .transition-all { transition: none !important; }
          }
        `}</style>
      </section>
    </div>
  );
}
