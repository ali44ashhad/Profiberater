import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Target, Award } from "lucide-react";
import Hero from "../components/home/hero";
import Credibility from "../components/home/Credibility";
import Honesty from "../components/home/WhyChooseUs";
import Challenges from "../components/home/Challenges";
import Process from "../components/home/Process";
import BookPartnersSection from "../components/home/partners";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FAQSection from "../components/home/FAQSection";
import BookAppointment from "../components/common/BookAppointment";
import PrimaryServices from "../components/home/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <Credibility />
      <Honesty />
      <PrimaryServices />
      <Challenges />
      <Process />
      <BookPartnersSection />
      <TestimonialsSection />
      <FAQSection />
      <BookAppointment />
    </>
  );
};

export default Home;
