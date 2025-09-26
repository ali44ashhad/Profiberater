import React from "react";
import { Clock, Users, Target, BarChart3, CheckCircle } from "lucide-react";
import Banner from "../components/coaching/Banner";
import CoachingServices from "../components/coaching/CoachingServices";
import OurProcess from "../components/coaching/OurProcess";
import EnglishTestsTable from "../components/coaching/EnglishTestsTable";
import Testimonials from "../components/coaching/Testimonials";
import BookAppointment from "../components/common/BookAppointment";

const Coaching = () => {
  const programs = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Executive Coaching",
      description:
        "For leaders looking to enhance their leadership capabilities.",
      duration: "6 months",
      sessions: "24 sessions",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Coaching",
      description: "Improve team dynamics and collaboration effectiveness.",
      duration: "3 months",
      sessions: "12 sessions",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Coaching",
      description: "Maximize individual and organizational performance.",
      duration: "4 months",
      sessions: "16 sessions",
    },
  ];

  const benefits = [
    "Improved leadership skills",
    "Enhanced communication abilities",
    "Better decision-making capabilities",
    "Increased self-awareness",
    "Stronger team relationships",
    "Higher productivity levels",
  ];

  return (
    <div>
      <Banner />
      <CoachingServices />
      <OurProcess />
      <EnglishTestsTable />
      <Testimonials />
      <BookAppointment />
    </div>
  );
};

export default Coaching;
