import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ServiceData {
  titlePart1: string;
  titlePart2: string;
  subtitle: string;
  description: string;
  image: string;
}

const services: ServiceData[] = [
  {
    titlePart1: "KINH",
    titlePart2: "DOANH",
    subtitle: "BẤT ĐỘNG SẢN",
    description: "Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    titlePart1: "TƯ VẤN,",
    titlePart2: "MÔI GIỚI",
    subtitle: "ĐẤU GIÁ QUYỀN SỬ DỤNG ĐẤT",
    description: "Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    titlePart1: "HOẠT ĐỘNG",
    titlePart2: "KIẾN TRÚC",
    subtitle: "VÀ TƯ VẤN KỸ THUẬT CÓ LIÊN QUAN",
    description: "Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    titlePart1: "BỐC",
    titlePart2: "XẾP",
    subtitle: "HÀNG HÓA",
    description: "Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Services: React.FC = () => {
  return (
    <section className="bg-[#004D40] pt-28 pb-32 relative overflow-hidden">
       {/* Watermark Background - Large stylized logo outlines */}
       <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Center/Right large watermark */}
          <svg className="absolute top-0 right-0 h-[150%] w-auto translate-x-1/3 -translate-y-1/4 opacity-5" viewBox="0 0 500 500" fill="none">
             <path d="M250 50 C 250 50 350 200 250 350 C 150 200 250 50 250 50" stroke="white" strokeWidth="2" />
             <path d="M250 50 C 250 50 450 150 350 350" stroke="white" strokeWidth="2" />
             <path d="M250 50 C 250 50 50 150 150 350" stroke="white" strokeWidth="2" />
             <circle cx="250" cy="250" r="200" stroke="white" strokeWidth="2" />
          </svg>
          
          {/* Left large watermark */}
          <svg className="absolute bottom-0 left-0 h-[120%] w-auto -translate-x-1/4 translate-y-1/4 opacity-5" viewBox="0 0 500 500" fill="none">
             <circle cx="250" cy="250" r="220" stroke="white" strokeWidth="3" />
             <path d="M250 30 V 470" stroke="white" strokeWidth="3" />
             <path d="M30 250 H 470" stroke="white" strokeWidth="3" />
          </svg>
       </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative"
             >
                <h2 className="text-white font-sans text-2xl md:text-3xl font-medium tracking-wide pb-4">
                  Lĩnh vực hoạt động
                </h2>
                {/* Decorative line extending right */}
                <div className="absolute bottom-0 left-0 w-[150%] h-px bg-white/20"></div>
             </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col h-full cursor-pointer"
            >
              {/* Image Top */}
              <div className="h-56 w-full overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={`${item.titlePart1} ${item.titlePart2}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#00332A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content Bottom */}
              <div className="flex-1 flex flex-col px-6 py-8 min-h-[320px] transition-all duration-300 bg-[#C4A980] group-hover:bg-[#00332A] relative">
                
                {/* Title Area */}
                <div className="mb-4">
                  <h3 className="font-bold text-xl uppercase leading-none mb-2">
                     <span className="text-white transition-colors duration-300">{item.titlePart1} </span>
                     <span className="text-[#004D40] group-hover:text-[#C4A980] transition-colors duration-300">{item.titlePart2}</span>
                  </h3>
                  <h4 className="font-bold text-[11px] uppercase tracking-widest text-[#004D40] group-hover:text-[#C4A980] transition-colors duration-300">
                    {item.subtitle}
                  </h4>
                </div>

                {/* Divider (Optional, invisible spacer) */}
                <div className="h-2"></div>

                {/* Description */}
                <p className="text-xs leading-relaxed mb-8 line-clamp-5 text-justify text-white group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
                
                {/* Button - Pushed to bottom */}
                <div className="mt-auto">
                    <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all duration-300 bg-white text-[#004D40] group-hover:bg-[#C4A980] group-hover:text-white">
                      Xem thêm
                      <ArrowUpRight size={14} />
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