import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[calc(100vh-80px)] md:h-[calc(100vh-90px)] w-full overflow-hidden mt-[80px] md:mt-[90px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')` 
          }}
        />
        {/* Gradient Overlay - Darker at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
        {/* Additional purple/blue tint from reference image */}
        <div className="absolute inset-0 bg-[#2a1b3d] mix-blend-overlay opacity-30" />
      </div>

      {/* Content - Bottom Center */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-12 md:pb-16 px-4">
        <div className="container mx-auto relative flex flex-col items-center text-center md:text-left md:items-start">
            <div className="w-full flex flex-col md:flex-row items-end justify-between border-b border-white/30 pb-6">
                <div className="flex items-end gap-4 md:gap-8">
                    <motion.h1 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="text-white font-serif font-bold text-3xl md:text-5xl lg:text-6xl uppercase tracking-wider leading-tight drop-shadow-lg"
                    >
                      Kế thừa di sản - Kiến tạo tương lai
                    </motion.h1>
                    
                    {/* Thin Down Arrow */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.8 }}
                      className="mb-2 md:mb-4 hidden md:block"
                    >
                        <ArrowDown size={40} strokeWidth={0.8} className="text-white animate-bounce" />
                    </motion.div>
                </div>
            </div>
        </div>
      </div>
      
      {/* Green Scroll Top Button - Bottom Right */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20">
          <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#004D40]/90 border border-white/20 flex items-center justify-center text-white hover:bg-[#00695C] transition-all shadow-lg group cursor-pointer">
             <ArrowUp size={20} strokeWidth={1.5} className="group-hover:-translate-y-1 transition-transform" />
          </button>
      </div>
    </section>
  );
};

export default Hero;