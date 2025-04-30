import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Типы криптовалютных символов для частиц
const CRYPTO_SYMBOLS = [
  '₿', // Bitcoin
  'Ξ', // Ethereum
  'Ł', // Litecoin
  '₮', // Tether
  'Ð', // Dogecoin
  '◎', // Solana
  '⟠', // Cardano
];

// Интерфейс для определения частицы
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  symbol: string;
  color: string;
  rotation: number;
  delay: number;
  xDistance: number;
  yDistance: number;
}

export default function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const colors = [
        "rgba(121, 40, 202, 0.3)",  // Фиолетовый
        "rgba(59, 130, 246, 0.3)",  // Синий
        "rgba(16, 185, 129, 0.3)",  // Зеленый
        "rgba(251, 191, 36, 0.3)",  // Желтый
        "rgba(239, 68, 68, 0.3)",   // Красный
      ];

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const numParticles = Math.min(Math.max(20, Math.floor(windowWidth * windowHeight / 40000)), 40);
      
      const newParticles: Particle[] = [];
      
      for (let i = 0; i < numParticles; i++) {
        // Рандомное положение и свойства для частицы
        const x = Math.random() * windowWidth;
        const y = Math.random() * windowHeight;
        const size = Math.random() * (30 - 15) + 15;
        const duration = Math.random() * (60 - 20) + 20;
        const symbolIndex = Math.floor(Math.random() * CRYPTO_SYMBOLS.length);
        const colorIndex = Math.floor(Math.random() * colors.length);
        const rotation = Math.random() * 360;
        const delay = Math.random() * 5;
        
        // Дистанция перемещения
        const xDirection = Math.random() > 0.5 ? 1 : -1;
        const yDirection = Math.random() > 0.5 ? 1 : -1;
        const xDistance = xDirection * (Math.random() * (windowWidth / 2) + 100);
        const yDistance = yDirection * (Math.random() * (windowHeight / 2) + 100);
        
        newParticles.push({
          id: i,
          x,
          y,
          size,
          duration,
          symbol: CRYPTO_SYMBOLS[symbolIndex],
          color: colors[colorIndex],
          rotation,
          delay,
          xDistance,
          yDistance
        });
      }
      
      setParticles(newParticles);
    };

    generateParticles();

    const handleResize = () => {
      generateParticles();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ 
            x: particle.x, 
            y: particle.y, 
            opacity: 0,
            rotate: 0 
          }}
          animate={{ 
            x: particle.x + particle.xDistance, 
            y: particle.y + particle.yDistance, 
            opacity: [0, 0.3, 0.3, 0],
            rotate: particle.rotation 
          }}
          transition={{ 
            duration: particle.duration, 
            repeat: Infinity, 
            repeatType: "reverse",
            delay: particle.delay, 
            ease: "linear" 
          }}
          style={{ 
            position: "absolute", 
            fontSize: `${particle.size}px`,
            color: particle.color,
            textShadow: `0 0 10px ${particle.color}`,
            fontWeight: "bold"
          }}
          className="crypto-particle"
        >
          {particle.symbol}
        </motion.div>
      ))}
    </div>
  );
}