import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

/**
 * Contact.jsx
 *
 * Themed for "career consultant" — teal palette (#0f766e / #0ea5a4),
 * fonts: Poppins (headings) & Inter (body) via inline font-family hints.
 *
 * - Subtle square-grid background (inline CSS)
 * - Accessible form (aria, labels, error messages, focus styles)
 * - Basic client-side validation and submit state
 * - Success message after submit (aria-live)
 *
 * NOTE: Replace the form handling with your real API call when ready.
 */

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-[#0f766e]" />,
      title: "Phone",
      details: "+49 30 1234 5678",
      subtitle: "Mon–Fri: 09:00 — 18:00 CET",
    },
    {
      icon: <Mail className="w-5 h-5 text-[#0f766e]" />,
      title: "Email",
      details: "contact@careerconsultant.com",
      subtitle: "We reply within 24 business hours",
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#0f766e]" />,
      title: "Office",
      details: "Kantstraße 123, 10623 Berlin, Germany",
      subtitle: "By appointment only",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#0f766e]" />,
      title: "Hours",
      details: "Mon–Fri: 09:00 — 18:00",
      subtitle: "Evening & weekend slots by request",
    },
  ];

  // small inline validators
  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Full name is required.";
    if (!formData.email.trim()) e.email = "Email address is required.";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      e.email = "Enter a valid email.";
    if (!formData.message.trim()) e.message = "Please enter a message.";
    // optional: phone validation (very permissive)
    if (formData.phone && formData.phone.length < 6)
      e.phone = "Enter a valid phone number.";
    return e;
  };

  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    setResultMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length > 0) {
      // focus first error (improve accessibility)
      const firstKey = Object.keys(eObj)[0];
      const el = document.querySelector(`[name="${firstKey}"]`);
      if (el) el.focus();
      return;
    }

    setSubmitting(true);
    setResultMessage("");
    try {
      // TODO: replace with real API call
      await new Promise((res) => setTimeout(res, 900));

      // on success
      setResultMessage(
        "Thank you! We received your message and will contact you soon."
      );
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setErrors({});
    } catch (err) {
      setResultMessage("Sorry — something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="w-full"
      style={{
        fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto",
      }}
    >
      {/* small inline styles for grid bg and focus outlines */}
      <style>{`
        .square-grid {
          background-image:
            linear-gradient(to right, rgba(15,118,110,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15,118,110,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .focus-ring:focus {
          outline: 3px solid rgba(14,165,164,0.16);
          outline-offset: 2px;
        }
      `}</style>

      {/* Hero */}
      <section className="square-grid bg-[#f8fafc] py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h1
            className="text-3xl md:text-4xl font-extrabold text-[#0f172a]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Get in touch — career consultant
          </h1>
          <p className="mt-3 text-base md:text-lg text-[#334155] max-w-2xl mx-auto">
            Ready to move your career to Germany? Book a consultation, ask about
            visa pathways (Job Seeker, Blue Card) or get CV & interview support
            tailored to the German market.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact info / left column */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              {contactInfo.map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#ecfdf7] flex items-center justify-center flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0f172a]">
                      {c.title}
                    </div>
                    <div className="text-sm text-[#334155]">{c.details}</div>
                    <div className="text-xs text-[#64748b]">{c.subtitle}</div>
                  </div>
                </div>
              ))}

              <div className="mt-6">
                <a
                  href="/book"
                  className="inline-block bg-[#0f766e] text-white px-4 py-2 rounded-md font-semibold shadow hover:translate-y-[-1px] transition-transform focus-ring"
                  aria-label="Book a consultation"
                >
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                Send us a message
              </h2>

              <form onSubmit={handleSubmit} noValidate aria-live="polite">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#0f172a] mb-1"
                    >
                      Full name *
                    </label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus-ring ${
                        errors.name ? "border-red-400" : "border-gray-200"
                      }`}
                      required
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "err-name" : undefined}
                    />
                    {errors.name && (
                      <p id="err-name" className="mt-1 text-xs text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#0f172a] mb-1"
                    >
                      Email address *
                    </label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus-ring ${
                        errors.email ? "border-red-400" : "border-gray-200"
                      }`}
                      required
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "err-email" : undefined}
                    />
                    {errors.email && (
                      <p id="err-email" className="mt-1 text-xs text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#0f172a] mb-1"
                    >
                      Phone number
                    </label>
                    <input
                      name="phone"
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus-ring ${
                        errors.phone ? "border-red-400" : "border-gray-200"
                      }`}
                      placeholder="+49 30 12 34 56 78"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "err-phone" : undefined}
                    />
                    {errors.phone && (
                      <p id="err-phone" className="mt-1 text-xs text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-[#0f172a] mb-1"
                    >
                      Service interest
                    </label>
                    <select
                      name="service"
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus-ring border-gray-200"
                    >
                      <option value="">Select a service</option>
                      <option value="cv-review">CV Review</option>
                      <option value="interview-coaching">
                        Interview Coaching
                      </option>
                      <option value="career-roadmap">Career Roadmap</option>
                      <option value="visa-guidance">
                        Visa Guidance (Germany)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#0f172a] mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus-ring ${
                      errors.message ? "border-red-400" : "border-gray-200"
                    }`}
                    required
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "err-message" : undefined
                    }
                  />
                  {errors.message && (
                    <p id="err-message" className="mt-1 text-xs text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`col-span-1 md:col-span-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md font-semibold text-white shadow ${
                      submitting
                        ? "bg-[#94d3cc] cursor-wait"
                        : "bg-[#0f766e] hover:bg-[#0ea5a4]"
                    } focus-ring`}
                    aria-label="Send message"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="text-sm text-[#334155]">
                    <div className="font-medium">Or book directly</div>
                    <a href="/book" className="text-[#0f766e] underline">
                      Book an appointment
                    </a>
                  </div>
                </div>

                {/* Result message (success / error) */}
                {resultMessage && (
                  <div
                    className="mt-4 rounded-md px-4 py-3 text-sm"
                    role="status"
                    aria-live="polite"
                    style={{ background: "#ecfdf7", color: "#064e3b" }}
                  >
                    {resultMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
