import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Placeholder logos with simple shapes
const PartnerLogo = ({ id }: { id: number }) => (
  <div className="w-full h-full flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 group">
     {/* Abstract shape to simulate logo */}
     <div className="flex flex-col items-center gap-2">
         <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-800 group-hover:text-primary">
            {id % 4 === 0 && <rect x="10" y="10" width="40" height="40" rx="2" stroke="currentColor" strokeWidth="3" />}
            {id % 4 === 1 && <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="3" />}
            {id % 4 === 2 && <path d="M30 10L50 50H10L30 10Z" stroke="currentColor" strokeWidth="3" />}
            {id % 4 === 3 && <path d="M10 30L30 10L50 30L30 50L10 30Z" stroke="currentColor" strokeWidth="3" />}
         </svg>
         <span className="text-[8px] font-bold uppercase tracking-wider text-gray-500 group-hover:text-primary">Company</span>
     </div>
  </div>
);

const Partners: React.FC = () => {
  return (
    <section className="bg-[#FAFAFA] py-20">
        <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row gap-12">
                {/* Left Info */}
                <div className="w-full md:w-1/3 relative flex gap-6">
                    <div className="w-8 pt-2 border-r border-gray-200 pr-6">
                        <span className="writing-vertical text-[11px] uppercase tracking-[0.2em] text-primary font-bold rotate-180 whitespace-nowrap">
                            Đối tác
                        </span>
                    </div>
                    
                    <div className="flex-1 pt-2">
                        <p className="text-gray-600 text-justify leading-relaxed mb-10 text-sm">
                            Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được biến đổi bằng cách thêm các yếu tố hài hước, các từ ngẫu nhiên có khi không có vẻ gì là có ý nghĩa. Nếu bạn định sử dụng một đoạn.
                        </p>
                        
                        <div className="flex gap-4">
                            <button className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-400 hover:border-accent hover:text-accent transition-colors rounded-full hover:bg-white">
                                <ArrowLeft size={18} strokeWidth={1} />
                            </button>
                            <button className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-400 hover:border-accent hover:text-accent transition-colors rounded-full hover:bg-white">
                                <ArrowRight size={18} strokeWidth={1} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Grid */}
                <div className="w-full md:w-2/3 border-t border-l border-gray-200 bg-white">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((id) => (
                            <div key={id} className="h-32 border-r border-b border-gray-200 hover:shadow-lg transition-all p-4 flex items-center justify-center hover:z-10 relative">
                                <PartnerLogo id={id} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Partners;