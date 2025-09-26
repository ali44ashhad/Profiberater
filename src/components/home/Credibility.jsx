import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const logos = [
  {
    id: 1,
    name: "DAAD",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/DAAD_logo_schriftzug.svg/1200px-DAAD_logo_schriftzug.svg.png",
    alt: "DAAD",
    description:
      "Guidance aligned with German Academic Exchange Service standards",
  },
  {
    id: 2,
    name: "APS India",
    img: "https://www.aps-india.de/sites/aps/files/logo_aps_3.png",
    alt: "APS Certificate Assistance",
    description: "Support for APS Certificate process",
  },
  {
    id: 3,
    name: "Goethe Institut",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Goethe-Institut_logo.svg/1200px-Goethe-Institut_logo.svg.png",
    alt: "Goethe Institut",
    description: "Language course certification guidance",
  },
  {
    id: 4,
    name: "German Universities",
    img: "https://www.study-in-germany.de/fileadmin/_processed_/4/8/csm_Logo_Studieren_in_Deutschland_engl_RGB_5545d0c2c6.png",
    alt: "German Universities Network",
    description: "Connections with 50+ German Universities",
  },
];

const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.95,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
    scale: 0.95,
  }),
};

const CredibilitySection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);
  const isHovered = useRef(false);

  const len = logos.length;

  const toNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % len);
  };

  const toPrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + len) % len);
  };

  // Auto-play
  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!isHovered.current) toNext();
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-green-50 py-20 lg:py-28">
      <div className="relative mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="w-full max-w-2xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Guidance for Germany <br />
              <span className="bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent">
                Education Pathways
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We provide expert guidance for students aspiring to study in
              Germany, simplifying processes and offering reliable support at
              every step.
            </p>

            {/* Key Points */}
            <div className="mt-8 space-y-4">
              {[
                "Experienced Education Consultants",
                "Connections with German Universities",
                "Support for APS Certificate Process",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.45 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-sm text-gray-600">German Universities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-sm text-gray-600">
                  Visa Guidance Success
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Carousel */}
          <div
            onMouseEnter={() => (isHovered.current = true)}
            onMouseLeave={() => (isHovered.current = false)}
            className="w-full relative flex items-center justify-center"
          >
            <button
              onClick={toPrev}
              className="absolute left-0 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-green-600 hover:bg-green-50 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className="w-full max-w-md h-80 overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={logos[index].id}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.25}
                  className="w-full h-full flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative"
                >
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {logos[index].name}
                  </div>
                  <div className="flex-1 flex items-center justify-center p-4">
                    <img
                      src={logos[index].img}
                      alt={logos[index].alt}
                      className="max-h-32 object-contain mx-auto"
                    />
                  </div>
                  <p className="text-center text-gray-700 font-medium mt-4 leading-relaxed">
                    {logos[index].description}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-sky-600 rounded-b-2xl"></div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={toNext}
              className="absolute right-0 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-green-600 hover:bg-green-50 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
              {logos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    i === index
                      ? "bg-green-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Recognition Section */}
        <div className="mt-20 pt-12 border-t border-gray-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Trusted Guidance for German Studies
          </h3>
          <p className="text-gray-600 mb-8">
            We support students with reliable references and guidance
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {logos.map((logo) => (
              <motion.div
                key={logo.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition flex items-center justify-center"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={logo.img}
                  alt={logo.alt}
                  className="h-12 object-contain mx-auto grayscale hover:grayscale-0 transition-all"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
