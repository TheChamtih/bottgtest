import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer, slideInUp } from "@/lib/animations";
import CryptoShapes from "./CryptoShapes";

export default function HeroSection() {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollY = window.scrollY;
        const sectionTop = sectionRef.current.offsetTop;
        const opacity = Math.max(0, 1 - scrollY / 500);
        
        controls.start({ opacity });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section 
      ref={sectionRef}
      className="pt-28 pb-20 md:pt-36 md:pb-32 relative overflow-hidden min-h-screen flex items-center" 
      id="hero"
    >
      {/* Градиентный фон с размытием */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background to-background z-0"></div>
      
      {/* Анимированные криптовалютные фигуры */}
      <CryptoShapes />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-4"
          >
            <div className="inline-block animate-float mb-2">
              <div className="relative w-20 h-20 mx-auto">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                <div className="absolute inset-2 bg-primary/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">₿</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.h1 
            variants={fadeIn}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight"
          >
            Запусти свій Telegram-канал під <span className="gradient-text">крипту</span> та заробляй на ньому з першого місяця
          </motion.h1>
          
          <motion.p 
            variants={fadeIn}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            PDF-гайд, шаблони, консультації від реального автора, що пройшов цей шлях
          </motion.p>
          
          <motion.div 
            variants={slideInUp}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
          >
            <Button 
              size="lg" 
              className="w-full md:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg transition-all glow-button group relative overflow-hidden"
              onClick={() => scrollToSection("#pricing")}
            >
              <span className="mr-2">💰</span>
              Купити гайд
              <motion.span 
                className="absolute inset-0 rounded-full bg-white" 
                initial={{ scale: 0, opacity: 0 }} 
                whileHover={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full md:w-auto px-8 py-3 rounded-full bg-transparent border border-primary/50 text-white font-medium text-lg hover:bg-primary/10 transition-all group relative overflow-hidden"
            >
              <span className="mr-2">📥</span>
              Отримати демо-версію
              <motion.span 
                className="absolute inset-0 rounded-full bg-primary/20" 
                initial={{ scale: 0, opacity: 0 }} 
                whileHover={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </Button>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            className="mt-12 relative"
          >
            <div className="w-full h-64 md:h-80 bg-card/40 backdrop-blur-sm rounded-2xl overflow-hidden relative border border-primary/20 shadow-[0_0_15px_rgba(121,40,202,0.3)]">
              {/* Анимированные линии фона */}
              <div className="absolute inset-0 overflow-hidden opacity-30">
                {[...Array(6)].map((_, i) => (
                  <motion.div 
                    key={i}
                    className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                    style={{ 
                      top: `${15 + i * 15}%`, 
                      left: 0, 
                      right: 0 
                    }}
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ 
                      duration: 8 + i * 2, 
                      repeat: Infinity, 
                      ease: "linear",
                      delay: i * 0.5
                    }}
                  />
                ))}
                
                {[...Array(8)].map((_, i) => (
                  <motion.div 
                    key={`v-${i}`}
                    className="absolute w-px h-full bg-gradient-to-b from-transparent via-secondary to-transparent"
                    style={{ 
                      left: `${10 + i * 12}%`, 
                      top: 0, 
                      bottom: 0 
                    }}
                    initial={{ y: "-100%" }}
                    animate={{ y: "100%" }}
                    transition={{ 
                      duration: 10 + i * 1.5, 
                      repeat: Infinity, 
                      ease: "linear",
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="inline-block animate-float mb-4">
                    <motion.div
                      animate={{ 
                        rotateY: [0, 180, 360],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        repeatType: "loop"
                      }}
                    >
                      <svg className="w-20 h-20 mx-auto animate-glow" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 0C397.29 0 512 114.71 512 256C512 397.29 397.29 512 256 512C114.71 512 0 397.29 0 256C0 114.71 114.71 0 256 0Z" fill="#6D28D9" fillOpacity="0.2"/>
                        <path d="M290.2 152.4H228.3V336.7H290.2V152.4Z" fill="#7928ca"/>
                        <path d="M332.1 208.2H270.2V336.7H332.1V208.2Z" fill="#3b82f6"/>
                        <path d="M248.3 264H186.4V336.7H248.3V264Z" fill="#10b981"/>
                      </svg>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-display font-semibold mb-2 text-white">Почни свій шлях у крипто-маркетингу</h3>
                    <p className="text-gray-300 max-w-md mx-auto">Від першого підписника до перших доларів</p>
                  </motion.div>
                  
                  <motion.div 
                    className="flex justify-center mt-5 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {["Стратегія", "Монетизація", "Спільнота"].map((tag, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-3 py-1 rounded-full text-xs bg-primary/20 text-white border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Анимированный разделитель */}
      <div className="absolute bottom-0 left-0 right-0 neon-divider"></div>
      
      {/* Декоративные элементы на заднем плане */}
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-10 w-60 h-60 bg-secondary/5 rounded-full blur-3xl"></div>
    </section>
  );
}
