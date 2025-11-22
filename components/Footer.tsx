import React from 'react';
import { ArrowUpRight, Phone, Mail, Globe, Facebook, Youtube } from 'lucide-react';
import IconLogo from '../IconLogo.svg';
import LogoMain from '../LogoMain.svg';

const Footer: React.FC = () => {
  return (
    <footer id="lien-he" className="bg-[#00332A] text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background Logo */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none flex items-center justify-center">
         <img 
           src={LogoMain} 
           alt="Logo Background" 
           className="w-full h-full object-cover blur-[2px]"
           style={{ filter: 'blur(2px)' }}
         />
      </div>
      
      {/* Gradient Overlay */}
       <div className="absolute inset-0 bg-gradient-to-t from-[#00332A] via-transparent to-transparent z-0"></div>


      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 items-center">
          
          {/* Left: Contact Form */}
          <div className="w-full">
            <h3 className="text-white text-lg md:text-xl font-bold uppercase tracking-widest mb-4">ĐĂNG KÝ TƯ VẤN</h3>
            <p className="text-sm text-white mb-6 leading-relaxed">
              Quý khách vui lòng để lại thông tin, đội ngũ chuyên viên sẽ liên hệ tư vấn trong thời gian sớm nhất.
            </p>
            <form className="space-y-3 max-w-sm">
              <div>
                <input 
                  type="text" 
                  placeholder="Họ tên (*)" 
                  className="w-full bg-[#004D40]/50 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#C4A980] transition-colors text-white placeholder-white/50 rounded"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-[#004D40]/50 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#C4A980] transition-colors text-white placeholder-white/50 rounded"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Điện thoại (*)" 
                  className="w-full bg-[#004D40]/50 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#C4A980] transition-colors text-white placeholder-white/50 rounded"
                />
              </div>
              <button className="bg-[#E8E8E8] text-[#00332A] px-6 py-2.5 text-sm font-bold uppercase hover:bg-[#C4A980] hover:text-white transition-all flex items-center gap-2 mt-2 rounded">
                Xem thêm
                <ArrowUpRight size={14} />
              </button>
            </form>
          </div>

          {/* Center: Logo */}
          <div className="w-full flex flex-col items-center justify-center text-center py-10 lg:py-0">
            <div className="mb-6">
              <img src={IconLogo} alt="Biểu trưng Mai Bá Hương" className="h-32 w-32 md:h-40 md:w-40 object-contain" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-white uppercase tracking-widest mb-2">MAI BÁ HƯƠNG</h2>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#C4A980] font-medium font-vogun">KẾ THỪA DI SẢN - KIẾN TẠO TƯƠNG LAI</p>
          </div>

          {/* Right: Contact Info */}
          <div className="w-full lg:pl-10 relative">
             <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-6">CÔNG TY CỔ PHẦN MAI BÁ HƯƠNG</h3>
             <div className="space-y-5 text-sm text-white">
               <div className="flex items-start gap-3 group">
                 <div className="mt-0.5 shrink-0 bg-white/10 p-1.5 rounded-full group-hover:bg-[#C4A980] transition-colors"><Globe size={12} className="text-white" /></div>
                 <p className="leading-relaxed">2012 Võ Văn Kiệt, Phường An Lạc, TP. Hồ Chí Minh</p>
               </div>
               <div className="flex items-center gap-3 group">
                 <div className="shrink-0 bg-white/10 p-1.5 rounded-full group-hover:bg-[#C4A980] transition-colors"><Phone size={12} className="text-white" /></div>
                 <p className="font-bold text-white text-lg">1900 545418</p>
               </div>
               <div className="flex items-center gap-3 group">
                 <div className="shrink-0 bg-white/10 p-1.5 rounded-full group-hover:bg-[#C4A980] transition-colors"><Mail size={12} className="text-white" /></div>
                 <p>info@mbh.com.vn</p>
               </div>
               <div className="flex items-center gap-3 group">
                 <div className="shrink-0 bg-white/10 p-1.5 rounded-full group-hover:bg-[#C4A980] transition-colors"><Globe size={12} className="text-white" /></div>
                 <p>www.mbh.com.vn</p>
               </div>
             </div>
             
             {/* Scroll Top Button */}
             <div className="mt-10 md:absolute md:-right-0 md:top-1/2 md:-translate-y-1/2">
                <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#C4A980] hover:border-[#C4A980] transition-all group"
                >
                   <ArrowUpRight size={20} className="-rotate-45 group-hover:scale-110 transition-transform" />
                </button>
             </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white uppercase tracking-wide">
          <div className="flex gap-4">
            <a href="#" className="bg-white text-[#00332A] rounded-full p-1.5 hover:bg-[#C4A980] hover:text-white transition-colors"><Facebook size={14} /></a>
            <a href="#" className="bg-white text-[#00332A] rounded-full p-1.5 hover:bg-[#C4A980] hover:text-white transition-colors"><Youtube size={14} /></a>
            {/* TikTok Icon */}
            <a href="#" className="bg-white text-[#00332A] rounded-full p-1.5 hover:bg-[#C4A980] hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            {/* Zalo Icon */}
            <a href="#" className="bg-white text-[#00332A] rounded-full p-1.5 hover:bg-[#C4A980] hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 12h8M12 8v8"/>
              </svg>
            </a>
          </div>
          <p>© 2025 Mai Bá Hương. All Rights Reserved.</p>
          <p className="hover:text-[#C4A980] cursor-pointer transition-colors">Chính sách bảo mật thông tin cá nhân</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;