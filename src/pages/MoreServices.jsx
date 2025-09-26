import React from "react";
import { CheckCircle, ArrowRight, Star } from "lucide-react";

const MoreServices = () => {
  const additionalServices = [
    {
      title: "Workshop Facilitation",
      description:
        "Interactive workshops for teams and organizations on various topics.",
      features: [
        "Customized content",
        "Interactive sessions",
        "Practical exercises",
        "Follow-up support",
      ],
      duration: "Half-day or Full-day",
      rating: 4.9,
    },
    {
      title: "Leadership Training",
      description:
        "Comprehensive leadership development programs for emerging leaders.",
      features: [
        "Leadership assessment",
        "Skill building",
        "Mentorship",
        "Peer learning",
      ],
      duration: "8-week program",
      rating: 4.8,
    },
    {
      title: "Conflict Resolution",
      description:
        "Mediation and conflict resolution services for teams and organizations.",
      features: [
        "Mediation sessions",
        "Communication training",
        "Team building",
        "Ongoing support",
      ],
      duration: "As needed",
      rating: 4.7,
    },
    {
      title: "Strategic Planning",
      description:
        "Facilitated strategic planning sessions for organizational growth.",
      features: [
        "SWOT analysis",
        "Goal setting",
        "Action planning",
        "Implementation support",
      ],
      duration: "2-3 day retreat",
      rating: 4.9,
    },
    {
      title: "Performance Reviews",
      description: "360-degree feedback and performance evaluation systems.",
      features: [
        "Assessment tools",
        "Detailed reports",
        "Action planning",
        "Follow-up",
      ],
      duration: "Quarterly or Annual",
      rating: 4.6,
    },
    {
      title: "Team Building",
      description:
        "Custom team building activities to improve collaboration and morale.",
      features: [
        "Custom activities",
        "Fun exercises",
        "Skill development",
        "Team bonding",
      ],
      duration: "Half-day sessions",
      rating: 4.8,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              More Services
            </h1>
            <p className="text-lg text-gray-600">
              Explore our comprehensive range of additional services designed to
              meet your specific needs and challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <div className="flex items-center bg-primary-100 text-primary-700 px-2 py-1 rounded text-sm">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      {service.rating}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">
                      Includes:
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <span className="text-sm text-gray-500">
                      {service.duration}
                    </span>
                    <button className="btn-primary text-sm inline-flex items-center">
                      Learn More <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-500 section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            We can tailor our services to meet your specific requirements and
            objectives.
          </p>
          <button className="bg-white text-primary-500 hover:bg-gray-100 btn-primary">
            Request Custom Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default MoreServices;
