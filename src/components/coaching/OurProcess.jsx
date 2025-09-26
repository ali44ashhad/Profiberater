import React from "react";

const processes = [
  {
    id: 1,
    title: "Initial Consultation",
    description:
      "Begin your journey with a one-on-one session to assess your language proficiency and understand your specific goals for IELTS, PTE, TOEFL, CAEL, Duolingo, or CELPIP.",
  },
  {
    id: 2,
    title: "Customized Study Plan",
    description:
      "Based on the initial assessment, we design a personalized study plan that aligns with your language level, schedule, and test objectives.",
  },
  {
    id: 3,
    title: "Interactive Coursework",
    description:
      "Engage in interactive lessons focusing on key test areas - reading, writing, listening, and speaking. Our courses are tailored to each test's format and requirements.",
  },
  {
    id: 4,
    title: "Practice Tests",
    description:
      "Regular practice tests under real exam conditions to build confidence and track progress. Detailed feedback is provided to identify and work on weak areas.",
  },
  {
    id: 5,
    title: "One-on-One Coaching Sessions",
    description:
      "Personalized coaching sessions focusing on specific challenges you face in your test preparation, offering targeted strategies and tips.",
  },
  {
    id: 6,
    title: "Resource Access",
    description:
      "Gain access to a wealth of resources, including study materials, practice questions, and video tutorials, to aid in your test preparation.",
  },
  {
    id: 7,
    title: "Progress Monitoring",
    description:
      "Continuous monitoring of your progress to ensure you are on track to achieving your desired test scores, with adjustments made to your study plan as needed.",
  },
  {
    id: 8,
    title: "Final Review",
    description:
      "A comprehensive review session before your test date to reinforce key concepts and strategies, ensuring you are fully prepared.",
  },
  {
    id: 9,
    title: "Ongoing Support",
    description:
      "Even after your course ends, we provide ongoing support to answer any last-minute questions and offer guidance right up to your test day.",
  },
];

const OurProcess = () => {
  return (
    <div className="mb-20">
      <section className="relative overflow-y-hidden max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 pt-10 md:pt-24">
        <h2 className="text-golden-yellow gradient-text text-sm font-semibold tracking-wider md:text-xl md:tracking-wide">
          OUR PROCESS
        </h2>
        <h2 className="max-w-[340px] md:max-w-none md:text-5xl gradient-text text-primary-text font-extrabold leading-snug text-[1.75rem] mt-2">
          Simple, smooth and transparent!
        </h2>

        {/* Desktop view */}
        <div className="relative z-10 mt-12 hidden md:block">
          {processes.map((process, index) => (
            <React.Fragment key={process.id}>
              <div
                className="processItem flex py-6 px-8 transition-all ease-linear"
                style={{ background: "var(--selector-bg)" }}
              >
                <div className="flex items-center w-3/8 gap-8 flex-shrink-0">
                  <span className="text-[40px] font-light text-[#e3a430]">
                    {process.id}
                  </span>
                  <h3 className="text-xl font-bold text-primary-font-color md:pr-12">
                    {process.title}
                  </h3>
                </div>
                <div className="pl-[70px] pr-0 min-h-[60px]">
                  <p className="text-lg font-medium text-primary-font-color opacity-70 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
              {index < processes.length - 1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="divider"
                  viewBox="0 0 100 1"
                  width="100%"
                  height="1"
                  preserveAspectRatio="none"
                >
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopOpacity="0"
                      stopColor="rgba(255,243,224,0)"
                    />
                    <stop offset="11%" stopColor="#fddaa1" />
                    <stop offset="91%" stopColor="#fddaa1" />
                    <stop
                      offset="100%"
                      stopOpacity="0"
                      stopColor="rgba(254,244,228,0)"
                    />
                  </linearGradient>
                  <rect
                    x="0"
                    y="0"
                    width="100"
                    height="1"
                    fill="url(#gradient)"
                  />
                </svg>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile view */}
        <div className="block md:hidden mt-8 space-y-4">
          {processes.map((process) => (
            <div
              key={process.id}
              className="p-4 -mx-6"
              style={{ background: "var(--selector-bg)" }}
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl text-golden-yellow mr-3 font-light">
                  {process.id}
                </span>
                <h3 className="text-sm font-bold text-primary-font-color">
                  {process.title}
                </h3>
              </div>
              <p className="text-[13px] font-medium text-primary-font-color opacity-70 leading-[1.62]">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurProcess;
