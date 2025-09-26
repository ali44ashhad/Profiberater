import React from "react";

const coachingCards = [
  {
    title: "IELTS Online Coaching",
    link: "/ielts-online-coaching",
    img: "https://be.rooton.ca/uploads/IELTS_logo_svg_b787143e05.svg",
  },
  {
    title: "PTE Online Classes",
    link: "/pte-online-classes",
    img: "https://be.rooton.ca/uploads/PTE_1_a8c1ef1987.svg",
  },
  {
    title: "CELPIP Course Online",
    link: "/celpip-course-online",
    img: "https://be.rooton.ca/uploads/web_CELPIP_1_ef70205356.svg",
  },
  {
    title: "Duolingo English Test Prep",
    link: "/duolingo-english-language-test-preparation",
    img: "https://be.rooton.ca/uploads/duolingo_test_909dcec5bd.svg",
  },
  {
    title: "TOEFL Online Course",
    link: "/toefl-online-course",
    img: "https://be.rooton.ca/uploads/TOEFL_Logo_d019098ca4.svg",
  },
  {
    title: "DELF Preparation Course Online",
    link: "/delf-preparation-course-online",
    img: "https://be.rooton.ca/uploads/FRENCH_eb787a9cae.svg",
  },
  {
    title: "CAEL Online Coaching",
    link: "/cael-online-coaching",
    img: "https://be.rooton.ca/uploads/CAEL_c3413c43e5.svg",
  },
];

const CoachingServices = () => {
  return (
    <div className="relative pt-[30px] md:pt-[73px] lg:mt-[50px]">
      <section className="z-0 max-w-screen-2xl mx-auto h-auto">
        <div className="flex flex-col mx-auto px-6 md:px-12 lg:px-20">
          {/* Heading */}
          <div className="lg:flex lg:flex-row justify-between mb-11 lg:mb-[21px] relative">
            <div className="mb-2.5 lg:w-[24.58vw]">
              <h2 className="text-golden-yellow gradient-text text-sm font-semibold tracking-[2.8px] md:text-xl md:tracking-[4px]">
                COACHING SERVICES
              </h2>
              <h3 className="max-w-[340px] md:max-w-none text-primary-text gradient-text font-extrabold text-[1.75rem] md:text-5xl !leading-[1.42] tracking-normal">
                Why Choose Our Coaching Services?
              </h3>
            </div>
            <div className="lg:w-[56.875vw]">
              <p className="mt-8 md:mt-0 text-sm md:text-lg leading-6 md:leading-[30px] font-medium text-justify">
                Want to study or work in Canada? We're your trusted guide
                through the immigration process.
                <br />
                <br />
                We specialize in preparing you for crucial language exams –
                IELTS, PTE, CELPIP, CAEL, and TOEFL. Our approach is simple:
                personalized coaching that focuses on your specific needs.
                <br />
                <br />
                What we offer:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Targeted exam preparation</li>
                  <li>Practical communication skills</li>
                  <li>Cultural insights for Canadian success</li>
                  <li>Strategies to boost your application</li>
                </ul>
                <br />
                Our experienced coaches don't just teach – they help you build
                confidence and skills that Canadian schools and employers value.
                We break down complex requirements into clear, achievable steps.
                <br />
                <br />
                Your Canadian dream is closer than you think. Let's make it
                happen together.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="mb-6 lg:mt-[69px]">
            <div className="honestyBackground honestyCard grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coachingCards.map((card, idx) => (
                <div
                  key={idx}
                  className="honestyCard flex flex-col justify-start p-4 bg-primary rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <a
                    href={card.link}
                    className="flex justify-center p-4 bg-primary"
                  >
                    <div className="relative w-[250px] h-[120px]">
                      <img
                        src={card.img}
                        alt={`${card.title} icon`}
                        title={card.title}
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                    </div>
                  </a>
                  <h3 className="text-primary-font-color line-clamp-3 w-4/5 mb-2 text-xl md:text-[22px] font-bold leading-[1.36]">
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoachingServices;
