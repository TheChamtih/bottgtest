import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { audienceItems } from "@/lib/data";

// Функция для создания SVG волн для фона секции
const WaveBackground = () => (
  <div className="absolute inset-0 overflow-hidden -z-10 opacity-10">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <motion.path 
        initial={{ opacity: 0.3, pathLength: 0 }}
        animate={{ opacity: 0.5, pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        fill="none" stroke="url(#gradientWave1)" strokeWidth="3"
        d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,266.7C672,288,768,288,864,272C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
      <motion.path 
        initial={{ opacity: 0.2, pathLength: 0 }}
        animate={{ opacity: 0.6, pathLength: 1 }}
        transition={{ duration: 4, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        fill="none" stroke="url(#gradientWave2)" strokeWidth="2"
        d="M0,224L48,224C96,224,192,224,288,208C384,192,480,160,576,165.3C672,171,768,213,864,234.7C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
      <defs>
        <linearGradient id="gradientWave1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--secondary)" />
        </linearGradient>
        <linearGradient id="gradientWave2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--secondary)" />
          <stop offset="100%" stopColor="var(--primary)" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default function AudienceSection() {
  return (
    <section className="py-16 md:py-24 relative" id="audience">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95 -z-10"></div>
      <WaveBackground />
      
      {/* Декоративные светящиеся шары */}
      <div className="absolute top-20 right-10 w-36 h-36 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-36 h-36 bg-secondary/5 rounded-full blur-3xl"></div>
      
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
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 relative mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/30 animate-pulse"></div>
              <div className="absolute inset-1 rounded-full bg-background flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
            </div>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Кому буде <span className="gradient-text">корисно</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Наш продукт створений спеціально для тих, хто хоче побудувати прибутковий крипто-канал
          </p>
          
          {/* Декоративная линия под заголовком */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {audienceItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(121, 40, 202, 0.2)",
                transition: { duration: 0.2 }
              }}
              className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-primary/20 card relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-10 -z-10"
                initial={{ background: "radial-gradient(circle at 10% 10%, var(--primary) 0%, transparent 70%)" }}
                whileHover={{ 
                  background: "radial-gradient(circle at 10% 10%, var(--primary) 0%, transparent 100%)",
                  opacity: 0.2
                }}
                transition={{ duration: 1 }}
              />
              
              <div className="flex items-start">
                <motion.div 
                  className="mr-4 mt-1"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                    <motion.div 
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>
                </motion.div>
                
                <div>
                  <motion.h3 
                    className="text-xl font-display font-semibold mb-2 text-white bg-clip-text"
                    whileHover={{ color: "transparent", backgroundImage: "linear-gradient(90deg, #7928ca, #3b82f6)" }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-gray-300">{item.description}</p>
                  
                  {/* Subtle horizontal line */}
                  <motion.div 
                    className="w-0 h-0.5 bg-gradient-to-r from-primary/50 to-transparent mt-3"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Нижний декоративный разделитель */}
        <div className="h-px w-full max-w-5xl mx-auto mt-20 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      </motion.div>
    </section>
  );
}
