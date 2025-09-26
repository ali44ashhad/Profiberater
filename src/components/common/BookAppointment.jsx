import React from "react";
import { useNavigate } from "react-router-dom";

const BookAppointment = ({
  ctaText = "Book an Appointment",
  heading = "Streamline Your Immigration Journey with Experts",
  desktopImg = "https://rooton.ca/images/homePage/bookanappointment.png",
  mobileImg = "https://rooton.ca/images/homePage/bookanappointment-mobile.png",
  onBookClick = null,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (typeof onBookClick === "function") return onBookClick();
    navigate("#");
  };

  return (
    // full-bleed wrapper so background spans edge-to-edge like other sections
    <div className="relative isolate w-screen left-1/2 -ml-[50vw] right-1/2 -mr-[50vw]">
      <section
        className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-green-50 py-12 md:py-16"
        aria-labelledby="book-appointment-heading"
      >
        {/* subtle square grid + decorative radial overlays */}
        <style>{`
          .square-grid-bg {
            background-image:
              linear-gradient(to right, rgba(6,95,70,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6,95,70,0.03) 1px, transparent 1px);
            background-size: 48px 48px;
          }
          .cta-focus:focus { outline: none; box-shadow: 0 8px 28px rgba(16,185,129,0.12); }
          @media (prefers-reduced-motion: reduce) {
            .cta-animate { transition: none !important; transform: none !important; }
          }
        `}</style>

        <div className="square-grid-bg relative overflow-hidden mx-4 sm:mx-6 md:mx-8 lg:mx-12 rounded-2xl">
          <div className="relative px-6 md:px-12 lg:px-20 py-10 md:py-14 flex flex-col md:flex-row items-center">
            {/* Left side content */}
            <div className="w-full md:max-w-[620px] z-10">
              <h2
                id="book-appointment-heading"
                className="text-black text-[20px] md:text-[24px] font-extrabold leading-[1.12] mb-4"
                style={{ fontFamily: "Poppins, Inter" }}
              >
                {heading}
              </h2>

              <p className="text-sm md:text-base text-slate-600 mb-6 max-w-2xl">
                Talk to a Regulated Canadian Immigration Consultant (RCIC) — get
                a clear assessment, step-by-step guidance, and a personalised
                action plan tailored to your goals.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="button"
                  onClick={handleClick}
                  className="cta-animate cta-focus inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-sky-600 text-white rounded-md px-4 py-3 md:px-5 md:py-3 font-semibold shadow-md hover:scale-[1.01] transition-transform"
                  aria-label={ctaText}
                >
                  <span>{ctaText}</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
                    <defs>
                      <linearGradient id="g-cta-2" x1="0" y1="0" x2="1" y2="1">
                        <stop
                          offset="0"
                          stopColor="#FFFFFF"
                          stopOpacity="0.18"
                        />
                        <stop
                          offset="1"
                          stopColor="#FFFFFF"
                          stopOpacity="0.06"
                        />
                      </linearGradient>
                    </defs>
                    <rect
                      x="0"
                      y="8.5"
                      width="14"
                      height="2"
                      rx="1"
                      fill="url(#g-cta-2)"
                    />
                  </svg>
                </button>

                <a
                  href="/contact"
                  className="text-sm text-slate-800 underline mt-2 sm:mt-0"
                  onClick={(e) => {
                    /* fallback anchor; primary action handled by button */
                  }}
                >
                  Need a custom package?
                </a>
              </div>
            </div>

            {/* Right visual */}
            <div className="w-full md:flex-1 flex justify-center md:justify-end mt-8 md:mt-0 z-10">
              {/* Mobile image */}
              <div className="md:hidden w-[260px] h-[220px]">
                <img
                  src={mobileImg}
                  alt="Book an appointment illustration"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Desktop image */}
              <div className="hidden md:block relative w-[460px] h-[300px]">
                <img
                  src={desktopImg}
                  alt="Book an appointment illustration"
                  className="absolute inset-0 w-full h-full object-contain object-bottom"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* subtle radial decorative overlay behind content */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(600px 220px at 10% 25%, rgba(16,185,129,0.04), transparent 12%), radial-gradient(520px 200px at 85% 80%, rgba(6,182,212,0.03), transparent 18%)",
              }}
            />
          </div>
        </div>

        {/* large decorative squares (non-interactive), placed outside inner rounded container */}
        <div
          className="hidden lg:block absolute -left-24 -top-12 pointer-events-none"
          aria-hidden
        >
          <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
            <rect
              x="0"
              y="0"
              width="80"
              height="80"
              rx="8"
              fill="rgba(6,95,70,0.03)"
            />
            <rect
              x="70"
              y="70"
              width="80"
              height="80"
              rx="8"
              fill="rgba(6,182,212,0.02)"
            />
            <rect
              x="140"
              y="140"
              width="80"
              height="80"
              rx="8"
              fill="rgba(6,95,70,0.025)"
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
              fill="rgba(6,182,212,0.02)"
            />
            <rect
              x="60"
              y="80"
              width="70"
              height="70"
              rx="10"
              fill="rgba(6,95,70,0.03)"
            />
            <rect
              x="140"
              y="20"
              width="90"
              height="90"
              rx="12"
              fill="rgba(6,182,212,0.015)"
            />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;
