import React from "react";

const Banner = () => {
  return (
    <div className="w-full relative mt-0 h-[100vh] max-h-[650px] md:max-h-[unset] min-h-[380px]">
      {/* Content Section */}
      <div className="md:justify-evenly w-full h-full flex flex-col justify-end z-20">
        <div className="pb-[36px] md:pb-0 md:pt-[80px] relative z-[10] px-[24px] whitespace-pre-wrap md:px-[48px] lg:px-[80px]">
          <div
            className="overflow-hidden w-full"
            style={{ opacity: 1, transform: "none" }}
          >
            <h1 className="banner-text text-[37.2px] lg:text-[62px] mr-9 font-bold leading-[normal] text-white font-jakartaSans">
              <span>Canada&apos;s Path:</span>
              <br />
              Your Ambition, <br />
              Our Coaching Mastery!
            </h1>
            <p className="mt-[15px] md:mt-[35px] text-white font-bold text-[15px] leading-[1.67] lg:text-2xl">
              Let Root On Elevate Your Learning Journey!
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-[57.8px] w-full md:max-w-[418px]">
            <button
              data-tooltip="true"
              aria-label="Book an Appointment now"
              type="button"
              className="relative pt-[17.8px] text-black pl-[22.5px] pr-[19px] pb-[19.2px] flex items-center gap-[21.5px] bg-white lg:text-lg w-full justify-center md:w-fit"
            >
              <p className="truncate font-bold text-[14px] lg:text-sm">
                Book an Appointment now
              </p>
              {/* Icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="gradient"
                  >
                    <stop offset="0%"></stop>
                    <stop offset="100%"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M234 23.5v11.875c0 .345-.28.625-.625.625h-18.75a.625.625 0 0 1-.625-.625V23.5h20zm-13.75 8.75h-2.5v1.25h2.5v-1.25zm5 0h-2.5v1.25h2.5v-1.25zm5 0h-2.5v1.25h2.5v-1.25zm-10-3.125h-2.5v1.25h2.5v-1.25zm5 0h-2.5v1.25h2.5v-1.25zm5 0h-2.5v1.25h2.5v-1.25zm-10-3.125h-2.5v1.25h2.5V26zm5 0h-2.5v1.25h2.5V26zm5 0h-2.5v1.25h2.5V26zm-9.375-10c.345 0 .625.28.625.625v.625h5v-.625c0-.345.28-.625.625-.625h1.25c.345 0 .625.28.625.625v.625h4.375c.345 0 .625.28.625.625V21h-20v-3.125c0-.345.28-.625.625-.625H219v-.625c0-.345.28-.625.625-.625z"
                  transform="translate(-214 -16)"
                  fill="url(#gradient)"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Background Images */}
      <img
        alt="root-on-banner-image"
        title="Banner Image"
        fetchPriority="high"
        decoding="async"
        src="https://be.rooton.ca/uploads/bg_image_73aecb5977.png"
        className="absolute h-full w-full inset-0 object-cover"
      />
      <img
        alt=""
        fetchPriority="high"
        decoding="async"
        src="https://rooton.ca/images/overlay/banner-overlay.png"
        className="absolute h-full w-full inset-0 object-cover"
      />

      {/* Decorative SVG */}
      <div className="absolute bottom-0 right-0 hidden md:block">
        {/* Place the long SVG here (unchanged) */}
      </div>
    </div>
  );
};

export default Banner;
