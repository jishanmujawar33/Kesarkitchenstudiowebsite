import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Collections } from "./components/Collections";
import { Gallery } from "./components/Gallery";
import { WhyUs } from "./components/WhyUs";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Collections />
      <Gallery />
      <WhyUs />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
