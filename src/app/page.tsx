import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import Usecase from "./components/Usecase";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <ServicesSection/>
      <Usecase/>
      <TestimonialsSection/>
      <Footer/>
    </>
  );
}
