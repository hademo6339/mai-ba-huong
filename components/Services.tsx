import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "KINH DOANH",
    subtitle: "BẤT ĐỘNG SẢN",
    description: "Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "TƯ VẤN, MÔI GIỚI",
    subtitle: "ĐẤU GIÁ QUYỀN SỬ DỤNG ĐẤT",
    description: "Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "HOẠT ĐỘNG KIẾN TRÚC",
    subtitle: "VÀ TƯ VẤN KỸ THUẬT CÓ LIÊN QUAN",
    description: "Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "BỐC XẾP",
    subtitle: "HÀNG HÓA",
    description: "Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Services: React.FC = () => {
  return (
    <section className="bg-[#004D40] pt-24 pb-32 relative overflow-hidden">
       {/* Decorative background patterns */}
       <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
             <path d="M0 0 C 50 50 50 50 100 0" stroke="white" strokeWidth="0.5" fill="none" transform="scale(5)" />
             <circle cx="80%" cy="20%" r="300" stroke="white" strokeWidth="0.5" fill="none" />
          </svg>
       </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
             <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white font-sans text-2xl md:text-3xl font-medium tracking-wide"
            >
              Lĩnh vực hoạt động
            </motion.h2>
            <div className="hidden md:block h-px flex-1 mx-12 bg-white/10 mb-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col h-full"
            >
               {/* Header Block */}
               <div className="mb-4 min-h-[80px] flex flex-col justify-start">
                  <h3 className="font-bold text-xl text-[#C4A980] uppercase leading-none">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <h4 className="font-medium text-xs text-[#C4A980]/70 uppercase mt-1 tracking-wide">
                      {item.subtitle}
                    </h4>
                  )}
               </div>

              {/* Image Block */}
              <div className="h-48 w-full overflow-hidden relative mb-6">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Description & Button */}
              <div className="flex-1 flex flex-col bg-[#C4A980] p-6 group-hover:bg-[#D4BFA0] transition-colors min-h-[220px]">
                <p className="text-xs text-white leading-relaxed mb-6 line-clamp-5 text-justify flex-1">
                  {item.description}
                </p>
                
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#004D40] transition-colors bg-white/90 px-4 py-3 w-fit hover:bg-white rounded-sm">
                  Xem thêm
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;