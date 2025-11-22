import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative h-[calc(100vh-80px)] md:h-[calc(100vh-90px)] w-full overflow-hidden mt-[80px] md:mt-[90px]">
      {/* Video Background */}
      <div className="absolute inset-0 bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        >
          {/* Stock video resembling urban skyscrapers at sunset/dusk */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-urban-traffic-and-skyscrapers-at-sunset-234-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay for Text Readability and Color Grading */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
        {/* Color Tint to match the purple/vintage vibe of the design */}
        <div className="absolute inset-0 bg-[#3D2B3D] mix-blend-overlay opacity-40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-end px-4 md:px-8 lg:px-16 pb-10 md:pb-16">
        {/* Main Text Wrapper */}
        <div className="w-full flex items-end justify-between relative">
            {/* Main Text */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-white font-serif font-bold text-3xl md:text-5xl lg:text-[70px] xl:text-[80px] uppercase tracking-[0.02em] leading-[1.1] w-full text-center md:text-left drop-shadow-lg"
            >
              KẾ THỪA DI SẢN - <br className="lg:hidden" /> KIẾN TẠO TƯƠNG LAI
            </motion.h1>

            {/* Down Arrow - Thin SVG arrow as per design */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="hidden md:block mb-2 shrink-0 ml-6"
            >
               <svg width="24" height="64" viewBox="0 0 24 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M12 0V62M12 62L2 52M12 62L22 52" stroke="white" strokeWidth="1"/>
               </svg>
            </motion.div>
        </div>
      </div>
      
      {/* Fixed Scroll Top Button */}
      <div className="fixed bottom-8 right-6 md:bottom-12 md:right-12 z-50">
          <button 
             onClick={scrollToTop}
             className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#004D40] border border-white/20 flex items-center justify-center text-white hover:bg-[#00695C] transition-all shadow-lg shadow-black/30 group cursor-pointer"
             aria-label="Quay lại đầu trang"
          >
             <ArrowUp size={24} strokeWidth={1.5} className="group-hover:-translate-y-1 transition-transform" />
          </button>
      </div>
    </section>
  );
};

export default Hero;