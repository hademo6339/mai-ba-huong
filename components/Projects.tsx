import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "KHU DÂN CƯ MAI BÁ HƯƠNG",
    location: "Xã Lương Hòa, Tỉnh Tây Ninh",
    description: "Với quy mô 146,8ha, Dự án Khu dân cư Mai Bá Hương tọa lạc tại vị trí chiến lược xã Lương Hòa. Được quy hoạch đồng bộ, dự án hứa hẹn trở thành một khu đô thị kiểu mẫu, kết hợp hài hòa giữa không gian sống hiện đại và cảnh quan thiên nhiên, mang lại giá trị sống đích thực và cơ hội đầu tư sinh lời vượt trội.",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    area: "146.8 ha"
  },
  {
    id: 2,
    title: "KHU ĐÔ THỊ SINH THÁI VEN SÔNG",
    location: "Bình Chánh, TP. Hồ Chí Minh",
    description: "Dự án khu đô thị sinh thái hiện đại với quy mô lớn, tích hợp đầy đủ tiện ích sống xanh, gần gũi với thiên nhiên nhưng vẫn đảm bảo sự tiện nghi đẳng cấp.",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    area: "80 ha"
  },
  {
    id: 3,
    title: "TỔ HỢP THƯƠNG MẠI DỊCH VỤ",
    location: "Long An",
    description: "Tổ hợp trung tâm thương mại, văn phòng và căn hộ dịch vụ cao cấp. Điểm đến mới cho các hoạt động kinh doanh và giải trí tại khu vực cửa ngõ phía Tây.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    area: "12 ha"
  }
];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextProject();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="du-an" className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 flex gap-8">
        
        {/* Project Content Area */}
        <div 
          className="flex-1 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
           {/* Main Layout: Image Left, Content Box Right Overlapping */}
           <div className="relative min-h-[500px] md:h-[650px] w-full flex flex-col md:block group">
             
             {/* Project Image Container */}
             <div className="w-full md:w-[75%] h-[400px] md:h-full overflow-hidden relative bg-gray-100">
               {/* Removed mode="wait" to allow cross-fading of images */}
               <AnimatePresence initial={false}>
                 <motion.img 
                   key={currentIndex}
                   initial={{ opacity: 0, scale: 1.1 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 1.2, ease: "easeOut" }}
                   src={projects[currentIndex].image} 
                   alt={projects[currentIndex].title} 
                   className="absolute inset-0 w-full h-full object-cover"
                 />
               </AnimatePresence>
               
               {/* Overlay gradient for better text visibility on mobile */}
               <div className="absolute inset-0 bg-black/20 md:hidden pointer-events-none z-10"></div>
             </div>
 
             {/* Content Box - Dark Green Overlay */}
             <AnimatePresence mode="wait">
                <motion.div 
                  key={`info-${currentIndex}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className="relative md:absolute bottom-0 right-0 md:bottom-16 md:right-8 bg-[#004D40] w-full md:w-[500px] p-8 md:p-12 z-20 text-white shadow-2xl"
                >
                  {/* Background pattern for card */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                      <svg width="100%" height="100%" viewBox="0 0 100 100">
                        <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="1" fill="none"/>
                        <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="1" fill="none"/>
                      </svg>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-[#C4A980] uppercase leading-tight">
                      {projects[currentIndex].title}
                    </h3>
                    <div className="flex justify-between items-center border-b border-white/20 pb-4 mb-6">
                        <p className="text-[11px] font-bold text-white uppercase tracking-wide">
                        {projects[currentIndex].location}
                        </p>
                        <span className="text-[#C4A980] font-bold text-xs">{projects[currentIndex].area}</span>
                    </div>
                    
                    <p className="text-white/80 text-sm leading-relaxed mb-8 text-justify">
                      {projects[currentIndex].description}
                    </p>
                    
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#E8E8E8] text-primary-dark font-bold uppercase text-xs hover:bg-accent hover:text-white transition-colors">
                      Xem thêm
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </motion.div>
             </AnimatePresence>
           </div>

           {/* Navigation Controls */}
           <div className="flex gap-6 mt-8 md:absolute md:bottom-0 md:left-[550px] md:translate-x-0 z-30">
             <button 
               onClick={prevProject}
               className="w-12 h-12 border border-[#004D40]/20 flex items-center justify-center hover:bg-[#004D40] hover:text-white text-[#004D40] transition-all duration-300 rounded-full group bg-white"
               aria-label="Previous Project"
             >
               <ArrowLeft size={20} strokeWidth={1.5} className="group-hover:-translate-x-0.5 transition-transform"/>
             </button>
             <button 
               onClick={nextProject}
               className="w-12 h-12 border border-[#004D40]/20 flex items-center justify-center hover:bg-[#004D40] hover:text-white text-[#004D40] transition-all duration-300 rounded-full group bg-white"
               aria-label="Next Project"
             >
               <ArrowRight size={20} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform"/>
             </button>
           </div>
           
           {/* Slide Indicators (Dots) */}
           <div className="hidden md:flex absolute top-1/2 -right-6 -translate-y-1/2 flex-col gap-3 z-30">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-1.5 transition-all duration-500 rounded-full ${
                    idx === currentIndex ? 'h-8 bg-[#004D40]' : 'h-1.5 bg-gray-300 hover:bg-[#C4A980]'
                  }`}
                />
              ))}
           </div>

        </div>

        {/* Vertical Label - Right Sidebar */}
        <div className="hidden md:flex w-8 md:w-12 flex-col items-center border-l border-gray-100 pt-10 relative">
           <span className="writing-vertical text-[11px] uppercase tracking-[0.3em] text-gray-500 font-bold whitespace-nowrap rotate-180 sticky top-24">
             Dự án nổi bật
           </span>
        </div>

      </div>
    </section>
  );
};

export default Projects;