import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "KHU DÂN CƯ MAI BÁ HƯƠNG",
    location: "146,8ha tại xã Lương Hòa, tỉnh Tây Ninh",
    description: "Nằm ngay trên trục đường huyết mạch Hựu Thạnh Tân Bửu - 102m, Võ Văn Kiệt nối dài - 60m, Lương Hòa Bình Chánh - 60m - tuyến giao thông lớn nhất tỉnh, dự án sở hữu vị trí chiến lược, kết nối trực tiếp TP.HCM và các khu kinh tế trọng điểm phía Nam.",
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

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="du-an" className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 flex gap-8">
        
        {/* Project Content Area */}
        <div className="flex-1 relative">
           {/* Main Layout: Image Left, Content Box Right Overlapping */}
           <div className="relative min-h-[500px] md:h-[650px] w-full flex flex-col md:block">
             
             {/* Project Image */}
             <div className="w-full md:w-[75%] h-[400px] md:h-full overflow-hidden relative">
               <AnimatePresence mode="wait">
                 <motion.img 
                   key={currentIndex}
                   initial={{ opacity: 0, scale: 1.05 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.7 }}
                   src={projects[currentIndex].image} 
                   alt={projects[currentIndex].title} 
                   className="w-full h-full object-cover"
                 />
               </AnimatePresence>
             </div>
 
             {/* Content Box - Dark Green Overlay */}
             <motion.div 
               key={`info-${currentIndex}`}
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
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
                <p className="text-[11px] font-bold mb-6 text-white uppercase tracking-wide border-b border-white/20 pb-4">
                  {projects[currentIndex].location}
                </p>
                <p className="text-white/80 text-sm leading-relaxed mb-8 text-justify">
                  {projects[currentIndex].description}
                </p>
                
                <button className="flex items-center gap-2 px-6 py-3 bg-[#E8E8E8] text-primary-dark font-bold uppercase text-xs hover:bg-accent hover:text-white transition-colors">
                  Xem thêm
                  <ArrowUpRight size={16} />
                </button>
               </div>
             </motion.div>
           </div>

           {/* Navigation Controls */}
           <div className="flex gap-6 mt-8 md:absolute md:bottom-0 md:left-[550px] md:translate-x-0">
             <button 
               onClick={prevProject}
               className="group flex items-center gap-2 text-primary hover:text-accent transition-colors"
             >
               <ArrowLeft size={24} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform"/>
             </button>
             <button 
               onClick={nextProject}
               className="group flex items-center gap-2 text-primary hover:text-accent transition-colors"
             >
               <ArrowRight size={24} strokeWidth={1} className="group-hover:translate-x-1 transition-transform"/>
             </button>
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