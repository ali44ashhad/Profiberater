import AboutBanner from "../components/about/AboutBanner";
import AboutSection from "../components/about/AboutSection";
import FounderSection from "../components/about/FounderSection";
import HeroSection from "../components/about/HeroSection";
import Mission from "../components/about/Mission";
import TeamSlider from "../components/about/TeamSlider";
import WhatWeValue from "../components/about/values";
import WhyChooseUs from "../components/about/WhyChooseUs";
import BookAppointment from "../components/common/BookAppointment";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <AboutSection />
      <WhyChooseUs />
      <Mission />

      <TeamSlider />
      <WhatWeValue />
      <BookAppointment />
    </div>
  );
};

export default About;
