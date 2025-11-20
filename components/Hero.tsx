import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
      </div>
      
      {/* Fixed Scroll Top Button */}
      <div className="fixed bottom-10 right-8 md:bottom-12 md:right-12 z-40">
          <button 
             onClick={scrollToTop}
             className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#004D40] border border-white/20 flex items-center justify-center text-white hover:bg-[#00695C] transition-all shadow-lg shadow-black/30 group cursor-pointer"
             aria-label="Quay lại đầu trang"
          >
             <ArrowUp size={24} strokeWidth={1.5} className="group-hover:-translate-y-1 transition-transform" />
          </button>
      </div>
    </section>
  );
};

export default Hero;