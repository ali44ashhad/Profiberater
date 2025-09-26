import React from "react";

const Disclaimer = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Disclaimer & Policy
            </h1>
            <p className="text-lg text-gray-600">
              Important legal information about our services and your
              responsibilities.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Website Disclaimer
                  </h2>
                  <p className="text-gray-600 mb-4">
                    The information contained on this website is for general
                    information purposes only. While we endeavor to keep the
                    information up to date and correct, we make no
                    representations or warranties of any kind, express or
                    implied, about the completeness, accuracy, reliability,
                    suitability, or availability with respect to the website or
                    the information, products, services, or related graphics
                    contained on the website for any purpose.
                  </p>
                  <p className="text-gray-600">
                    Any reliance you place on such information is therefore
                    strictly at your own risk. In no event will we be liable for
                    any loss or damage including without limitation, indirect or
                    consequential loss or damage, or any loss or damage
                    whatsoever arising from loss of data or profits arising out
                    of, or in connection with, the use of this website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Professional Services Disclaimer
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Our coaching and consulting services are designed to provide
                    guidance and support for personal and professional
                    development. However, we do not guarantee specific results
                    or outcomes. The success of our services depends on multiple
                    factors including client commitment, participation, and
                    individual circumstances.
                  </p>
                  <p className="text-gray-600">
                    Our services are not a substitute for professional medical,
                    psychological, financial, or legal advice. Clients are
                    encouraged to seek appropriate professional advice for
                    specific concerns in these areas.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Privacy Policy
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      We are committed to protecting your privacy and personal
                      information. This section outlines how we collect, use,
                      and safeguard your data.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Information Collection
                    </h3>
                    <p className="text-gray-600">
                      We collect information that you provide directly to us,
                      including name, email address, phone number, and other
                      contact details when you use our services or contact us.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Data Usage
                    </h3>
                    <p className="text-gray-600">
                      Your information is used to provide and improve our
                      services, communicate with you, and comply with legal
                      obligations. We do not sell your personal information to
                      third parties.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Terms of Service
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      By using our website and services, you agree to the
                      following terms and conditions:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>
                        You are responsible for maintaining the confidentiality
                        of your account
                      </li>
                      <li>
                        You agree to use our services for lawful purposes only
                      </li>
                      <li>
                        We reserve the right to modify or discontinue services
                        at any time
                      </li>
                      <li>
                        All content on this website is protected by copyright
                        laws
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Contact Information
                  </h2>
                  <p className="text-gray-600">
                    If you have any questions about this disclaimer or our
                    policies, please contact us at legal@rooton.ca or through
                    our contact page.
                  </p>
                </section>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-yellow-700">
                    <strong>Note:</strong> This disclaimer and policy document
                    is provided for informational purposes only and does not
                    constitute legal advice. We recommend consulting with a
                    legal professional for specific legal concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;
