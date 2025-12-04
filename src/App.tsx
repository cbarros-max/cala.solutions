import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Pillars } from "./components/Pillars";
import { Services } from "./components/Services";
import { Clients } from "./components/Clients";
import { WhyUs } from "./components/WhyUs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Pillars />
      <Services />
      <Clients />
      <WhyUs />
      <Contact />
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
