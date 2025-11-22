import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ServiceData {
  titleMain: string;
  titleSub: string;
  description: string;
  image: string;
}

const services: ServiceData[] = [
  {
    titleMain: "KINH DOANH",
    titleSub: "BẤT ĐỘNG SẢN",
    description: "Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    titleMain: "TƯ VẤN, MÔI GIỚI",
    titleSub: "ĐẤU GIÁ QUYỀN SỬ DỤNG ĐẤT",
    description: "Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    titleMain: "HOẠT ĐỘNG KIẾN TRÚC",
    titleSub: "VÀ TƯ VẤN KỸ THUẬT CÓ LIÊN QUAN",
    description: "Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    titleMain: "BỐC XẾP",
    titleSub: "HÀNG HOÁ",
    description: "Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    titleMain: "KHO BÃI VÀ LƯU GIỮ",
    titleSub: "HÀNG HOÁ",
    description: "Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    titleMain: "XÂY DỰNG CÔNG TRÌNH",
    titleSub: "KỸ THUẬT DÂN DỤNG KHÁC",
    description: "Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    titleMain: "LẮP ĐẶT",
    titleSub: "HỆ THỐNG ĐIỆN",
    description: "Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn",
    image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    titleMain: "KHAI THÁC ĐÁ",
    titleSub: "CÁT SỎI, ĐẤT SÉT",
    description: "Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn",
    image: "https://images.unsplash.com/photo-1518655061710-5ccf392c275a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Services: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  // Sync scroll between title and cards with smooth animation
  const handleScroll = () => {
    if (scrollContainerRef.current && titleContainerRef.current) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(() => {
        if (titleContainerRef.current && scrollContainerRef.current) {
          titleContainerRef.current.scrollLeft = scrollContainerRef.current.scrollLeft;
        }
      });
    }
  };

  // Smooth drag with momentum
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    const rect = scrollContainerRef.current.getBoundingClientRect();
    setStartX(e.pageX - rect.left);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    lastXRef.current = e.pageX;
    velocityRef.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const rect = scrollContainerRef.current.getBoundingClientRect();
    const x = e.pageX - rect.left;
    const walk = (x - startX) * 1.2; // Reduced multiplier for smoother, more natural drag
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    
    // Calculate velocity for momentum
    velocityRef.current = e.pageX - lastXRef.current;
    lastXRef.current = e.pageX;
    
    handleScroll();
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Apply smooth momentum scrolling for natural feel
    if (scrollContainerRef.current && Math.abs(velocityRef.current) > 1) {
      const momentum = velocityRef.current * 0.6;
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          left: -momentum,
          behavior: 'smooth'
        });
      }
    }
    velocityRef.current = 0;
  };

  // Touch handlers for mobile with momentum
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    const rect = scrollContainerRef.current.getBoundingClientRect();
    setStartX(e.touches[0].pageX - rect.left);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    lastXRef.current = e.touches[0].pageX;
    velocityRef.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const rect = scrollContainerRef.current.getBoundingClientRect();
    const x = e.touches[0].pageX - rect.left;
    const walk = (x - startX) * 1.2; // Smoother drag
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    
    // Calculate velocity
    velocityRef.current = e.touches[0].pageX - lastXRef.current;
    lastXRef.current = e.touches[0].pageX;
    
    handleScroll();
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Apply smooth momentum scrolling for natural feel
    if (scrollContainerRef.current && Math.abs(velocityRef.current) > 1) {
      const momentum = velocityRef.current * 0.6;
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          left: -momentum,
          behavior: 'smooth'
        });
      }
    }
    velocityRef.current = 0;
  };

  return (
    <section className="relative overflow-hidden">
      {/* Top Background - Dark Teal (60%) */}
      <div className="absolute top-0 left-0 right-0 h-[60%] bg-[#004D40]">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="services-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="#C4A980" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-pattern)"/>
          </svg>
        </div>
      </div>

      {/* Bottom Background - White (40%) */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-white"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 py-20 md:py-28">
        
        {/* Section Title - Scrollable with cards */}
        <div 
          ref={titleContainerRef}
          className="text-left mb-12 md:mb-16 overflow-x-auto hide-scrollbar"
          onScroll={handleScroll}
          style={{ 
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            willChange: 'scroll-position'
          }}
        >
          <h2 className="text-white font-serif text-2xl md:text-3xl lg:text-4xl font-bold inline-block whitespace-nowrap">
            Lĩnh vực hoạt động
          </h2>
        </div>

        {/* Horizontal Scrollable Cards - Shows 4 initially, can scroll to see more */}
        <div 
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onScroll={handleScroll}
          className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing relative -mt-8 md:-mt-12 pb-4"
          style={{ 
            scrollBehavior: 'auto',
            WebkitOverflowScrolling: 'touch',
            willChange: 'scroll-position',
            overscrollBehavior: 'contain'
          }}
        >
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col group flex-shrink-0"
              style={{ 
                width: 'calc((100% - 3 * 1.5rem) / 4)',
                minWidth: '280px'
              }}
            >
              {/* Card Container */}
              <div className="flex flex-col h-full bg-white shadow-lg overflow-hidden">
                
                {/* Header Area - Dark Teal Band with Pattern - NO HOVER CHANGE */}
                <div className="bg-[#004D40] px-5 py-6 relative">
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id={`card-pattern-${index}`} x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                          <path d="M7.5 0 L15 7.5 L7.5 15 L0 7.5 Z" fill="none" stroke="#C4A980" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#card-pattern-${index})`}/>
                    </svg>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Title Main - Golden/Shiny with gradient effect - NO HOVER CHANGE */}
                    <h3 
                      className="font-serif font-bold text-lg md:text-xl uppercase leading-tight mb-2"
                      style={{
                        background: 'linear-gradient(135deg, #D4BFA0 0%, #C4A980 50%, #B39870 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        filter: 'drop-shadow(0 2px 4px rgba(196, 169, 128, 0.3))'
                      }}
                    >
                      {item.titleMain}
                    </h3>
                    {/* Title Sub - White, sans-serif - NO HOVER CHANGE */}
                    <p className="text-white text-xs md:text-sm uppercase leading-tight font-sans">
                      {item.titleSub}
                    </p>
                  </div>
                </div>

                {/* Image Area */}
                <div className="relative w-full h-52 md:h-60 overflow-hidden bg-gray-200">
                  <img 
                    src={item.image} 
                    alt={item.titleMain} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-[#004D40]/0 group-hover:bg-[#004D40]/10 transition-all duration-500"></div>
                </div>

                {/* Description Area - Beige/Gold Box - CHANGES TO GREEN ON HOVER */}
                <div className="bg-[#C4A980] px-5 py-6 flex-1 flex flex-col group-hover:bg-[#004D40] transition-colors duration-500">
                  <p className="text-white text-xs md:text-sm leading-relaxed mb-5 flex-1">
                    {item.description}
                  </p>
                  
                  {/* CTA Button - Light white background, dark green text */}
                  <button className="flex items-center gap-2 bg-[#E8E8E8] text-[#00332A] px-4 py-2.5 text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-[#D4D4D4] transition-all duration-300 w-fit group/btn">
                    Xem thêm
                    <ArrowUpRight size={14} className="text-[#00332A] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
