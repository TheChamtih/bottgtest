import { motion, useMotionValue, useTransform } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { features } from "@/lib/data";

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 relative" id="features">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="absolute right-0 top-1/4 w-40 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute left-0 bottom-1/4 w-60 h-60 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      
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
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 relative mx-auto">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 animate-pulse"></div>
              <div className="absolute inset-1 rounded-lg bg-background flex items-center justify-center">
                <span className="text-2xl">📦</span>
              </div>
            </div>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Що всередині <span className="gradient-text">CryptoBrander Kit</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Повний комплект інструментів для запуску та монетизації твого крипто-каналу в Telegram
          </p>
          
          {/* Animated lines */}
          <div className="max-w-2xl mx-auto relative">
            <motion.div
              className="absolute h-px w-40 left-0 right-0 mx-auto"
              style={{ bottom: "-14px" }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-transparent via-primary to-transparent h-full"></div>
            </motion.div>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  // Create hover animation effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);
  
  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    
    x.set(mouseX);
    y.set(mouseY);
  }
  
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div 
      variants={fadeIn}
      className="relative"
      style={{ perspective: 2000 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="card bg-card/30 backdrop-blur-sm border border-primary/20 rounded-xl p-6 flex flex-col h-full shadow-[0_0_15px_rgba(121,40,202,0.1)]"
      >
        {/* Animated gradient border on hover */}
        <div 
          className="absolute inset-0 rounded-xl z-[-1] opacity-0 group-hover:opacity-30 transition-opacity duration-500" 
          style={{ background: "linear-gradient(45deg, var(--primary), transparent, var(--secondary))" }}
        ></div>
        
        {/* Icon with glow effect */}
        <motion.div 
          className="w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center shadow-lg"
          style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: "0 0 20px rgba(121, 40, 202, 0.5)",
            transition: { duration: 0.2 }
          }}
        >
          <div className="text-primary">
            {feature.icon}
          </div>
        </motion.div>
        
        {/* Content with 3D transform */}
        <motion.h3 
          className="text-xl font-display font-semibold mb-2 text-white"
          style={{ transformStyle: "preserve-3d", transform: "translateZ(10px)" }}
        >
          {feature.title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-300 flex-grow"
          style={{ transformStyle: "preserve-3d", transform: "translateZ(5px)" }}
        >
          {feature.description}
        </motion.p>
        
        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-700 rounded-bl-xl"></div>
      </motion.div>
    </motion.div>
  );
}
