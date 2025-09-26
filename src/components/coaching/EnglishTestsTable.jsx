import React from "react";

const EnglishTestsTable = () => {
  // Table data
  const tests = [
    {
      exam: "PTE",
      fullName: "Pearson Test of English",
      purpose: "Student visa; college admissions",
      modules: "Speaking & Writing, Reading, Listening",
      duration: "2 hours",
      modes: "Only at a Test Centre, Only Computer-delivered",
      sessions: "Single session",
      availability: "Every day (depends on the test centre)",
      registration: "Up to 24 hours in advance",
      reTest: "After receiving score report (2-3 days)",
      scoring:
        "Only automated, Overall: out of 90, Individual modules: out of 90",
      results: "In 48 hours",
      validity: "2 years",
      cost: "₹ 17,000",
      questionTypes: "S: 5 types, W: 2 types, R: 5 types, L: 8 types",
      numberOfQuestions: "Total 52-73, S: 25-31, W: 2-4, R: 13-18, L: 12-20",
    },
    {
      exam: "IELTS",
      fullName: "International English Language Testing System",
      purpose: "Student visa; college admissions",
      modules: "Listening, Reading, Writing, Speaking",
      duration: "LRW: 2 hours 40 mins, S: 11-14 mins",
      modes: "Only at a Test Centre, Paper-based and Computer-delivered",
      sessions: "Two sessions: 1 for LRW, 1 for S",
      availability: "CDT: every day, PBT: 4-5 times a month",
      registration: "CDT: 4-5 days in advance, PBT: up to 15 days in advance",
      reTest: "CDT: 3 days, PBT: no limit",
      scoring:
        "Both human and automated, Overall: out of band 9.0, Individual modules: out of band 9.0",
      results: "CDT: 3-4 days, PBT: 13 days",
      validity: "2 years",
      cost: "₹ 17,000",
      questionTypes: "L: 8-9 types, R: 10-12 types, W: 2 types, S: 3 parts",
      numberOfQuestions: "L: 40, R: 40, W: 2, S: (P1: 9-10; P2: 1; P3: 5-6)",
    },
    {
      exam: "TOEFL",
      fullName: "Test of English as a Foreign Language",
      purpose: "Student visa; college admissions",
      modules: "Reading, Listening, Speaking, Writing",
      duration: "2 hours",
      modes: "At a Test Centre and At Home, Paper-based and Computer-delivered",
      sessions:
        "Single session at test centre or Home edition, Two sessions for Paper edition",
      availability:
        "At test centre: 60+ times a year, Home edition: 24 hrs / 4 days a week, Paper edition: once a month (3rd Saturday)",
      registration:
        "At test centre: 3-5 days in advance, Home edition: 1-2 days in advance, Paper edition: 7-10 days in advance",
      reTest: "3 days",
      scoring:
        "Both human and automated, Overall: out of 120 points, Individual modules: out of 30 points",
      results:
        "At test centre: 4-8 days, Home edition: 4-8 days, Paper edition: 11-13 days",
      validity: "2 years",
      cost: "₹ 16,900 | $ 195",
      questionTypes: "R: MCQs, L: MCQs, S: 4 types, W: 2 types",
      numberOfQuestions: "R: 20, L: 28, S: 4, W: 2",
    },
    // Add DUOLINGO, CELPIP, CAEL similarly...
  ];

  return (
    <div className="bg-[#F3F3F3]">
      <div className="px-6 md:px-12 lg:px-[80px] py-10 md:py-[100px]">
        {/* Section Titles */}
        <h2 className="text-golden-yellow gradient-text text-sm font-semibold tracking-[2.8px] md:text-xl md:tracking-[4px]">
          Comparative Guide to English Proficiency Tests
        </h2>
        <h2 className="max-w-[340px] md:max-w-none text-primary-text gradient-text font-extrabold text-[1.75rem] md:text-5xl !leading-[1.42] mt-2">
          Essential Info for Test-Takers
        </h2>

        {/* Table Container */}
        <div className="mt-10 overflow-auto max-h-[500px]">
          <div className="border border-[#D2D2D2] rounded-lg bg-white shadow-md">
            <table className="min-w-full text-left border-collapse">
              <thead className="sticky top-0 bg-white z-10">
                <tr className="text-left font-bold">
                  <th className="sticky left-0 bg-white z-20 px-4 py-2 border-r border-[#D2D2D2] min-w-[120px]">
                    Exam Name
                  </th>
                  <th className="px-4 py-2 min-w-[200px]">Full Name</th>
                  <th className="px-4 py-2 min-w-[200px]">Purpose</th>
                  <th className="px-4 py-2 min-w-[200px]">
                    Modules & Skills Tested
                  </th>
                  <th className="px-4 py-2 min-w-[200px]">Duration</th>
                  <th className="px-4 py-2 min-w-[200px]">Modes</th>
                  <th className="px-4 py-2 min-w-[200px]">Sessions</th>
                  <th className="px-4 py-2 min-w-[200px]">Test Availability</th>
                  <th className="px-4 py-2 min-w-[200px]">Test Registration</th>
                  <th className="px-4 py-2 min-w-[200px]">
                    Re-Test Wait Period
                  </th>
                  <th className="px-4 py-2 min-w-[200px]">Scoring</th>
                  <th className="px-4 py-2 min-w-[200px]">Results</th>
                  <th className="px-4 py-2 min-w-[200px]">Score Validity</th>
                  <th className="px-4 py-2 min-w-[200px]">Cost</th>
                  <th className="px-4 py-2 min-w-[200px]">
                    Types of Questions
                  </th>
                  <th className="px-4 py-2 min-w-[200px]">
                    Number of Questions
                  </th>
                </tr>
              </thead>
              <tbody>
                {tests.map((test, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="sticky left-0 bg-white font-bold border-r border-[#D2D2D2] px-4 py-2">
                      {test.exam}
                    </td>
                    <td className="px-4 py-2">{test.fullName}</td>
                    <td className="px-4 py-2">{test.purpose}</td>
                    <td className="px-4 py-2">{test.modules}</td>
                    <td className="px-4 py-2">{test.duration}</td>
                    <td className="px-4 py-2">{test.modes}</td>
                    <td className="px-4 py-2">{test.sessions}</td>
                    <td className="px-4 py-2">{test.availability}</td>
                    <td className="px-4 py-2">{test.registration}</td>
                    <td className="px-4 py-2">{test.reTest}</td>
                    <td className="px-4 py-2">{test.scoring}</td>
                    <td className="px-4 py-2">{test.results}</td>
                    <td className="px-4 py-2">{test.validity}</td>
                    <td className="px-4 py-2">{test.cost}</td>
                    <td className="px-4 py-2">{test.questionTypes}</td>
                    <td className="px-4 py-2">{test.numberOfQuestions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnglishTestsTable;
