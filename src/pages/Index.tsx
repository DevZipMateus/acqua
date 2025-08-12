
import HeroSection from "@/components/HeroSection";
import AcquaAboutSection from "@/components/AcquaAboutSection";
import AcquaServicesSection from "@/components/AcquaServicesSection";
import AcquaTestimonialsSection from "@/components/AcquaTestimonialsSection";
import AcquaLocationSection from "@/components/AcquaLocationSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <div id="hero" className="w-full">
          <HeroSection />
        </div>
        <div id="about" className="w-full">
          <AcquaAboutSection />
        </div>
        <div id="services" className="w-full">
          <AcquaServicesSection />
        </div>
        <div id="testimonials" className="w-full">
          <AcquaTestimonialsSection />
        </div>
        <div id="location" className="w-full">
          <AcquaLocationSection />
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
