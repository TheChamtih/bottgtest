import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AudienceSection from "@/components/AudienceSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { fadeIn } from "@/lib/animations";

export default function Home() {
  return (
    <div className="bg-background text-white font-sans min-h-screen overflow-x-hidden">
      <div className="crypto-bg-pattern">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        >
          <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-primary/10 rounded-full blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: "1s" }}></div>
        </motion.div>
      </div>
      
      <Navbar />
      
      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <AudienceSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}
