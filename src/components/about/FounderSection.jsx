import React from "react";

/**
 * FounderSection.jsx
 *
 * - Founder updated to Mr. Sagar Prajapati
 * - Themed for green + sky accents, accessible
 * - Keeps two-column layout; adds certifications + verification link
 */

const CERTIFICATIONS = [
  {
    id: "rcic",
    title: "RCIC Verified",
    src: "https://be.rooton.ca/uploads/rcic_badge.png", // replace with real badge
    alt: "RCIC verification badge",
    href: "https://college-icc.ca/verify", // replace with specific verification link if available
  },
  {
    id: "daa",
    title: "DAAD Partner",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/DAAD_logo_schriftzug.svg/1200px-DAAD_logo_schriftzug.svg.png",
    alt: "DAAD partner logo",
    href: "https://www.daad.de/en/",
  },
  {
    id: "goethe",
    title: "Goethe-Institut",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Goethe-Institut_logo.svg/1200px-Goethe-Institut_logo.svg.png",
    alt: "Goethe-Institut logo",
    href: "https://www.goethe.de",
  },
];

const FounderSection = ({
  founder = {
    name: "Mr. Sagar Prajapati",
    title: "Founder — career consultant",
    bio: `Hi — I'm Mr. Sagar Prajapati, founder of career consultant. I'm an entrepreneur and career strategist originally from Surat, India, now working with clients worldwide to build fulfilling careers in Germany.

Over the past decade I have helped students, professionals and families navigate German work culture, CV expectations, interview practices and visa pathways such as the Job Seeker Visa and EU Blue Card. I started this practice because I saw many talented people struggle with poorly aligned advice — and I wanted to offer a better, ethics-first approach that actually delivers results.

At career consultant we pair practical career coaching with hands-on guidance for the German labour market so you can make confident, informed decisions. I invite you to book a discovery call with our team to explore a personalised roadmap for your move to Germany.`,
    photo: "https://rooton.ca/images/aboutUs/team-members/Ronak.webp", // replace with actual founder photo
  },
}) => {
  return (
    // full-bleed wrapper so it lines up with other sections and removes white bands
    <section
      aria-labelledby="founder-heading"
      className="relative isolate w-screen left-1/2 -ml-[50vw] right-1/2 -mr-[50vw] my-8 md:my-12"
      style={{
        fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <style>{`
        .founder-bg {
          background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(236,254,255,0.6) 100%);
        }
        .square-grid-subtle {
          background-image:
            linear-gradient(to right, rgba(6,95,70,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(14,165,164,0.015) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .focus-ring:focus-visible {
          outline: 3px solid rgba(14,165,164,0.12);
          outline-offset: 4px;
          border-radius: 8px;
        }
        @media (prefers-reduced-motion: reduce) {
          .fm-appear { transition: none !important; transform: none !important; opacity: 1 !important; }
        }
      `}</style>

      <div
        className="relative founder-bg square-grid-subtle rounded-2xl  mx-4 sm:mx-6 md:mx-8 lg:mx-12 px-6 md:px-12 lg:px-20 py-8 md:py-12 lg:py-14"
        style={{
          border: "1px solid rgba(15,23,42,0.03)",
          boxShadow: "0 10px 30px rgba(2,6,23,0.04)",
        }}
      >
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left column: text */}
          <div className="w-full lg:w-[58%]">
            <h2
              id="founder-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#0f172a",
                lineHeight: 1.04,
              }}
            >
              About the Founder
            </h2>

            <p
              className="text-sm md:text-base text-slate-700 leading-relaxed"
              style={{ whiteSpace: "pre-line" }}
            >
              <strong
                style={{
                  fontFamily: "Poppins, sans-serif",
                  display: "block",
                  fontSize: "1.05rem",
                  marginBottom: 8,
                }}
              >
                {founder.name}
              </strong>

              <span
                style={{
                  display: "block",
                  marginBottom: 8,
                  color: "#0f172a",
                  fontWeight: 600,
                }}
              >
                {founder.title}
              </span>

              <span style={{ fontFamily: "Inter, sans-serif" }}>
                {founder.bio}
              </span>
            </p>

            {/* Certifications + verification */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-center gap-4 flex-wrap">
                {CERTIFICATIONS.map((c) => (
                  <a
                    key={c.id}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white border border-gray-100 rounded-md p-2 shadow-sm hover:shadow-md transition-shadow focus-ring"
                    aria-label={`${c.title} — opens in new tab`}
                    style={{ minWidth: 140 }}
                  >
                    <img
                      src={c.src}
                      alt={c.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-8 object-contain"
                    />
                    <span className="text-xs text-slate-700 font-semibold">
                      {c.title}
                    </span>
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="/book-rcic"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-sky-600 text-white px-4 py-2 rounded-md font-semibold shadow hover:scale-[1.01] transition-transform focus-ring"
                  aria-label="Book a discovery call with Mr. Sagar Prajapati"
                >
                  Book a discovery call
                </a>

                <a
                  href="https://college-icc.ca/verify" // sample verification link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-700 underline focus-ring"
                  aria-label="Verify credentials — opens in new tab"
                >
                  Verify credentials
                </a>
              </div>
            </div>
          </div>

          {/* Right column: image */}
          <div className="w-full lg:w-[42%] flex justify-end items-end">
            <img
              src={founder.photo}
              alt={`${founder.name} — Founder`}
              title={`${founder.name} — Founder`}
              loading="lazy"
              decoding="async"
              className="max-w-[340px] w-full h-auto rounded-md object-contain shadow-lg"
              style={{ border: "1px solid rgba(15,23,42,0.04)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
