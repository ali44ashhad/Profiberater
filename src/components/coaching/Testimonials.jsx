import React, { useState } from "react";

// Sample testimonials data
const testimonials = [
  {
    name: "Vraj Patel",
    exam: "IELTS",
    image: "https://be.rooton.ca/uploads/person1_9a9ffc5939.jpg",
    video: "https://be.rooton.ca/uploads/vraj_patel_c6cbfa1b7a.png",
    bgColor: "bg-white",
  },
  {
    name: "Kuldeepsinh Vansadiya",
    exam: "",
    image: null, // No image provided
    video: null,
    bgColor: "bg-secondary-grey",
    text: `"I have had the distinct pleasure of experiencing Rachita Mam's teaching methods, which are nothing short of exemplary. Her approach to education is a rare blend of innovation and tradition, making complex concepts accessible and engaging. What truly sets her apart is her unflagging patience and politeness, which creates a learning environment that is not only informative but also incredibly supportive and nurturing. Rachita Mam's dedication to her craft and her students is evident in every lesson, making each session a unique and enriching experience. Her pedagogical skills are a beacon of inspiration and a testament to the art of teaching at its finest."`,
  },
  {
    name: "Faiz Khan",
    exam: "IELTS 8.0 Bands",
    image: "https://be.rooton.ca/uploads/person3_22e383527d.jpg",
    logo: "https://be.rooton.ca/uploads/college_logo_f53ea53e7e.jpg",
    bgColor: "bg-secondary-grey",
    text: `"I am very happy to share that I have scored 8 bands in the IELTS exam, thanks to the excellent coaching I received from Root On. The teachers were very knowledgeable, friendly and supportive. They helped me improve my skills in all four modules: listening, reading, writing and speaking. They also provided me with a lot of practice materials, mock tests and feedback. The coaching was well-structured, interactive and engaging. I learned a lot of tips and tricks to ace the exam. I would highly recommend Root On to anyone who wants to achieve their desired band score in the IELTS exam. It was a great learning experience for me."`,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="pb-10 md:pb-[80px]">
      <section className="w-full bg-primary-white overflow-x-hidden">
        <div className="px-[24px] md:px-[48px] lg:px-[80px] pt-10 md:pt-[80px]">
          {/* Header */}
          <div className="flex items-center justify-between md:pr-[48px] lg:pr-[80px]">
            <div className="md:max-w-[85%] xl:max-w-none px-[24px] md:px-[48px] lg:px-[80px]">
              <h2 className="text-golden-yellow gradient-text text-sm font-semibold tracking-[2.8px] md:text-xl md:tracking-[4px]">
                TESTIMONIALS
              </h2>
              <h3 className="max-w-[340px] md:max-w-none md:text-5xl gradient-text text-primary-text font-extrabold !leading-[1.42] text-[1.75rem]">
                Hear it from our valued Customers
              </h3>
            </div>
            {/* Slider Navigation */}
            <div className="items-center hidden md:flex md:mb-[8px] flex-shrink-0">
              <button
                type="button"
                disabled={currentIndex === 0}
                onClick={prevSlide}
                className="w-11 h-11 px-[17px] py-[13px] bg-[#f3f3f3] mr-[16px] disabled:cursor-not-allowed disabled:opacity-50 rotate-180"
              >
                <svg
                  className="opacity-[0.7]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                >
                  <path
                    d="M1.257 18 10 9.008 1.257 0 0 1.293l7.485 7.715L0 16.707z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-11 h-11 px-[17px] py-[13px] bg-[#f3f3f3]"
              >
                <svg
                  className="opacity-[0.7]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                >
                  <path
                    d="M1.257 18 10 9.008 1.257 0 0 1.293l7.485 7.715L0 16.707z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="pt-[40px] md:pt-[48px]">
            <div className="relative flex overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((t, index) => (
                  <article
                    key={index}
                    className="px-[12px] w-full flex-shrink-0 md:w-[50%] md:min-w-[380px]"
                  >
                    <div
                      className={`h-[520px] p-[24px] md:p-[20px] testimonial-border relative ${t.bgColor}`}
                    >
                      {/* Video / Image */}
                      {t.video || t.image ? (
                        <div className="w-full h-full relative flex justify-center items-center">
                          <img
                            src={t.video || t.image}
                            alt={t.name}
                            className="absolute w-full h-full object-cover rounded"
                          />
                          {t.video && (
                            <button
                              className="relative z-10"
                              type="button"
                              aria-label="Play video"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="32"
                                viewBox="0 0 40 32"
                              >
                                <path
                                  d="m15.6 24.35 13-8.45-13-8.45v16.9zM0 32V0h40v32H0z"
                                  fill="#FFF"
                                  fillRule="nonzero"
                                />
                              </svg>
                            </button>
                          )}
                        </div>
                      ) : (
                        <p className="text-primary-font-color text-[13px] font-medium h-full overflow-y-auto pr-[10px] text-justify">
                          {t.text}
                        </p>
                      )}

                      {/* Footer */}
                      <div className="testimonial-footer absolute flex items-center bottom-0 bg-white p-[16px] w-full">
                        <div className="flex items-center w-full">
                          {t.image && (
                            <img
                              src={t.image}
                              alt={t.name}
                              className="w-12 h-12 rounded-full mr-4 object-cover"
                            />
                          )}
                          <div className="max-w-[calc(100%-60px)]">
                            <div className="text-bold text-primary-font-color font-bold text-base">
                              {t.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {t.exam}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Mobile Pagination Dots */}
            <div className="md:hidden flex items-end py-4 gap-4 justify-center">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 w-1 inline-block rounded-full ${
                    i === currentIndex
                      ? "bg-font-color-orange"
                      : "bg-toggle-dark-bg"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
