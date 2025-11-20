import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')` 
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32 items-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white font-serif font-bold text-3xl md:text-5xl lg:text-7xl uppercase tracking-widest leading-tight max-w-7xl drop-shadow-2xl mb-8"
        >
          Kế thừa di sản - Kiến tạo tương lai
        </motion.h1>
        
        <motion.div
           initial={{ height: 0 }}
           animate={{ height: 60 }}
           transition={{ delay: 1, duration: 0.5 }}
           className="w-px bg-white/50 hidden md:block mb-6"
        />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-center text-white cursor-pointer hover:text-accent transition-colors"
        >
           <ArrowDown size={40} className="animate-bounce font-thin" strokeWidth={0.5} />
        </motion.div>
      </div>

      {/* Side Navigation dots - Right side */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col space-y-6 z-20 items-center">
        {[1, 2, 3].map((i) => (
          <div 
            key={i} 
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              i === 1 
              ? 'w-3 h-3 bg-transparent border border-accent' 
              : 'w-1.5 h-1.5 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
      
      {/* Scroll to top button - Bottom Right */}
      <div className="absolute bottom-10 right-10 z-20 hidden md:block">
          <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-accent hover:bg-accent hover:text-primary hover:border-accent transition-all group backdrop-blur-sm">
             <ArrowUp size={20} strokeWidth={1.5} className="group-hover:-translate-y-1 transition-transform" />
          </button>
      </div>
    </section>
  );
};

export default Hero;