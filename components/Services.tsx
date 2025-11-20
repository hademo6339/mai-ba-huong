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
    <section className="bg-[#004D40] pt-24 pb-32 relative overflow-hidden">
       {/* Background Pattern / Watermark */}
       <div className="absolute inset-0 pointer-events-none">
           <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1440 800" preserveAspectRatio="none">
               {/* Abstract leaf/logo curves based on design */}
               <path d="M-100,600 C200,400 500,800 800,400 C1100,0 1400,400 1600,200" stroke="white" strokeWidth="1" fill="none"/>
               <path d="M-100,700 C200,500 500,900 800,500 C1100,100 1400,500 1600,300" stroke="white" strokeWidth="1" fill="none"/>
               <circle cx="720" cy="400" r="300" stroke="white" strokeWidth="0.5" fill="none" />
               <path d="M720,100 L720,700" stroke="white" strokeWidth="0.5" />
           </svg>
       </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12 relative">
           <h2 className="text-white font-sans text-3xl md:text-4xl font-medium inline-block relative pb-4">
             Lĩnh vực hoạt động
             <span className="absolute bottom-0 left-0 w-[60%] h-px bg-white/40"></span>
           </h2>
        </div>

        {/* Grid */}
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
              {/* Image */}
              <div className="h-64 w-full overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={`${item.titlePart1} ${item.titlePart2}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col p-6 transition-colors duration-300 bg-[#C4A980] group-hover:bg-[#00332A] min-h-[340px]">
                
                {/* Title Block */}
                <div className="mb-4 min-h-[60px]">
                    <div className="text-xl font-bold uppercase leading-tight mb-2">
                        <span className="text-white">{item.titlePart1} </span>
                        <span className="text-[#004D40] group-hover:text-[#C4A980] transition-colors duration-300">{item.titlePart2}</span>
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#004D40] group-hover:text-[#C4A980] transition-colors duration-300">
                        {item.subtitle}
                    </div>
                </div>

                {/* Description */}
                <p className="text-xs leading-relaxed text-justify text-white/90 mb-6 line-clamp-6 flex-1">
                   {item.description}
                </p>
                
                {/* Button */}
                <div className="mt-auto">
                    <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-sm bg-white text-[#004D40] group-hover:bg-[#E8E8E8] group-hover:text-[#004D40] transition-all">
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
