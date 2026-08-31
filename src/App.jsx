import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImmersiveJourney from "./components/ImmersiveJourney";
import AboutMission from "./components/AboutMission";
import Academics from "./components/Academics";
import CampusLife from "./components/CampusLife";
import Testimonials from "./components/Testimonials";
import Admissions from "./components/Admissions";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ImmersiveJourney />
        <AboutMission />
        <Academics />
        <CampusLife />
        <Testimonials />
        <Admissions />
      </main>
      <Footer />
    </div>
  );
}
