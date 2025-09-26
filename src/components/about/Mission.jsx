import React from "react";
import { motion } from "framer-motion";

/**
 * MissionPage.jsx
 *
 * Theme-matched: green/sky accent, Poppins headings + Inter body.
 *
 * Layout:
 *  - Mission: left = text, right = illustration (default SVG), stacked on mobile
 *  - Vision: right = text, left = illustration (mirrored)
 *
 * Props (optional):
 *  - missionIllustration / visionIllustration: react node or image src string
 *
 * Note: respects prefers-reduced-motion.
 */

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const IllustrationMission = ({ className = "" }) => (
  // stylized paper-plane / guidance SVG with gentle float
  <svg
    className={className}
    width="320"
    height="220"
    viewBox="0 0 320 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
  >
    <defs>
      <linearGradient id="g1" x1="0" x2="1">
        <stop offset="0%" stopColor="#0ea5a4" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <linearGradient id="g2" x1="0" x2="1">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>

    {/* subtle background rounded card */}
    <rect
      x="0"
      y="8"
      width="320"
      height="200"
      rx="24"
      fill="url(#g1)"
      opacity="0.08"
    />
    {/* stylized airplane */}
    <g transform="translate(20,20)">
      <path
        d="M256 32c0 0-128 56-152 72-6 4-4 12 3 14 0 0 44 8 90-6 46-14 65-44 59-80z"
        fill="url(#g2)"
        opacity="0.95"
      />
      <path
        d="M0 64c28 6 92 14 156-10 0 0-88 46-148 50l-8-40z"
        fill="#ffffff"
        opacity="0.06"
      />
      <path
        d="M68 94c44-6 104-34 140-52"
        stroke="#ffffff"
        strokeWidth="2"
        strokeOpacity="0.35"
        strokeLinecap="round"
      />
      <circle cx="22" cy="92" r="6" fill="#06b6d4" />
      {/* directional arrow */}
      <path
        d="M28 80 L200 12"
        stroke="#0f766e"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const IllustrationVision = ({ className = "" }) => (
  // stylized rising-book / mortarboard-like mark to evoke study & growth
  <svg
    className={className}
    width="320"
    height="220"
    viewBox="0 0 320 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
  >
    <defs>
      <linearGradient id="v1" x1="0" x2="1">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>

    <rect
      x="0"
      y="8"
      width="320"
      height="200"
      rx="24"
      fill="url(#v1)"
      opacity="0.06"
    />

    <g transform="translate(28,36)">
      <path
        d="M8 84c36-18 96-46 136-34 40 12 64 44 64 44s-28 14-64 16c-40 2-100-14-136-26z"
        fill="#ffffff"
        opacity="0.06"
      />
      <path
        d="M0 64l144-64 144 64-144 64L0 64z"
        fill="url(#v1)"
        opacity="0.98"
      />
      <path
        d="M144 0v120"
        stroke="#0f766e"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="144" cy="16" r="6" fill="#0f766e" />
    </g>
  </svg>
);

export default function Mission({
  missionIllustration = null,
  visionIllustration = null,
}) {
  return (
    <main
      className="w-full bg-gradient-to-br from-white via-sky-50 to-green-50 min-h-screen py-12 px-4 md:px-8 lg:px-20"
      style={{
        fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto",
      }}
    >
      <style>{`
        .grid-bg {
          background-image:
            linear-gradient(to right, rgba(6,95,70,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(14,165,164,0.015) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        /* gentle float */
        @keyframes float-slow { 0% { transform: translateY(0px);} 50% { transform: translateY(-8px);} 100% { transform: translateY(0px);} }
        .float-slow { animation: float-slow 6s ease-in-out infinite; transform-origin: center; }

        @media (prefers-reduced-motion: reduce) {
          .float-slow { animation: none !important; }
        }
      `}</style>

      <div className="  mx-auto grid gap-12">
        {/* Page header */}
        <header className="mb-6">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Mission &amp; Vision
          </h1>
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-3xl">
            We guide students toward meaningful careers and successful study
            experiences across Europe — practical, ethical, and personalised.
          </p>
        </header>

        {/* Mission row: text left, illustration right */}
        <section
          aria-labelledby="mission-heading"
          className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6"
        >
          <div className="lg:col-span-7 order-1 lg:order-1">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2
                id="mission-heading"
                className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Mission
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                At <strong>Profiberater</strong>, our mission is to guide and
                support you in pursuing your passion through personalized
                counselling and our deep experience in the education industry.
                We are committed to empowering your academic and career journey
                with expert advice and genuine care.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-5 order-2 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full max-w-[420px] rounded-xl"
              aria-hidden="true"
            >
              <div className="grid-bg p-4 rounded-xl">
                {missionIllustration ? (
                  // allow passing either an image src or a react node
                  typeof missionIllustration === "string" ? (
                    <img
                      src={missionIllustration}
                      alt=""
                      className="w-full h-auto rounded-md object-contain"
                    />
                  ) : (
                    missionIllustration
                  )
                ) : (
                  <div className="float-slow">
                    <IllustrationMission />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision row: illustration left, text right (mirrored) */}
        <section
          aria-labelledby="vision-heading"
          className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6"
        >
          <div className="lg:col-span-5 order-1 lg:order-1 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, x: -40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full max-w-[420px] rounded-xl"
              aria-hidden="true"
            >
              <div className="grid-bg p-4 rounded-xl">
                {visionIllustration ? (
                  typeof visionIllustration === "string" ? (
                    <img
                      src={visionIllustration}
                      alt=""
                      className="w-full h-auto rounded-md object-contain"
                    />
                  ) : (
                    visionIllustration
                  )
                ) : (
                  <div className="float-slow">
                    <IllustrationVision />
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 order-2 lg:order-2">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2
                id="vision-heading"
                className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Vision
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                At <strong>Profiberater</strong>, we are committed to guiding
                students through one of the most pivotal phases of their
                lives—choosing the right career path. We believe no student
                should ever have to settle for less than what they truly aspire
                to achieve. Our vision is to empower every student to pursue
                their passions with confidence, equipping them with the support
                and resources they need to realize their full potential and soar
                toward a future of success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* small contact / online note */}
        <footer className="mt-6 text-sm text-slate-600">
          <p>
            All our services are delivered online. We communicate closely with
            applicants via Email, TEAMS/Zoom and WhatsApp.
          </p>
        </footer>
      </div>
    </main>
  );
}
