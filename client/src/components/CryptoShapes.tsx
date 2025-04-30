import React from "react";
import { motion } from "framer-motion";

export default function CryptoShapes() {
  return (
    <div className="absolute top-0 right-0 w-1/3 h-full md:block hidden">
      <div className="relative w-full h-full">
        {/* Bitcoin */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ 
            y: [50, 0, 30, 0, 50], 
            opacity: 1,
            rotateY: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "loop",
            times: [0, 0.2, 0.5, 0.8, 1],
            ease: "easeInOut" 
          }}
          className="absolute top-[20%] right-[30%]"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 bg-opacity-30 flex items-center justify-center shadow-lg" style={{ backdropFilter: 'blur(10px)' }}>
            <div className="text-5xl font-bold text-white">₿</div>
          </div>
        </motion.div>

        {/* Ethereum */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ 
            y: [-30, 20, -10, 40, -30], 
            opacity: 1,
            rotateY: [0, 180, 360]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            repeatType: "loop",
            times: [0, 0.25, 0.5, 0.75, 1],
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-[50%] right-[10%]"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 bg-opacity-30 flex items-center justify-center shadow-lg" style={{ backdropFilter: 'blur(10px)' }}>
            <div className="text-4xl font-bold text-white">Ξ</div>
          </div>
        </motion.div>

        {/* Cardano */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ 
            y: [0, 40, 20, 60, 0], 
            opacity: 1,
            rotateY: [0, 180, 360]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            repeatType: "loop",
            times: [0, 0.2, 0.5, 0.8, 1],
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-[70%] right-[40%]"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 bg-opacity-30 flex items-center justify-center shadow-lg" style={{ backdropFilter: 'blur(10px)' }}>
            <div className="text-3xl font-bold text-white">⟠</div>
          </div>
        </motion.div>

        {/* USDT */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: [30, -10, 40, 10, 30], 
            opacity: 1,
            rotateY: [0, 180, 360]
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity, 
            repeatType: "loop",
            times: [0, 0.25, 0.5, 0.75, 1],
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-[30%] right-[60%]"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 bg-opacity-30 flex items-center justify-center shadow-lg" style={{ backdropFilter: 'blur(10px)' }}>
            <div className="text-2xl font-bold text-white">₮</div>
          </div>
        </motion.div>

        {/* Decorative lines connecting shapes */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" style={{ filter: 'blur(1px)' }}>
          <motion.path
            d="M250,120 C180,200 120,250 80,350"
            stroke="url(#gradient1)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop", repeatDelay: 3 }}
          />
          <motion.path
            d="M80,180 C150,230 200,280 150,350"
            stroke="url(#gradient2)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 2, delay: 1 }}
          />
          <motion.path
            d="M230,300 C180,250 100,220 60,180"
            stroke="url(#gradient3)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop", repeatDelay: 2.5, delay: 2 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7928ca" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#7928ca" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}