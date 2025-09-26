import React from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

const HiddenPages = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center text-primary-500">
                <Lock className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hidden Pages
            </h1>
            <p className="text-lg text-gray-600">
              These pages are reserved for future use and development. They are
              not accessible through the main navigation but are part of our
              strategic planning for upcoming features and services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <EyeOff className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Under Development
                </h2>
                <p className="text-gray-600">
                  These pages are currently in planning phase and will be
                  developed as part of our future expansion plans.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <Eye className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Page 1</h3>
                  <p className="text-gray-600 text-sm">
                    Reserved for upcoming service expansion
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <Eye className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Page 2</h3>
                  <p className="text-gray-600 text-sm">
                    Reserved for new feature implementation
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-700 text-sm text-center">
                  <strong>Note:</strong> These pages are part of our strategic
                  roadmap and will be developed based on client needs and market
                  demands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HiddenPages;
