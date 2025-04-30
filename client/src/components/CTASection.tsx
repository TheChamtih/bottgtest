import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Rocket, Download, ArrowRight, ArrowDown } from "lucide-react";

export default function CTASection() {
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

  // SVG паттерны для фона
  const GridPattern = () => (
    <svg className="absolute inset-0 -z-10 h-full w-full opacity-10">
      <defs>
        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 0 L40 0 L40 40 L0 40 Z" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
        </pattern>
        <radialGradient id="radial-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      <rect width="100%" height="100%" fill="url(#radial-gradient)" />
    </svg>
  );

  return (
    <section className="py-16 md:py-24 relative" id="cta">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent"></div>
        <GridPattern />
        
        {/* Анимированные декоративные элементы */}
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>
      
      {/* Летающие криптосимволы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/5 font-bold"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              fontSize: `${2 + (i % 3)}rem`,
              zIndex: 0
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: [0.5, 0.8, 0.5], 
              y: [0, -20, 0], 
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              duration: 5 + i, 
              repeat: Infinity, 
              repeatType: "loop",
              delay: i * 0.5
            }}
          >
            {["₿", "Ξ", "Ð", "₮", "◎", "⟠"][i]}
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div 
          variants={fadeIn}
          className="max-w-4xl mx-auto bg-gradient-to-br from-card/60 to-background/60 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_25px_rgba(121,40,202,0.25)] overflow-hidden"
        >
          {/* Верхняя декоративная полоса */}
          <div className="h-2 w-full bg-gradient-to-r from-primary via-secondary to-primary"></div>
          
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-6 inline-block"
              >
                <div className="w-20 h-20 relative mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 animate-pulse"></div>
                  <div className="absolute inset-2 rounded-full bg-card flex items-center justify-center">
                    <Rocket className="w-10 h-10 text-primary" />
                  </div>
                </div>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Готовий почати свій шлях у{" "}
                <div className="inline-block relative">
                  <span className="gradient-text">крипто-маркетингу</span>
                  <motion.svg 
                    width="100%" 
                    height="8" 
                    viewBox="0 0 100 8" 
                    className="absolute -bottom-2 left-0 right-0"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <path 
                      d="M0,4 Q25,0 50,4 T100,4" 
                      fill="none" 
                      stroke="url(#gradient-line)" 
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="var(--primary)" />
                        <stop offset="50%" stopColor="var(--secondary)" />
                        <stop offset="100%" stopColor="var(--primary)" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </div>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Отримай свій гайд сьогодні та створи успішний канал вже завтра
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg"
                className="w-full md:w-auto px-8 py-6 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg transition-all glow-button text-center group relative overflow-hidden"
                onClick={() => scrollToSection("#pricing")}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl"></span>
                <span className="relative flex items-center justify-center gap-2">
                  Почати зараз
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="w-full md:w-auto px-8 py-6 rounded-full bg-transparent border border-primary/50 text-white font-medium text-lg hover:bg-primary/10 transition-all text-center flex items-center gap-2 group"
              >
                Отримати демо
                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                >
                  <Download className="w-5 h-5 group-hover:text-primary transition-colors" />
                </motion.span>
              </Button>
            </motion.div>
            
            {/* Дополнительные стимулы */}
            <motion.div 
              className="mt-10 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-sm mb-1">Вже більше 1200+ задоволених покупців</p>
              <div className="flex justify-center mt-2 gap-1 text-yellow-400 text-xl">
                {[...Array(5)].map((_, i) => (
                  <motion.span 
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.7 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Анимированная стрелка вниз */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
            className="p-2 rounded-full border border-primary/20 bg-card/30 backdrop-blur-sm cursor-pointer"
            onClick={() => scrollToSection("#footer")}
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
