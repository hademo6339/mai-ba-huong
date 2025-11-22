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
    title: "Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được biến đổi bằng cách thêm các yếu tố",
    date: "04.11",
    month: "",
    year: "2025",
  },
  {
    id: 4,
    title: "Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu",
    date: "02.11",
    month: "",
    year: "2025",
  },
  {
    id: 5,
    title: "Có nhiều phiên bản khác nhau đã xuất hiện, đôi khi do vô tình, nhiều khi do cố ý (xen thêm vào những câu hài hước",
    date: "27.10",
    month: "",
    year: "2025",
  },
  {
    id: 6,
    title: "Không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay",
    date: "28.10",
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
    <section id="tin-tuc" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Vertical Label */}
          <div className="hidden md:flex w-8 md:w-12 flex-col items-center pt-10 border-r border-gray-100">
            <span className="writing-vertical text-[11px] uppercase tracking-[0.3em] text-primary font-bold rotate-180 whitespace-nowrap">
              Tin tức
            </span>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12">
              
              {/* Main News - Left Column */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
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
                <div className="flex-1 mb-4">
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-800 group-hover:text-primary transition-colors leading-snug">
                    {mainNews.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed text-justify">
                    {mainNews.description}
                  </p>
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-[#E8E8E8] w-fit text-xs font-bold uppercase text-gray-700 group-hover:bg-accent group-hover:text-white transition-all rounded-sm">
                  Xem thêm
                  <ArrowUpRight size={14} />
                </button>
              </motion.div>

              {/* Right Column */}
              <div className="flex flex-col gap-8 lg:gap-10">
                {/* Top Secondary News */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="group flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6"
                >
                  <div className="relative h-48 md:h-56 w-full sm:w-1/2 lg:w-full xl:w-1/2 overflow-hidden shrink-0">
                    <img 
                      src={secondaryNews.image} 
                      alt={secondaryNews.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 z-10">
                      <DateBadge date={secondaryNews.date} year={secondaryNews.year} />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <h4 className="font-bold text-base md:text-lg text-gray-800 mb-2 group-hover:text-primary transition-colors leading-snug">
                        {secondaryNews.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500 mb-4 line-clamp-2 text-justify leading-relaxed">
                        {secondaryNews.description}
                      </p>
                    </div>
                    <button className="flex items-center gap-1 text-xs font-bold uppercase text-gray-600 group-hover:text-accent transition-colors w-fit px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-sm">
                      Xem thêm
                      <ArrowUpRight size={12} />
                    </button>
                  </div>
                </motion.div>

                {/* Bottom List News - 4 items */}
                <div className="flex flex-col gap-4">
                  {listNews.map((item, idx) => (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                      className="flex items-stretch bg-[#C4A980] hover:bg-[#B39870] transition-colors cursor-pointer group"
                    >
                      <div className="bg-[#004D40] text-white flex flex-col items-center justify-center min-w-[70px] p-3">
                        <div className="font-bold text-base leading-none">{item.date}</div>
                        <div className="text-[10px] leading-none mt-1 opacity-90">{item.year}</div>
                      </div>
                      <div className="flex-1 p-4 flex items-center">
                        <h5 className="font-medium text-sm md:text-base text-white line-clamp-2 group-hover:text-gray-100 leading-snug">
                          {item.title}
                        </h5>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* View All Button */}
            <div className="mt-12 md:mt-16 flex justify-center">
              <button className="bg-[#E8E8E8] hover:bg-primary hover:text-white text-gray-700 px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 rounded-sm">
                Xem tất cả
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
