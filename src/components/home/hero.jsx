import React, { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import banner from "../../assets/banner.mp4";

function useAnimatedCounter({ to, duration = 1400, start = 1, deps = [] }) {
  const [value, setValue] = useState(start);
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      setValue(to);
      return;
    }

    setValue(start);
    startRef.current = null;

    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const t = Math.min(1, elapsed / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(start + (to - start) * eased);
      setValue(current);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        // ensure exact final
        setValue(to);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps); // caller controls when to restart by changing deps

  return value;
}

export default function Hero({
  title = (
    <>
      <span className="bg-gradient-to-r from-green-500 to-sky-500 bg-clip-text text-transparent">
        Study in Germany
      </span>
      <br />
      Your pathway to world-class education and
    </>
  ),
  subtitle = "Tuition-free universities, high-quality education, and excellent career opportunities in Europe's strongest economy",
  ctaText = "Get Free Germany Consultation",
  videoSrc = banner,
  posterSrc = "",
  germanCities = ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne"],
  onCTAClick = null,
}) {
  const navigate = useNavigate();

  function handleCTA() {
    if (typeof onCTAClick === "function") onCTAClick();
    else navigate("#");
  }

  // services rotating (clickable)
  const SERVICES = [
    { label: "Forex Card & Remittances", route: "/services/forex-remittance" },
    { label: "Accommodation", route: "/services/accommodation" },
    { label: "Medical Insurance", route: "/services/medical-insurance" },
    { label: "Education Loan", route: "/services/education-loan" },
  ];

  const [svcIndex, setSvcIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setSvcIndex((s) => (s + 1) % SERVICES.length),
      2800
    );
    return () => clearInterval(t);
  }, []);

  // Animated counters: we start counting when component mounts.
  // Use hook with deps = [] so it runs once on mount.
  const universities = useAnimatedCounter({
    to: 400,
    duration: 2200,
    start: 1,
    deps: [],
  });
  const postStudyMonths = useAnimatedCounter({
    to: 18,
    duration: 1600,
    start: 1,
    deps: [],
  });

  // other stats remain static
  const stats = [
    {
      value: `${universities >= 400 ? "400+" : universities}`,
      label: "Tuition-Free Universities",
      icon: "🎓",
    },
    { value: "95%", label: "Visa Success Rate", icon: "✅" },
    { value: "€1200", label: "Monthly Living Cost", icon: "💶" },
    {
      value: `${postStudyMonths} ${postStudyMonths === 1 ? "Month" : "Months"}`,
      label: "Post-Study Work Visa",
      icon: "🛠️",
    },
  ];

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background Video */}
      <video
        playsInline
        muted
        autoPlay
        loop
        preload="metadata"
        poster={posterSrc || undefined}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />

      <div className="relative z-20 mx-auto px-6 md:px-12 lg:px-20 flex items-center min-h-[80vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left column */}
          <div className="text-white max-w-2xl">
            <h1 id="hero-title" className="space-y-4">
              {/* Line 1 */}
              <span
                className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold
               bg-gradient-to-r from-green-500 to-sky-500 bg-clip-text text-transparent
               leading-[1.1] lg:leading-[1.15] overflow-visible"
              >
                Study in Germany
              </span>

              {/* Line 2: subtitle + rotating service */}
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
                Your pathway to world-class education and{" "}
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={svcIndex}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.36 }}
                    className="inline-block text-sky-300 font-medium"
                  >
                    <Link
                      to={SERVICES[svcIndex].route}
                      className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    >
                      {SERVICES[svcIndex].label}
                    </Link>
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-200 leading-relaxed max-w-2xl">
              {subtitle} We also support you with essential student services.
            </p>

            {/* Cities */}
            <div className="mt-6 flex flex-wrap gap-3">
              {germanCities.map((city, index) => (
                <span
                  key={index}
                  className="bg-white/20 text-white px-3 py-1 rounded-full text-sm border border-white/30 inline-flex items-center gap-2"
                >
                  <span aria-hidden="true">📍</span>
                  <span>{city}</span>
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleCTA}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-sky-500 text-white px-6 py-3 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-sky-600 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
                aria-label={ctaText}
              >
                <span>{ctaText}</span>
                <svg
                  className="w-5 h-5 transform transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-5 py-3 rounded-xl font-medium hover:bg-white/5 transition"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* Right column - stats (animated numbers for two items) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-2xl">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                role="group"
                aria-label={`${stat.label}: ${stat.value}`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl" aria-hidden="true">
                    {stat.icon}
                  </span>
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-gray-200 text-base">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-sky-300"
        aria-hidden="true"
      >
        <div className="w-0.5 h-10 animate-bounce bg-gradient-to-b from-sky-400 to-green-400" />
        <span className="text-sm">Explore German Opportunities</span>
      </div>

      {/* Inline styles (kept minimal) */}
      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .animate-float, .animate-bounce { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
}
