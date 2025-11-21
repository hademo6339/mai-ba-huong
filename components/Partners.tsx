import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Define specific logos to look like real partners (Banks, Construction, Design, etc.)
const partners = [
  {
    id: 1,
    name: "Vietcombank",
    logo: (
      <svg viewBox="0 0 100 30" className="h-8 w-auto fill-current">
        <path d="M15 15 L25 25 L35 15 L25 5 Z" />
        <text x="40" y="20" fontFamily="sans-serif" fontSize="14" fontWeight="bold" letterSpacing="1">V-BANK</text>
      </svg>
    )
  },
  {
    id: 2,
    name: "Hoa Binh Corp",
    logo: (
      <svg viewBox="0 0 100 30" className="h-9 w-auto fill-current">
        <rect x="5" y="5" width="10" height="20" />
        <rect x="18" y="10" width="10" height="15" />
        <rect x="31" y="2" width="10" height="23" />
        <text x="48" y="20" fontFamily="serif" fontSize="14" fontWeight="bold">HBC CORP</text>
      </svg>
    )
  },
  {
    id: 3,
    name: "Coteccons",
    logo: (
      <svg viewBox="0 0 100 30" className="h-8 w-auto fill-current">
        <circle cx="15" cy="15" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
        <text x="35" y="20" fontFamily="sans-serif" fontSize="14" fontWeight="900">COTEC</text>
      </svg>
    )
  },
  {
    id: 4,
    name: "Savills",
    logo: (
      <svg viewBox="0 0 100 30" className="h-7 w-auto fill-current">
        <path d="M10 25 L20 5 L30 25 M5 25 H35" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="40" y="20" fontFamily="serif" fontSize="14" letterSpacing="2">SAVILLS</text>
      </svg>
    )
  },
  {
    id: 5,
    name: "CBRE",
    logo: (
      <svg viewBox="0 0 100 30" className="h-8 w-auto fill-current">
        <path d="M10 15 Q20 5 30 15 T50 15" fill="none" stroke="currentColor" strokeWidth="3" />
        <text x="55" y="21" fontFamily="sans-serif" fontSize="15" fontWeight="bold">CBRE</text>
      </svg>
    )
  },
  {
    id: 6,
    name: "Archetype",
    logo: (
      <svg viewBox="0 0 100 30" className="h-8 w-auto fill-current">
        <path d="M10 5 L10 25 M10 5 L30 5 M10 15 L25 15" stroke="currentColor" strokeWidth="3" fill="none"/>
        <text x="35" y="20" fontFamily="sans-serif" fontSize="12" fontWeight="bold" letterSpacing="1">ARCHETYPE</text>
      </svg>
    )
  },
  {
    id: 7,
    name: "Nam Long",
    logo: (
      <svg viewBox="0 0 120 30" className="h-8 w-auto fill-current">
        <path d="M15 25 C 5 25, 5 5, 15 5 C 25 5, 25 25, 15 25 Z M 22 5 L 35 25 L 48 5" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="55" y="20" fontFamily="sans-serif" fontSize="13" fontWeight="bold">NAM LONG</text>
      </svg>
    )
  },
  {
    id: 8,
    name: "Hung Thinh",
    logo: (
      <svg viewBox="0 0 120 30" className="h-8 w-auto fill-current">
        <path d="M10 5 H30 M20 5 V25" stroke="currentColor" strokeWidth="3" />
        <text x="35" y="20" fontFamily="serif" fontSize="13" fontWeight="bold" letterSpacing="1">HUNG THINH</text>
      </svg>
    )
  }
];

const Partners: React.FC = () => {
  return (
    <section className="bg-[#FAFAFA] py-20">
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
                <div className="w-full md:w-2/3 border border-gray-100 bg-white shadow-sm">
                    <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y divide-gray-100">
                        {partners.map((partner) => (
                            <div 
                                key={partner.id} 
                                className="h-32 p-6 flex items-center justify-center group relative transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:z-10 bg-white"
                            >
                                <div className="text-gray-400 group-hover:text-primary transition-colors duration-300 transform group-hover:scale-110">
                                    {partner.logo}
                                </div>
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