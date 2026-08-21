import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMission from "./components/AboutMission";
import Academics from "./components/Academics";
import CampusLife from "./components/CampusLife";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <AboutMission />
        <Academics />
        <CampusLife />
        <Testimonials />
      </main>
    </div>
  );
}
