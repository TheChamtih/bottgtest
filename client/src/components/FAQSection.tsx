import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { faqItems } from "@/lib/data";
import { HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  
  const handleAccordionChange = (value: string) => {
    setOpenItem(value === openItem ? null : value);
  };
  
  return (
    <section className="py-16 md:py-24 relative" id="faq">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95 -z-10"></div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute -top-10 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      {/* Плавающие символы */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div 
            key={`symbol-${i}`}
            className="absolute text-primary/10 text-6xl font-bold"
            style={{ 
              top: `${20 + i * 25}%`, 
              left: `${5 + i * 30}%`,
              rotate: i * 15
            }}
            initial={{ opacity: 0.3, y: 0 }}
            animate={{ 
              opacity: [0.3, 0.5, 0.3], 
              y: [0, -20, 0],
              rotate: [i * 15, i * 15 + 5, i * 15]
            }}
            transition={{ 
              duration: 4 + i, 
              repeat: Infinity, 
              repeatType: "mirror"
            }}
          >
            {["?", "₿", "?"][i]}
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 relative mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 animate-pulse"></div>
              <div className="absolute inset-1 rounded-full bg-background flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-primary animate-bounce" />
              </div>
            </div>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Часті <span className="gradient-text">запитання</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Відповіді на найпоширеніші запитання про наш продукт
          </p>
          
          {/* Декоративная линия */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </motion.div>
        
        <motion.div 
          variants={fadeIn}
          className="max-w-3xl mx-auto space-y-4"
        >
          <Accordion 
            type="single" 
            collapsible 
            className="w-full"
            value={openItem || undefined}
            onValueChange={handleAccordionChange}
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card/30 backdrop-blur-sm rounded-xl border border-primary/20 overflow-hidden mb-6 shadow-lg shadow-primary/5 transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-5 text-left flex justify-between items-center hover:no-underline group">
                    <div className="flex items-center">
                      <motion.div 
                        className="w-6 h-6 rounded-full bg-primary/20 mr-3 flex items-center justify-center text-xs font-semibold"
                        animate={{ scale: openItem === `item-${index}` ? 1.2 : 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {index + 1}
                      </motion.div>
                      <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                        {item.question}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  
                  <AnimatePresence>
                    {openItem === `item-${index}` && (
                      <AccordionContent 
                        forceMount
                        className="px-6 pb-4 text-gray-300"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="pl-9">
                            <div className="border-l-2 border-primary/30 pl-4 py-2">
                              {item.answer}
                            </div>
                          </div>
                        </motion.div>
                      </AccordionContent>
                    )}
                  </AnimatePresence>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
          
          {/* Дополнительный призыв к действию */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-300 mb-2">Не знайшли відповідь на своє питання?</p>
            <a 
              href="https://t.me/cryptobrander" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <span className="mr-2">Напишіть нам в Telegram</span>
              <motion.span 
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
