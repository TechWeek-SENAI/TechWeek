import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Schedule } from "@/components/Schedule";
import { Speakers } from "@/components/Speakers";
import { Sponsors } from "@/components/Sponsors";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Schedule />
      <Speakers />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Index;
