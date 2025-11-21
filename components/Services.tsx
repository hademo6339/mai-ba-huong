import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const services: ServiceData[] = [
  {
    title: "KINH DOANH BẤT ĐỘNG SẢN",
    subtitle: "ĐẦU TƯ & PHÁT TRIỂN",
    description: "Phát triển các dự án khu dân cư, khu đô thị với quy mô lớn, mang lại giá trị sinh lời bền vững cho nhà đầu tư.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "TƯ VẤN, MÔI GIỚI, ĐẤU GIÁ",
    subtitle: "QUYỀN SỬ DỤNG ĐẤT",
    description: "Cung cấp giải pháp tư vấn chiến lược, môi giới chuyên nghiệp và tổ chức đấu giá quyền sử dụng đất minh bạch.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "KIẾN TRÚC & TƯ VẤN KỸ THUẬT",
    subtitle: "QUY HOẠCH & THIẾT KẾ",
    description: "Hoạt động kiến trúc và tư vấn kỹ thuật có liên quan, kiến tạo không gian sống chuẩn mực và hiện đại.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "XÂY DỰNG CÔNG TRÌNH",
    subtitle: "KỸ THUẬT DÂN DỤNG",
    description: "Thi công xây dựng các công trình kỹ thuật dân dụng, hạ tầng đô thị với cam kết chất lượng và an toàn tuyệt đối.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "KHO BÃI & LƯU GIỮ",
    subtitle: "LOGISTICS",
    description: "Cung cấp dịch vụ kho bãi hiện đại, an toàn, đáp ứng nhu cầu lưu trữ và luân chuyển hàng hóa tối ưu.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "BỐC XẾP HÀNG HÓA",
    subtitle: "VẬN HÀNH KHO",
    description: "Dịch vụ bốc xếp hàng hóa chuyên nghiệp, nhanh chóng, đảm bảo an toàn cho hàng hóa của đối tác.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "LẮP ĐẶT HỆ THỐNG ĐIỆN",
    subtitle: "CƠ ĐIỆN M & E",
    description: "Tư vấn, thiết kế và thi công lắp đặt hệ thống điện dân dụng và công nghiệp theo tiêu chuẩn quốc tế.",
    image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "KHAI THÁC TÀI NGUYÊN",
    subtitle: "ĐÁ, CÁT, SỎI, ĐẤT SÉT",
    description: "Khai thác và chế biến khoáng sản, vật liệu xây dựng phục vụ cho các công trình trọng điểm.",
    image: "https://images.unsplash.com/photo-1518655061710-5ccf392c275a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Services: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380; // Approx card width + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-[#004D40] pt-24 pb-32 relative overflow-hidden">
       {/* Background Pattern / Watermark */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full pointer-events-none opacity-10">
           <svg viewBox="0 0 1440 800" className="w-full h-full" preserveAspectRatio="none">
               <path d="M-100 400 Q 300 100 720 400 T 1540 400" stroke="white" strokeWidth="1.5" fill="none" />
               <path d="M-100 500 Q 300 200 720 500 T 1540 500" stroke="white" strokeWidth="1.5" fill="none" />
               <path d="M720 100 Q 900 300 720 500 Q 540 300 720 100" stroke="white" strokeWidth="1.5" fill="none" />
               <circle cx="720" cy="300" r="150" stroke="white" strokeWidth="1" fill="none" />
           </svg>
       </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header & Navigation Controls */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div>
              <h2 className="text-white font-serif text-3xl md:text-5xl font-bold inline-block relative pb-4">
                Lĩnh vực hoạt động
                <span className="absolute bottom-0 left-0 w-[60%] h-1 bg-[#C4A980]"></span>
              </h2>
              <p className="text-gray-300 mt-4 max-w-xl text-sm font-light leading-relaxed">
                Đa dạng hóa lĩnh vực hoạt động với mục tiêu kiến tạo hệ sinh thái bền vững, đóng góp vào sự thịnh vượng chung của cộng đồng.
              </p>
           </div>

           {/* Navigation Buttons */}
           <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#C4A980] hover:border-[#C4A980] transition-all duration-300 group"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#C4A980] hover:border-[#C4A980] transition-all duration-300 group"
              >
                <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
           </div>
        </div>

        {/* Horizontal Slider Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0"
        >
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[300px] md:min-w-[360px] snap-start group relative cursor-pointer"
            >
              <div className="h-[450px] w-full overflow-hidden relative rounded-sm shadow-xl bg-[#00332A]">
                {/* Image Layer */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-40"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002822] via-[#004D40]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Number Indicator */}
                <div className="absolute top-6 right-6 text-white/20 font-serif text-6xl font-bold group-hover:text-[#C4A980]/20 transition-colors">
                  0{index + 1}
                </div>

                {/* Content Layer */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  
                  <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#C4A980] mb-2 flex items-center gap-2">
                       <span className="w-8 h-px bg-[#C4A980]"></span>
                       {item.subtitle}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white uppercase leading-tight mb-4 font-serif">
                       {item.title}
                    </h3>

                    <p className="text-gray-300 text-xs leading-relaxed line-clamp-3 group-hover:line-clamp-none group-hover:opacity-100 opacity-0 max-h-0 group-hover:max-h-[100px] transition-all duration-500 ease-in-out overflow-hidden mb-4">
                       {item.description}
                    </p>
                    
                    <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white group-hover:text-[#C4A980] transition-colors border-b border-transparent group-hover:border-[#C4A980] pb-1 w-fit">
                        Xem chi tiết
                        <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Decorative Border on Hover */}
                <div className="absolute inset-0 border border-[#C4A980] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 pointer-events-none m-2"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;