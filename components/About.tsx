import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="gioi-thieu" className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-8 lg:gap-16">
        
        {/* Vertical Label - Left Sidebar */}
        <div className="hidden md:flex w-8 md:w-16 flex-col items-center border-r border-gray-100 pt-10">
           <span className="writing-vertical text-[11px] uppercase tracking-[0.3em] text-primary font-bold whitespace-nowrap rotate-180">
             Giới thiệu về công ty
           </span>
        </div>

        {/* Text Content - Middle */}
        <div className="flex-1 md:max-w-xl pt-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-accent font-serif text-4xl md:text-5xl mb-8 leading-tight"
          >
            HÀNH TRÌNH PHÁT TRIỂN <br/> BỀN VỮNG
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-text text-base leading-relaxed text-justify-last-left"
          >
            <p>
              Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được biến đổi bằng cách thêm các yếu tố hài hước, các từ ngẫu nhiên có khi không có vẻ gì là có ý nghĩa. Nếu bạn định sử dụng một đoạn Lorem Ipsum.
            </p>
            <p>
              Tất cả các công cụ sản xuất văn bản mẫu Lorem Ipsum đều được làm theo cách lặp đi lặp lại các đoạn chữ cho tới đủ thì thôi, khiến cho lipsum.com trở thành công cụ sản xuất Lorem Ipsum đáng giá nhất trên mạng. Trang web này sử dụng hơn.
            </p>
          </motion.div>

          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 group flex items-center gap-2 px-6 py-3 bg-[#E8E8E8] hover:bg-accent hover:text-white transition-all duration-300 rounded-sm text-xs font-bold uppercase tracking-widest text-gray-800"
          >
            Xem thêm
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.button>
        </div>

        {/* Image Composition - Right */}
        <div className="flex-1 relative h-[450px] md:h-[600px] mt-12 md:mt-0">
          {/* Top Image (Abstract Architecture) */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-[85%] h-[65%] overflow-hidden z-10"
          >
             <img 
               src="https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
               alt="Architecture Detail" 
               className="w-full h-full object-cover"
             />
          </motion.div>

          {/* Bottom Image (Team) */}
          <motion.div 
            initial={{ opacity: 0, y: 20, x: 20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 right-0 w-[60%] h-[45%] overflow-hidden shadow-2xl z-20 border-4 border-white"
          >
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Mai Ba Huong Team" 
               className="w-full h-full object-cover"
             />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;