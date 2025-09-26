import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

/**
 * InquiryForm.jsx
 *
 * - Theme: BookAppointment / grid background look
 * - Accessible form, client-side validation & helpful errors
 * - Props (optional):
 *    onSubmit(formData) => called with object when user submits
 *    submitText => text for submit button
 */

export default function InquiryForm({
  onSubmit = null,
  submitText = "Book Consultation",
}) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobilephone: "",
    country: "",
    inquiryAbout: "",
    description: "",
    consent: true,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const liveErrorRef = useRef(null);

  const COUNTRIES = [
    "India",
    "Germany",
    "United Kingdom",
    "United States",
    "Canada",
    "Australia",
    "United Arab Emirates",
    "Nepal",
  ];

  const INQUIRIES = [
    "CV Review & Optimization",
    "Interview Coaching",
    "Career Roadmap",
    "Job Seeker Visa",
    "EU Blue Card Guidance",
    "Language / Cultural Prep",
    "Other (General Enquiry)",
  ];

  function validate(values) {
    const e = {};
    if (!values.firstname.trim()) e.firstname = "First name is required.";
    if (!values.lastname.trim()) e.lastname = "Last name is required.";
    if (!values.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "Please enter a valid email address.";
    if (!values.mobilephone.trim()) e.mobilephone = "Phone number is required.";
    if (!values.country) e.country = "Please select your country of residence.";
    if (!values.inquiryAbout) e.inquiryAbout = "Please select an inquiry type.";
    return e;
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eObj = validate(form);
    setErrors(eObj);

    if (Object.keys(eObj).length > 0) {
      // Move focus to first error and announce it
      const firstKey = Object.keys(eObj)[0];
      const el = document.querySelector(`[name="${firstKey}"]`);
      if (el) el.focus();
      if (liveErrorRef.current) {
        liveErrorRef.current.textContent = eObj[firstKey];
      }
      return;
    }

    setSubmitting(true);
    try {
      const payload = { ...form, submittedAt: new Date().toISOString() };

      if (typeof onSubmit === "function") {
        await onSubmit(payload);
      } else {
        // fallback: log and navigate to thank-you (placeholder)
        // replace with your real API call
        // eslint-disable-next-line no-console
        console.log("Inquiry submitted:", payload);
        // optional: navigate to a thank-you page
        // navigate('/thank-you');
      }

      // simple success feedback: clear form
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        mobilephone: "",
        country: "",
        inquiryAbout: "",
        description: "",
        consent: true,
      });
      setErrors({});
      if (liveErrorRef.current) {
        liveErrorRef.current.textContent =
          "Thank you — we will contact you shortly.";
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      if (liveErrorRef.current) {
        liveErrorRef.current.textContent =
          "Something went wrong. Please try again.";
      }
    } finally {
      setSubmitting(false);
    }
  };

  const isValid = Object.keys(validate(form)).length === 0;

  return (
    <section
      aria-labelledby="inquiry-heading"
      className="relative w-full my-12"
      style={{
        fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto",
      }}
    >
      {/* Inline styles for theme/grid & accessible focus */}
      <style>{`
        .square-grid-bg {
          background-image:
            linear-gradient(to right, rgba(15,118,110,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15,118,110,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .panel-bg { background-color: #fffaf5; }
        .focus-ring:focus { outline: none; box-shadow: 0 6px 18px rgba(14,165,164,0.12); border-color: #0ea5a4; }
        @media (prefers-reduced-motion: reduce) {
          .subtle-anim { transition: none !important; }
        }
      `}</style>

      <div className="max-w-screen-2k mx-auto px-6 md:px-12 lg:px-20">
        <div className="relative flex flex-col lg:flex-row gap-6">
          {/* Form panel */}
          <div className="w-full lg:w-3/4 rounded-lg panel-bg square-grid-bg shadow-md border border-[rgba(14,165,164,0.06)] overflow-hidden">
            <div className="p-6 md:p-10 lg:p-12">
              <h2
                id="inquiry-heading"
                className="text-2xl md:text-3xl font-extrabold mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Tell us about your career goals
              </h2>
              <p className="text-sm md:text-base text-[#334155] mb-6">
                Book a consultation with <strong>career consultant</strong> — CV
                review, interview coaching, and tailored pathways to work in
                Germany.
              </p>

              <form id="inquiryForm" onSubmit={handleSubmit} noValidate>
                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col">
                    <span className="text-sm font-medium">
                      First name{" "}
                      <span aria-hidden className="text-red-600">
                        *
                      </span>
                    </span>
                    <input
                      name="firstname"
                      value={form.firstname}
                      onChange={handleChange}
                      className={`mt-2 p-3 border rounded focus-ring ${
                        errors.firstname ? "border-red-500" : "border-gray-300"
                      }`}
                      aria-invalid={errors.firstname ? "true" : "false"}
                      aria-describedby={
                        errors.firstname ? "err-firstname" : undefined
                      }
                      required
                    />
                    {errors.firstname && (
                      <span
                        id="err-firstname"
                        role="alert"
                        className="text-sm text-red-600 mt-1"
                      >
                        {errors.firstname}
                      </span>
                    )}
                  </label>

                  <label className="flex flex-col">
                    <span className="text-sm font-medium">
                      Last name{" "}
                      <span aria-hidden className="text-red-600">
                        *
                      </span>
                    </span>
                    <input
                      name="lastname"
                      value={form.lastname}
                      onChange={handleChange}
                      className={`mt-2 p-3 border rounded focus-ring ${
                        errors.lastname ? "border-red-500" : "border-gray-300"
                      }`}
                      aria-invalid={errors.lastname ? "true" : "false"}
                      aria-describedby={
                        errors.lastname ? "err-lastname" : undefined
                      }
                      required
                    />
                    {errors.lastname && (
                      <span
                        id="err-lastname"
                        role="alert"
                        className="text-sm text-red-600 mt-1"
                      >
                        {errors.lastname}
                      </span>
                    )}
                  </label>
                </fieldset>

                <div className="mt-4">
                  <label className="flex flex-col">
                    <span className="text-sm font-medium">
                      Email{" "}
                      <span aria-hidden className="text-red-600">
                        *
                      </span>
                    </span>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`mt-2 p-3 border rounded focus-ring ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "err-email" : undefined}
                      required
                    />
                    {errors.email && (
                      <span
                        id="err-email"
                        role="alert"
                        className="text-sm text-red-600 mt-1"
                      >
                        {errors.email}
                      </span>
                    )}
                  </label>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col">
                    <span className="text-sm font-medium">
                      Phone number{" "}
                      <span aria-hidden className="text-red-600">
                        *
                      </span>
                    </span>
                    <input
                      name="mobilephone"
                      type="tel"
                      value={form.mobilephone}
                      onChange={handleChange}
                      className={`mt-2 p-3 border rounded focus-ring ${
                        errors.mobilephone
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      aria-invalid={errors.mobilephone ? "true" : "false"}
                      aria-describedby={
                        errors.mobilephone ? "err-mobilephone" : undefined
                      }
                      required
                    />
                    {errors.mobilephone && (
                      <span
                        id="err-mobilephone"
                        role="alert"
                        className="text-sm text-red-600 mt-1"
                      >
                        {errors.mobilephone}
                      </span>
                    )}
                  </label>

                  <label className="flex flex-col">
                    <span className="text-sm font-medium">
                      Country of residence{" "}
                      <span aria-hidden className="text-red-600">
                        *
                      </span>
                    </span>
                    <select
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      className={`mt-2 p-3 border rounded focus-ring ${
                        errors.country ? "border-red-500" : "border-gray-300"
                      }`}
                      aria-invalid={errors.country ? "true" : "false"}
                      aria-describedby={
                        errors.country ? "err-country" : undefined
                      }
                      required
                    >
                      <option value="">Please select</option>
                      {COUNTRIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    {errors.country && (
                      <span
                        id="err-country"
                        role="alert"
                        className="text-sm text-red-600 mt-1"
                      >
                        {errors.country}
                      </span>
                    )}
                  </label>
                </div>

                <div className="mt-4">
                  <label className="flex flex-col">
                    <span className="text-sm font-medium">
                      Inquiry about{" "}
                      <span aria-hidden className="text-red-600">
                        *
                      </span>
                    </span>
                    <select
                      name="inquiryAbout"
                      value={form.inquiryAbout}
                      onChange={handleChange}
                      className={`mt-2 p-3 border rounded focus-ring ${
                        errors.inquiryAbout
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      aria-invalid={errors.inquiryAbout ? "true" : "false"}
                      aria-describedby={
                        errors.inquiryAbout ? "err-inquiryAbout" : undefined
                      }
                      required
                    >
                      <option value="">Please select</option>
                      {INQUIRIES.map((it) => (
                        <option key={it} value={it}>
                          {it}
                        </option>
                      ))}
                    </select>
                    {errors.inquiryAbout && (
                      <span
                        id="err-inquiryAbout"
                        role="alert"
                        className="text-sm text-red-600 mt-1"
                      >
                        {errors.inquiryAbout}
                      </span>
                    )}
                  </label>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium"
                  >
                    Brief description (optional)
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={4}
                    className="mt-2 p-3 border rounded w-full focus-ring border-gray-300"
                    placeholder="Tell us about your background and what you'd like help with..."
                  />
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-sm">
                    I consent to receive communications from{" "}
                    <strong>career consultant</strong> about this enquiry.
                  </label>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-gray-600">
                    By submitting you agree to our{" "}
                    <a
                      href="/privacy-policy"
                      className="underline text-blue-600"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="/terms-and-conditions"
                      className="underline text-blue-600"
                    >
                      Terms &amp; Conditions
                    </a>
                    .
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div
                    aria-live="polite"
                    ref={liveErrorRef}
                    className="text-sm text-left text-red-600"
                  ></div>

                  <div className="ml-auto">
                    <button
                      type="submit"
                      disabled={!isValid || submitting}
                      className={`inline-flex items-center gap-3 px-5 py-3 rounded-md text-white font-semibold ${
                        !isValid || submitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-[#0f172a] hover:scale-[1.01]"
                      }`}
                      aria-disabled={!isValid || submitting}
                    >
                      {submitting ? "Submitting..." : submitText}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right image (hidden on small screens) */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="relative h-full flex items-end justify-center">
              <img
                src="https://rooton.ca/images/my-project-46@3x.png"
                alt="Appointment illustration"
                className="max-w-[320px] object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
