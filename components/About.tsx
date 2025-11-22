import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="gioi-thieu" className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 mb-20">
            {/* Vertical Label - Left Sidebar */}
            <div className="hidden md:flex w-8 md:w-16 flex-col items-center border-r border-gray-100 pt-10">
            <span className="writing-vertical text-[11px] uppercase tracking-[0.3em] text-primary font-bold whitespace-nowrap rotate-180">
                Về chúng tôi
            </span>
            </div>

            {/* Text Content - Middle */}
            <div className="flex-1 pt-4">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-accent font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1] font-bold"
            >
                TẦM NHÌN & <br/> SỨ MỆNH
            </motion.h2>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-justify-last-left"
            >
                <div className="mb-8">
                    <h3 className="text-primary font-bold uppercase text-lg mb-3">TẦM NHÌN</h3>
                    <p className="text-gray-text leading-[1.8] text-[15px]">
                    Trở thành Nhà phát triển bất động sản uy tín và kiến tạo các giá trị tiên phong, những không gian sống chuẩn mực, bền vững mang đậm dấu ấn văn hóa. Với niềm đam mê, tinh thần chính trực cùng với tâm huyết của cả tập thể và với khát vọng vươn xa, Mai Bá Hương sẽ không ngừng đóng góp cho diện mạo đô thị Việt Nam hiện đại, văn minh và thịnh vượng hơn.
                    </p>
                </div>
                <div>
                    <h3 className="text-primary font-bold uppercase text-lg mb-3">SỨ MỆNH</h3>
                    <p className="italic text-gray-600 font-medium mb-3 text-[15px] leading-[1.8]">"Kiến tạo giá trị sống bền vững – Gắn kết con người và cộng đồng."</p>
                    <p className="text-gray-text leading-[1.8] text-[15px]">
                    Vì bất động sản không chỉ là ngành nghề, mà là nghệ thuật của sự gắn kết – nơi mỗi mét vuông đất đều ẩn chứa hơi thở của cuộc sống, của hạnh phúc và ước mơ. Công ty CP Mai Bá Hương đặt con người làm trung tâm cho mọi phát triển, để mỗi công trình không chỉ là nơi ở, mà là nơi vun đắp hạnh phúc và nuôi dưỡng giá trị sống đích thực.
                    </p>
                </div>
            </motion.div>
            </div>

            {/* Image Composition - Right */}
            <div className="flex-1 relative h-[450px] md:h-auto mt-12 md:mt-0">
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
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Mai Ba Huong Vision" 
                className="w-full h-full object-cover"
                />
            </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;