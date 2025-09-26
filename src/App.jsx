import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Coaching from "./pages/Coaching";
import Team from "./pages/Team";
import MoreServices from "./pages/MoreServices";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import Review from "./pages/Review";
import HiddenPages from "./pages/HiddenPages";
import ForexRemittancesPage from "./pages/services/ForexRemittancesPage";
import AccommodationPage from "./pages/services/AccommodationPage";
import EducationLoanPage from "./pages/services/EducationLoanPage";
import MedicalInsurancePage from "./pages/services/MedicalInsurancePage";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        {/* Header सीधे यहाँ */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/team" element={<Team />} />
            <Route path="/more-services" element={<MoreServices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/reviews" element={<Review />} />
            <Route path="/hidden-pages" element={<HiddenPages />} />
            <Route
              path="/services/forex-remittance"
              element={<ForexRemittancesPage />}
            />
            <Route
              path="/services/accommodation"
              element={<AccommodationPage />}
            />
            <Route
              path="/services/education-loan"
              element={<EducationLoanPage />}
            />
            <Route
              path="/services/medical-insurance"
              element={<MedicalInsurancePage />}
            />
          </Routes>
        </main>

        {/* Footer सीधे यहाँ */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
