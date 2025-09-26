import React from "react";

/**
 * HeroSection — theme-matched version
 * - Full-bleed wrapper (prevents white bands)
 * - Green → sky gradient accents, subtle grid background
 * - Poppins for headings, Inter for body (font loading managed globally)
 * - Accessible: aria-labelledby, clear link text, sensible contrast
 * - Optional illustration via props
 */

export default function HeroSection({
  title = "Your Career in Germany Starts Here",
  subtitle = `career consultant helps students and professionals relocate to Germany with confidence. From CV optimisation and interview prep to visa guidance (Job Seeker, Blue Card), we make your journey organised and stress-free.`,
  primaryHref = "/book",
  secondaryHref = "/services",
  illustration = "https://rooton.ca/images/homePage/bookanappointment.png",
}) {
  return (
    // full-bleed wrapper so hero spans viewport width (keeps consistent layout)
    <section
      aria-labelledby="hero-heading"
      className="relative isolate w-screen left-1/2 -ml-[50vw] right-1/2 -mr-[50vw] overflow-hidden"
      style={{
        fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto",
      }}
    >
      <style>{`
        /* subtle grid like other sections */
        .hero-grid {
          background-image:
            linear-gradient(to right, rgba(6,95,70,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(14,165,164,0.02) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-entrance { transition: none !important; transform: none !important; opacity: 1 !important; }
        }
      `}</style>

      <div className="hero-grid bg-gradient-to-br from-white via-sky-50 to-green-50 px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="relative z-10 max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left content */}
          <div className="flex-1 text-center md:text-left">
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f172a] leading-tight mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {title}
            </h1>

            <p className="text-lg md:text-xl text-[#334155] mb-8 max-w-2xl mx-auto md:mx-0">
              <strong className="text-[#0f172a]">career consultant</strong> —{" "}
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={primaryHref}
                className="inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold shadow focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300/30 transform transition-transform hover:scale-[1.01]"
                style={{
                  background: "linear-gradient(90deg,#16A34A,#0EA5A4)",
                  color: "#fff",
                }}
                aria-label="Book a consultation"
              >
                Book Consultation
              </a>

              <a
                href={secondaryHref}
                className="inline-flex items-center justify-center border border-[#0ea5a4] text-[#0f766e] bg-white px-6 py-3 rounded-md font-semibold shadow hover:bg-[#f0fdfa] focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300/20"
                aria-label="Explore services"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right illustration (hidden on small screens) */}
          <div className="flex-1 hidden md:flex justify-center" aria-hidden>
            {illustration ? (
              <img
                src={illustration}
                alt=""
                role="presentation"
                className="max-w-md h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            ) : null}
          </div>
        </div>
      </div>

      {/* Decorative teal/gold squares (desktop only) */}
      <div
        className="hidden lg:block absolute -left-20 -top-12 pointer-events-none"
        aria-hidden
      >
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
          <rect
            x="0"
            y="0"
            width="80"
            height="80"
            rx="8"
            fill="rgba(15,118,110,0.03)"
          />
          <rect
            x="70"
            y="70"
            width="80"
            height="80"
            rx="8"
            fill="rgba(14,165,164,0.02)"
          />
          <rect
            x="140"
            y="140"
            width="80"
            height="80"
            rx="8"
            fill="rgba(15,118,110,0.025)"
          />
        </svg>
      </div>

      <div
        className="hidden lg:block absolute -right-28 -bottom-8 pointer-events-none"
        aria-hidden
      >
        <svg width="260" height="180" viewBox="0 0 260 180" fill="none">
          <rect
            x="0"
            y="20"
            width="70"
            height="70"
            rx="10"
            fill="rgba(14,165,164,0.02)"
          />
          <rect
            x="60"
            y="80"
            width="70"
            height="70"
            rx="10"
            fill="rgba(15,118,110,0.03)"
          />
          <rect
            x="140"
            y="20"
            width="90"
            height="90"
            rx="12"
            fill="rgba(14,165,164,0.015)"
          />
        </svg>
      </div>
    </section>
  );
}
