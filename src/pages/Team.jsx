import React from "react";
import { Linkedin, Mail, Award } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Lead Coach & Founder",
      bio: "With over 15 years of experience in executive coaching and leadership development.",
      expertise: ["Executive Coaching", "Leadership", "Strategy"],
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Michael Chen",
      role: "Senior Consultant",
      bio: "Specializes in organizational development and team performance optimization.",
      expertise: ["Team Coaching", "OD", "Performance"],
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Emily Rodriguez",
      role: "Career Coach",
      bio: "Helps professionals navigate career transitions and achieve growth objectives.",
      expertise: ["Career Development", "Interview Prep", "Skills Training"],
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "David Kim",
      role: "Business Strategist",
      bio: "Expert in business transformation and strategic planning for growth companies.",
      expertise: ["Business Strategy", "Growth Planning", "Innovation"],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h1>
            <p className="text-lg text-gray-600">
              Our team of certified professionals brings diverse expertise and a
              shared passion for helping clients achieve extraordinary results.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-500 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">
                      Expertise:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-red-600 transition-colors">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 section-padding">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <Award className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-gray-300 mb-6">
              We're always looking for talented professionals who share our
              passion for helping others succeed.
            </p>
            <button className="btn-primary bg-primary-500 hover:bg-primary-600">
              View Career Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
