import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
