import React from "react";
import { motion } from "framer-motion";
import teamVideo from "../../assets/team.mp4";

const AboutBanner = ({
  title = "About Profiberater",
  subtitle = `Profiberater guides Indian students across Europe with clarity, expertise, and dedication, mentoring every step of their educational journey abroad.`,
}) => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden ">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={teamVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col justify-center text-left text-white">
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
          style={{
            fontFamily: "Poppins, sans-serif",
          }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-green-600 to-sky-500 bg-clip-text text-transparent">
            {title}
          </span>
        </motion.h2>

        <motion.p
          className="text-base md:text-lg lg:text-xl max-w-2xl text-slate-100 leading-relaxed"
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
          }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Screen reader helper */}
      <span className="sr-only">About Banner — Profiberater overview</span>
    </section>
  );
};

export default AboutBanner;
