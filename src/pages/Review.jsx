import React from "react";
import { Star, Quote } from "lucide-react";

const Review = () => {
  const reviews = [
    {
      name: "Jennifer Martinez",
      role: "Marketing Director",
      company: "Tech Innovations Inc.",
      rating: 5,
      content:
        "The coaching program transformed our team dynamics completely. We saw a 40% increase in productivity within three months.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Robert Kim",
      role: "CEO",
      company: "StartUp Ventures",
      rating: 5,
      content:
        "Exceptional strategic guidance that helped us navigate through critical growth phases. Highly recommended!",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Amanda Thompson",
      role: "HR Manager",
      company: "Global Solutions Ltd.",
      rating: 5,
      content:
        "The leadership training program was outstanding. Our managers are more effective and confident in their roles.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "David Wilson",
      role: "Software Engineer",
      company: "Cloud Systems",
      rating: 5,
      content:
        "Career coaching helped me make a successful transition to a leadership position. The support was incredible.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "Digital Creations",
      rating: 5,
      content:
        "The conflict resolution workshop saved our team. We learned practical skills that we use every day.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Michael Brown",
      role: "Operations Director",
      company: "Manufacturing Plus",
      rating: 5,
      content:
        "Strategic planning session was worth every penny. We have a clear roadmap for the next three years.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const stats = [
    { number: "4.9", label: "Average Rating" },
    { number: "500+", label: "5-Star Reviews" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "1000+", label: "Clients Served" },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-teal-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Client Reviews
            </h1>
            <p className="text-lg text-gray-600">
              Discover what our clients have to say about their experiences with
              our services and the results they've achieved.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-600">{review.role}</p>
                    <p className="text-sm text-gray-500">{review.company}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {renderStars(review.rating)}
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-primary-100 absolute -top-2 -left-1" />
                  <p className="text-gray-600 relative z-10 pl-4">
                    {review.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Share Your Experience?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We value your feedback and would love to hear about your journey
            with us.
          </p>
          <button className="btn-primary">Write a Review</button>
        </div>
      </section>
    </div>
  );
};

export default Review;
