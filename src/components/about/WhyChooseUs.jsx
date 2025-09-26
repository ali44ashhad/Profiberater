import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const topics = [
  {
    id: 1,
    title: "Expert Counsellors with Industry Insight",
    desc: "Seasoned professionals with experience in academics and industry provide practical, career-focused guidance.",
  },
  {
    id: 2,
    title: "Personalized Attention",
    desc: "We limit intake each semester so every applicant receives dedicated time and a strategy tailored to them.",
  },
  {
    id: 3,
    title: "Support Across All Academic Levels",
    desc: "Assistance for Undergraduate, Master's, MBA and PhD applicants — we adapt strategy to each level.",
  },
  {
    id: 4,
    title: "Wide Range of Study Fields",
    desc: "We help students across STEM, business, arts and social sciences find the best-fit programs and universities.",
  },
  {
    id: 5,
    title: "Specialization in European Admissions",
    desc: "Focused knowledge on regional requirements, culture and opportunities across top European universities.",
  },
  {
    id: 6,
    title: "Opportunities for Tuition-Free Education",
    desc: "We identify tuition-free or low-cost programs and guide applications to increase affordable education chances.",
  },
];

const cardEntrance = {
  hidden: { opacity: 0, y: 10 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.45 },
  }),
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

function InteractiveCard({ item, index, prefersReducedMotion }) {
  const elRef = useRef(null);
  const rafRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);

  const maxTilt = 10;
  const tiltStrength = 0.5;

  const handleMove = useCallback((e) => {
    const el = elRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX);
    const clientY = e.clientY ?? (e.touches && e.touches[0]?.clientY);
    if (clientX == null || clientY == null) return;

    const nx = (clientX - rect.left) / rect.width;
    const ny = (clientY - rect.top) / rect.height;
    const dx = nx - 0.5;
    const dy = ny - 0.5;

    pointerRef.current = { x: dx, y: dy };

    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(update);
    }
  }, []);

  const update = () => {
    const { x: dx, y: dy } = pointerRef.current;

    const ry = clamp(-dx * maxTilt * tiltStrength, -maxTilt, maxTilt);
    const rx = clamp(dy * maxTilt * tiltStrength, -maxTilt, maxTilt);
    const tz = 6 + Math.abs(dx) * 6 + Math.abs(dy) * 6;

    const el = elRef.current;
    if (el) {
      el.style.transform = `perspective(1000px) translateZ(${tz}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      el.style.boxShadow = `${-ry * 0.6}px ${
        Math.abs(rx) * 1.2 + 6
      }px ${Math.max(
        14,
        Math.abs(rx) * 2 + Math.abs(ry) * 2 + 12
      )}px rgba(6,95,70,0.12)`;
    }

    rafRef.current = null;
  };

  const handleEnter = () => setIsHover(true);
  const handleLeave = () => {
    setIsHover(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const el = elRef.current;
      if (el) {
        el.style.transform = `perspective(1000px) translateZ(0px) rotateX(0deg) rotateY(0deg)`;
        el.style.boxShadow = `0 10px 30px rgba(6,95,70,0.08)`;
      }
      rafRef.current = null;
    });
  };

  useEffect(() => {
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, []);

  const pointerProps = prefersReducedMotion
    ? {}
    : {
        onMouseMove: handleMove,
        onMouseEnter: handleEnter,
        onMouseLeave: handleLeave,
        onTouchStart: (e) => {
          handleEnter();
          handleMove(e);
        },
        onTouchMove: handleMove,
        onTouchEnd: handleLeave,
      };

  return (
    <motion.article
      className="bg-white rounded-2xl p-6 flex flex-col h-full card-3d"
      ref={elRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      custom={index}
      variants={cardEntrance}
      tabIndex={0}
      role="article"
      aria-labelledby={`why-title-${item.id}`}
      style={{
        border: "1px solid rgba(15,118,110,0.04)",
        transformStyle: "preserve-3d",
        boxShadow: "0 10px 30px rgba(6,95,70,0.08)",
        transition: prefersReducedMotion
          ? "none"
          : "box-shadow 260ms ease, transform 260ms ease",
      }}
      {...pointerProps}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
          <FaCheck className="w-5 h-5 text-green-600" aria-hidden />
        </div>

        <div className="flex-1">
          <h3
            id={`why-title-${item.id}`}
            className="text-lg font-semibold text-slate-900"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {item.title}
          </h3>

          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function clamp(v, a, b) {
  return Math.max(a, Math.min(b, v));
}

export default function WhyChooseUs3D({ className = "" }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      aria-labelledby="why-choose-heading"
      className={`relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-green-50 py-16 ${className}`}
      style={{
        fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto",
      }}
    >
      <style>{`
        @keyframes floatCard {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        .card-3d.idle-float {
          animation: floatCard 6s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .card-3d.idle-float { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div className="  mx-auto px-6 md:px-12 lg:px-20">
        <header className="mb-8 text-center md:text-left">
          <h2
            id="why-choose-heading"
            className="text-3xl md:text-4xl font-extrabold text-slate-900"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Why Choose Us?
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl">
            End-to-end support for European admissions — practical, personal,
            and fully online.
          </p>
        </header>

        <div className="rounded-2xl p-4" aria-label="Why choose us topics">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t, i) => (
              <div
                key={t.id}
                className={`${
                  prefersReducedMotion ? "" : "card-3d idle-float"
                }`}
              >
                <InteractiveCard
                  item={t}
                  index={i}
                  prefersReducedMotion={prefersReducedMotion}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-sm text-slate-600 max-w-3xl">
          <p>
            <strong>All our services are conducted entirely online.</strong> No
            in-person visits are required — we stay in close communication via
            Email, TEAMS/Zoom and WhatsApp throughout your application and
            onboarding.
          </p>
        </div>
      </div>
    </section>
  );
}
