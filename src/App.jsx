import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMission from "./components/AboutMission";
import Academics from "./components/Academics";
import CampusLife from "./components/CampusLife";
import Testimonials from "./components/Testimonials";
import Admissions from "./components/Admissions";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="site-shell" id="top">
      <Navbar />
      <main>
        <Hero />
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
