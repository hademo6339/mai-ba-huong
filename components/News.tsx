import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { NewsItem } from '../types';

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được biến đổi bằng cách thêm các yếu tố hài hước",
    date: "04.11",
    month: "",
    year: "2025",
    description: "Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được biến đổi bằng cách thêm các yếu tố hài hước, các từ ngẫu nhiên có khi không có vẻ gì là có ý nghĩa. Nếu bạn định sử dụng một đoạn",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isMain: true
  },
  {
    id: 2,
    title: "Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung",
    date: "04.11",
    month: "",
    year: "2025",
    description: "Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Có nhiều phiên bản khác nhau đã xuất hiện, đôi khi do vô tình, nhiều khi do cố ý (xen thêm vào những câu hài hước",
    date: "27.10",
    month: "",
    year: "2025",
  },
  {
    id: 4,
    title: "Không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay",
    date: "28.10",
    month: "",
    year: "2025",
  },
  {
    id: 5,
    title: "Tin tức mới nhất về thị trường bất động sản",
    date: "26.10",
    month: "",
    year: "2025",
  }
];

const DateBadge = ({ date, year }: { date: string, year: string }) => (
  <div className="bg-[#004D40] text-white w-[70px] h-[70px] flex flex-col items-center justify-center shadow-md">
    <div className="text-lg font-bold leading-none mb-1">{date}</div>
    <div className="text-[10px] font-medium opacity-90 leading-none">{year}</div>
  </div>
);

const News: React.FC = () => {
  const mainNews = newsItems[0];
  const secondaryNews = newsItems[1];
  const listNews = newsItems.slice(2);

  return (
    <section id="tin-tuc" className="py-20 container mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Vertical Label */}
        <div className="hidden md:flex w-12 flex-col items-center pt-10 border-r border-gray-100 mr-4">
           <span className="writing-vertical text-[11px] uppercase tracking-[0.2em] text-primary font-bold rotate-180 whitespace-nowrap">
             Tin tức
           </span>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
            
            {/* Main News - Left Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col h-full"
            >
               <div className="relative overflow-hidden mb-6 h-64 md:h-80 w-full">
                 <img 
                   src={mainNews.image} 
                   alt={mainNews.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute bottom-0 left-0 z-10">
                    <DateBadge date={mainNews.date} year={mainNews.year} />
                 </div>
               </div>
               <div className="flex-1">
                 <h3 className="text-lg font-bold mb-3 text-gray-800 group-hover:text-primary transition-colors leading-snug">
                   {mainNews.title}
                 </h3>
                 <p className="text-gray-500 text-sm mb-4 line-clamp-3 text-justify leading-relaxed">
                   {mainNews.description}
                 </p>
               </div>
               <button className="flex items-center gap-2 px-5 py-2 bg-[#E8E8E8] w-fit text-xs font-bold uppercase text-gray-700 group-hover:bg-accent group-hover:text-white transition-all rounded-sm">
                 Xem thêm
                 <ArrowUpRight size={14} />
               </button>
            </motion.div>

            {/* Right Column */}
            <div className="flex flex-col gap-10">
              {/* Top Secondary News */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6"
              >
                 <div className="relative h-48 w-full sm:w-1/2 lg:w-full xl:w-1/2 overflow-hidden shrink-0">
                    <img 
                       src={secondaryNews.image} 
                       alt={secondaryNews.title} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute top-0 right-0">
                       <DateBadge date={secondaryNews.date} year={secondaryNews.year} />
                     </div>
                 </div>
                 <div className="flex flex-col justify-between">
                    <div>
                        <h4 className="font-bold text-base text-gray-800 mb-2 group-hover:text-primary transition-colors leading-snug">
                            {secondaryNews.title}
                        </h4>
                        <p className="text-xs text-gray-500 mb-3 line-clamp-2 text-justify">
                            {secondaryNews.description}
                        </p>
                    </div>
                    <button className="flex items-center gap-1 text-xs font-bold uppercase text-gray-600 group-hover:text-accent transition-colors w-fit px-4 py-2 bg-gray-100">
                        Xem thêm
                        <ArrowUpRight size={12} />
                    </button>
                 </div>
              </motion.div>

              {/* Bottom List News */}
              <div className="flex flex-col gap-4">
                 {listNews.map((item, idx) => (
                   <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="flex items-stretch bg-[#C4A980] hover:bg-[#B39870] transition-colors cursor-pointer group"
                   >
                     <div className="bg-[#004D40] text-white flex flex-col items-center justify-center min-w-[60px] p-2">
                        <div className="font-bold text-base leading-none">{item.date}</div>
                        <div className="text-[10px] leading-none mt-1">{item.year}</div>
                     </div>
                     <div className="flex-1 p-3 flex items-center">
                        <h5 className="font-medium text-xs text-white line-clamp-2 group-hover:text-gray-100 leading-snug">
                          {item.title}
                        </h5>
                     </div>
                   </motion.div>
                 ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
             <button className="bg-[#E8E8E8] hover:bg-primary hover:text-white text-gray-700 px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 rounded-sm">
               Xem tất cả
               <ArrowUpRight size={14} />
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;