import React from "react";
import { motion } from "framer-motion";

const AboutSection = ({
  intro = `At Profiberater, we are committed to delivering consultancy services that are transparent, efficient, and reliable. 
We are a team of seasoned professionals, originally from India and now living and working across Europe for over a decade. This unique blend of cultural understanding and international experience allows us to support Indian students like no one else can.
Having started our own journeys as international students 10–15 years ago, we have first-hand knowledge of the challenges, decisions, and transitions involved. Today, we are established professionals across diverse industries and domains in Europe. Our background enables us to bridge the gap between aspiring Indian students and European academic and career systems with clarity and empathy.
Over the past two years, we have offered personalized counselling to a limited group of students—free of charge—every semester, gaining valuable insights and refining our approach. With this experience and confidence, we are now expanding our services in a more structured and professional way.
At Profiberater, we don’t just consult — we mentor, guide, and walk alongside you; navigating every step of your educational journey.
Driven by your aspirations, powered by our dedication! Team Profiberater`,
  years = "10+",
  clients = "100+",
  imageSrc = "https://rooton.ca/images/aboutUs/traveling-man.png",
}) => {
  return (
    <section className="relative isolate w-screen left-1/2 -ml-[50vw] right-1/2 -mr-[50vw] my-12 md:my-20">
      <style>{`
        .square-grid {
          background-image:
            linear-gradient(to right, rgba(2,6,23,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6,95,70,0.02) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .sr-only { position: absolute !important; width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip: rect(0,0,0,0) !important; white-space: nowrap !important; border: 0 !important; }
        @media (prefers-reduced-motion: reduce) {
          .fm-anim { transition: none !important; transform: none !important; opacity: 1 !important; }
        }
      `}</style>

      <div
        className="relative square-grid rounded-2xl mx-4 sm:mx-6 md:mx-8 lg:mx-12 px-6 md:px-12 lg:px-20 py-10 md:py-14 lg:py-16"
        style={{
          background:
            "linear-gradient(180deg,#ffffff 0%, rgba(236,254,255,0.6) 100%)",
          boxShadow: "0 10px 30px rgba(2,6,23,0.04)",
          border: "1px solid rgba(15,23,42,0.03)",
        }}
        aria-labelledby="about-heading"
      >
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            className="hidden lg:flex lg:w-[32%] justify-start"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            aria-hidden="true"
          >
            <img
              src={imageSrc}
              alt="Consultant advising a student — decorative"
              className="max-w-[320px] max-h-[415px] object-contain rounded-md shadow-sm"
              loading="lazy"
              decoding="async"
              width={320}
              height={415}
            />
          </motion.div>

          <div className="w-full lg:w-[68%]">
            <motion.p
              className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 text-justify whitespace-pre-line"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              {intro}
            </motion.p>

            <motion.ul
              className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-8 mt-4"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              <li className="w-full md:w-[48%] flex items-start gap-4 md:gap-6">
                <div>
                  <div className="text-[48px] md:text-[64px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-sky-600">
                    {years}
                  </div>
                </div>
                <div>
                  <div className="text-base md:text-lg font-semibold text-slate-800">
                    Years of experience across Europe
                  </div>
                  <div className="mt-2 text-sm text-slate-600">
                    Guiding students and professionals with clarity and empathy.
                  </div>
                </div>
              </li>

              <li className="w-full md:w-[48%] flex items-start gap-4 md:gap-6">
                <div>
                  <div className="text-[48px] md:text-[64px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-sky-600">
                    {clients}
                  </div>
                </div>
                <div>
                  <div className="text-base md:text-lg font-semibold text-slate-800">
                    Students & professionals supported
                  </div>
                  <div className="mt-2 text-sm text-slate-600">
                    Real results — personalized guidance for study, work, and
                    visas.
                  </div>
                </div>
              </li>
            </motion.ul>

            <motion.div
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
            >
              <a
                href="/services"
                className="inline-flex items-center gap-3 rounded-md px-4 py-2 font-semibold shadow-sm focus:outline-none focus:ring-4 focus:ring-green-300"
                style={{
                  background: "linear-gradient(90deg,#16A34A,#0EA5A4)",
                  color: "#fff",
                  minWidth: 160,
                }}
                aria-label="Explore our services"
              >
                Explore Services
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                  <path
                    d="M5 12h13M13 5l7 7-7 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="/contact"
                className="text-green-600 font-medium underline"
                aria-label="Contact Profiberater"
              >
                Contact us
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
