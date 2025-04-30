import { useState } from "react";
import { Link } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const navLinks = [
    { href: "#features", label: "Що отримаєш" },
    { href: "#audience", label: "Для кого" },
    { href: "#pricing", label: "Тарифи" },
    { href: "#faq", label: "FAQ" }
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-display font-bold cursor-pointer">
            <span className="text-primary">Crypto</span>
            <span className="text-white">Brander</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div>
          <Button 
            variant="default" 
            className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium glow-button"
            onClick={() => scrollToSection("#pricing")}
          >
            Купити гайд
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-darkBlue/95 backdrop-blur-lg"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href}
                  className="block text-gray-300 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                variant="default" 
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium glow-button"
                onClick={() => scrollToSection("#pricing")}
              >
                Купити гайд
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
