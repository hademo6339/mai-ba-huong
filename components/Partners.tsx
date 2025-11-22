import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Logo1 from '../Logo1.svg';
import Logo2 from '../Logo2.svg';
import Logo3 from '../Logo3.svg';
import Logo4 from '../Logo4.svg';
import Logo5 from '../Logo5.svg';
import Logo6 from '../Logo6.svg';
import Logo7 from '../Logo7.svg';
import Logo8 from '../Logo8.svg';

const partners = [
  { id: 1, name: 'Đối tác 1', logo: Logo1 },
  { id: 2, name: 'Đối tác 2', logo: Logo2 },
  { id: 3, name: 'Đối tác 3', logo: Logo3 },
  { id: 4, name: 'Đối tác 4', logo: Logo4 },
  { id: 5, name: 'Đối tác 5', logo: Logo5 },
  { id: 6, name: 'Đối tác 6', logo: Logo6 },
  { id: 7, name: 'Đối tác 7', logo: Logo7 },
  { id: 8, name: 'Đối tác 8', logo: Logo8 },
];

const Partners: React.FC = () => {
  return (
    <section className="bg-[#FAFAFA] py-24">
        <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row gap-12">
                {/* Left Info */}
                <div className="w-full md:w-1/3 relative flex gap-6">
                    <div className="w-8 pt-2 border-r border-gray-200 pr-6">
                        <span className="writing-vertical text-[11px] uppercase tracking-[0.2em] text-primary font-bold rotate-180 whitespace-nowrap">
                            Đối tác chiến lược
                        </span>
                    </div>
                    
                    <div className="flex-1 pt-2">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-4">HỢP TÁC PHÁT TRIỂN</h3>
                        <p className="text-gray-600 text-justify leading-relaxed mb-10 text-sm">
                            Chúng tôi tự hào đồng hành cùng những đối tác uy tín hàng đầu trong và ngoài nước trên các lĩnh vực: Tài chính, Xây dựng, Thiết kế, và Quản lý vận hành. Sự hợp tác chặt chẽ này là nền tảng vững chắc để Mai Bá Hương kiến tạo nên những giá trị bền vững và đẳng cấp.
                        </p>
                        
                        <div className="flex gap-4">
                            <button className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-400 hover:border-accent hover:text-accent transition-colors rounded-full hover:bg-white bg-white shadow-sm">
                                <ArrowLeft size={18} strokeWidth={1.5} />
                            </button>
                            <button className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-400 hover:border-accent hover:text-accent transition-colors rounded-full hover:bg-white bg-white shadow-sm">
                                <ArrowRight size={18} strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Grid */}
                <div className="w-full md:w-2/3 border border-gray-200 bg-white">
                    <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y divide-gray-200">
                        {partners.map((partner) => (
                                <div 
                                key={partner.id} 
                                className="h-32 p-6 flex items-center justify-center group relative transition-all duration-300 hover:bg-gray-50 hover:z-10 bg-white"
                            >
                                <img 
                                  src={partner.logo} 
                                  alt={partner.name} 
                                  className="max-h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                                />
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