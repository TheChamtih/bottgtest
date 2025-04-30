import { motion } from "framer-motion";
import { Link } from "wouter";
import { Mail, Clock, MessageSquare, Camera, ExternalLink, ArrowUp, Heart } from "lucide-react";
import { fadeIn } from "@/lib/animations";

// Создаем компонент световой волны для фона
const LightWave = () => (
  <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-20 -z-10">
    <svg
      className="absolute bottom-0 w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <motion.path
        initial={{ opacity: 0.1, d: "M0,128L48,138.7C96,149,192,171,288,186.7C384,203,480,213,576,202.7C672,192,768,160,864,165.3C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
        animate={{ 
          opacity: 0.2,
          d: [
            "M0,128L48,138.7C96,149,192,171,288,186.7C384,203,480,213,576,202.7C672,192,768,160,864,165.3C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,208C672,235,768,245,864,218.7C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,128L48,138.7C96,149,192,171,288,186.7C384,203,480,213,576,202.7C672,192,768,160,864,165.3C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        fill="url(#footer-gradient)"
        className="w-full h-full"
      />
      <defs>
        <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.1" />
          <stop offset="50%" stopColor="var(--secondary)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Создаем компонент звездочек для фона
const FooterStars = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-primary/50"
        style={{
          top: `${10 + Math.random() * 80}%`,
          left: `${5 + Math.random() * 90}%`,
        }}
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2 + Math.random() * 3,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

// Создаем компонент для социальной ссылки с анимацией
interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const SocialLink = ({ href, icon, children }: SocialLinkProps) => (
  <motion.li
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-gray-300 hover:text-white flex items-center group transition-colors duration-300"
    >
      <motion.div
        whileHover={{ rotate: 15 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        className="mr-2 text-primary group-hover:text-secondary transition-colors duration-300"
      >
        {icon}
      </motion.div>
      <span>{children}</span>
      <motion.div
        className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
        whileHover={{ x: 2 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <ExternalLink className="w-3 h-3" />
      </motion.div>
    </a>
  </motion.li>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="footer" className="relative bg-card/80 border-t border-primary/20 py-16 backdrop-blur-sm">
      {/* Декоративные фоновые элементы */}
      <LightWave />
      <FooterStars />
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Логотип и описание */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="text-2xl font-display font-bold inline-block">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-primary">Crypto</span>
                  <span className="text-white">Brander</span>
                </motion.div>
              </Link>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-400 mt-3"
              >
                Авторський проект, розроблений щоб допомогти вам створити успішний криптоканал з нуля та почати заробляти вже від першого місяця.
              </motion.p>
              
              {/* Узор декоративный */}
              <div className="mt-6 grid grid-cols-4 gap-1">
                {[...Array(8)].map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="w-2 h-2 rounded-full bg-primary/40"
                  />
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Навигация */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">Навігація</h3>
              <motion.ul className="space-y-3">
                {["Головна", "Тарифи", "FAQ", "Контакти"].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <a 
                      href={`#${i === 0 ? 'hero' : i === 1 ? 'pricing' : i === 2 ? 'faq' : 'footer'}`} 
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                      onClick={(e) => {
                        e.preventDefault();
                        const id = `#${i === 0 ? 'hero' : i === 1 ? 'pricing' : i === 2 ? 'faq' : 'footer'}`;
                        const element = document.querySelector(id);
                        if (element) {
                          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
                          window.scrollTo({
                            top: offsetTop,
                            behavior: "smooth"
                          });
                        }
                      }}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
          
          {/* Контакты */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">Контакти</h3>
              <ul className="space-y-3">
                <SocialLink 
                  href="mailto:info@cryptobrander.com" 
                  icon={<Mail className="w-5 h-5" />}
                >
                  Email
                </SocialLink>
                <motion.li
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="text-gray-300 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    <span>9:00 - 18:00</span>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </div>
          
          {/* Соцсети */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">Соцмережі</h3>
              <ul className="space-y-3">
                <SocialLink 
                  href="https://t.me/cryptobrander" 
                  icon={<MessageSquare className="w-5 h-5" />}
                >
                  Telegram
                </SocialLink>
                <SocialLink 
                  href="https://instagram.com/cryptobrander" 
                  icon={<Camera className="w-5 h-5" />}
                >
                  Instagram
                </SocialLink>
              </ul>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm"
          >
            © {new Date().getFullYear()} CryptoBrander. Всі права захищені.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            className="mt-4 md:mt-0"
          >
            <button 
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-card/80 border border-primary/20 text-primary hover:text-white hover:bg-primary/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-4 md:mt-0 text-gray-500 text-sm flex items-center"
          >
            Розроблено з любов'ю <Heart className="mx-1 w-3 h-3 text-primary" />
          </motion.p>
        </div>
      </motion.div>
    </footer>
  );
}
