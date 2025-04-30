import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { pricingPlans } from "@/lib/data";
import { CheckCircle2, XCircle, Coins, Award, Crown, TrendingUp } from "lucide-react";

// Фоновая анимация для секции
const BackgroundAnimation = () => (
  <div className="absolute inset-0 overflow-hidden -z-10 opacity-20 pointer-events-none">
    {/* Сетка точек */}
    <div className="absolute inset-0" style={{ 
      backgroundImage: 'radial-gradient(circle, rgba(121, 40, 202, 0.2) 1px, transparent 1px)',
      backgroundSize: '30px 30px' 
    }}></div>
    
    {/* Анимированные элементы */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-gradient-to-r from-primary/5 to-secondary/5"
        style={{
          width: `${100 + i * 30}px`,
          height: `${100 + i * 30}px`,
          top: `${15 + (i % 3) * 30}%`,
          left: `${10 + i * 15}%`,
          filter: 'blur(40px)',
          zIndex: -1
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 15 + i * 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    ))}
  </div>
);

export default function PricingSection() {
  const PlanIcons = [
    <Coins className="w-6 h-6 text-primary" />,
    <Award className="w-6 h-6 text-primary" />,
    <Crown className="w-6 h-6 text-primary" />
  ];

  return (
    <section className="py-16 md:py-24 relative" id="pricing">
      {/* Фоновые элементы */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl opacity-30"></div>
      <BackgroundAnimation />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div 
          className="text-center mb-16"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 relative mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/30 animate-pulse"></div>
              <div className="absolute inset-1 rounded-full bg-background flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </div>
          </motion.div>
          
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            Обери свій <span className="gradient-text">тариф</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeIn}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Інвестуй у своє майбутнє з нашими доступними тарифними планами
          </motion.p>
          
          {/* Декоративная линия */}
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"
          ></motion.div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`bg-card/20 backdrop-blur-sm rounded-xl overflow-hidden relative card
                ${plan.popular ? 'border-2 border-primary/50 shadow-lg shadow-primary/20' : 'border border-primary/20'} 
                ${plan.popular ? 'md:-translate-y-4 z-10' : ''}
              `}
            >
              {/* Фоновые эффекты */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-30"></div>
              
              {/* Метка популярности */}
              {plan.popular && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="absolute top-0 left-0 right-0 text-center py-2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium shadow-md"
                >
                  <div className="flex items-center justify-center">
                    <Crown className="w-4 h-4 mr-1" />
                    <span>Популярний вибір</span>
                  </div>
                </motion.div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                <div className="flex items-center mb-4">
                  <motion.div 
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center mr-3 shadow-md"
                  >
                    {PlanIcons[index]}
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-display font-semibold">{plan.title}</h3>
                </div>
                
                <div className="flex items-baseline mb-6">
                  <motion.span 
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                  >
                    {plan.price.amount}
                  </motion.span>
                  <span className="text-lg ml-1 text-gray-300">{plan.price.currency}</span>
                </div>
                
                {/* Декоративный разделитель */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-6"></div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + featureIndex * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      className={`flex items-start ${feature.included ? '' : 'opacity-50'}`}
                    >
                      {feature.included ? (
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        </motion.div>
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-200' : 'text-gray-500'}>
                        {feature.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="p-8 pt-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    className={`w-full py-4 rounded-full text-white font-medium text-center relative overflow-hidden group
                      ${plan.popular 
                        ? 'bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow' 
                        : plan.index === 2 
                          ? 'bg-transparent border border-primary hover:bg-primary/10 transition-colors' 
                          : 'bg-primary/80 hover:bg-primary transition-colors'}
                    `}
                  >
                    {/* Эффект нажатия для популярного плана */}
                    {plan.popular && (
                      <span className="absolute inset-0 w-full h-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    )}
                    
                    <span className="relative flex items-center justify-center gap-2">
                      {plan.buttonText}
                      {plan.popular && (
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                        >
                          →
                        </motion.span>
                      )}
                    </span>
                  </Button>
                </motion.div>
                
                {/* Дополнительная информация для популярного плана */}
                {plan.popular && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-xs text-center mt-3 text-gray-400"
                  >
                    Найкраще співвідношення ціна/якість
                  </motion.p>
                )}
              </div>
              
              {/* Декоративный элемент в углу карточки */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                {plan.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-16 h-16 bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Гарантия возврата денег */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 flex items-center justify-center">
            <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            100% гарантія повернення коштів протягом 7 днів, якщо контент не відповідає опису
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
