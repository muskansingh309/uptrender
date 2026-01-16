import HeroSection from "@/components/sections/hero";
import FeaturesSection from "@/components/sections/features";
import AboutSection from "@/components/sections/about";
import TeamSection from "@/components/sections/team";
import ServicesSection from "@/components/sections/services";
import Achievements from "@/components/sections/achievements";
import PortfolioSection from "@/components/sections/portfolio";
import BenefitsSection from "@/components/sections/benefits";
import Testimonials from "@/components/sections/testimonials";
import HowWeWork from "@/components/sections/how-we-work";
import TemplateSection from "@/components/sections/template";
import BlogSection from "@/components/sections/blog";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Navbar from "@/components/sections/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* <Header /> */}
      <Navbar/>
      <HeroSection />
      <FeaturesSection />
       <BenefitsSection />
      <AboutSection />
       <ServicesSection />
        <BlogSection />
        <Testimonials />
      {/* <TeamSection />
      <Achievements />
      <PortfolioSection />
      <HowWeWork />
      <TemplateSection /> */}
      <ContactSection />
      <Footer />
    </main>
  );
}
