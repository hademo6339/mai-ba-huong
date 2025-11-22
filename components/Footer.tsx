import React from 'react';
import { ArrowUpRight, Phone, Mail, Globe, Facebook, Youtube, Instagram } from 'lucide-react';
import IconLogo from '../IconLogo.png';

const Footer: React.FC = () => {
  return (
    <footer id="lien-he" className="bg-[#00332A] text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
         <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
             <defs>
                 <pattern id="footer-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                     <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="white" strokeWidth="0.5"/>
                 </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#footer-pattern)"/>
         </svg>
      </div>
      
      {/* Gradient Overlay */}
       <div className="absolute inset-0 bg-gradient-to-t from-[#00332A] via-transparent to-transparent z-0"></div>


      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 items-center">
          
          {/* Left: Contact Form */}
          <div className="w-full">
            <h3 className="text-[#C4A980] text-sm font-bold uppercase tracking-widest mb-4">Đăng ký tư vấn</h3>
            <p className="text-xs text-gray-300 mb-6 leading-relaxed w-4/5">
              Quý khách vui lòng để lại thông tin, đội ngũ chuyên viên sẽ liên hệ tư vấn trong thời gian sớm nhất.
            </p>
            <form className="space-y-3 max-w-sm">
              <div>
                <input 
                  type="text" 
                  placeholder="Họ tên (*)" 
                  className="w-full bg-[#004D40]/50 border border-white/10 px-4 py-3 text-xs focus:outline-none focus:border-[#C4A980] transition-colors text-white placeholder-white/50 rounded-sm"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-[#004D40]/50 border border-white/10 px-4 py-3 text-xs focus:outline-none focus:border-[#C4A980] transition-colors text-white placeholder-white/50 rounded-sm"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Điện thoại (*)" 
                  className="w-full bg-[#004D40]/50 border border-white/10 px-4 py-3 text-xs focus:outline-none focus:border-[#C4A980] transition-colors text-white placeholder-white/50 rounded-sm"
                />
              </div>
              <button className="bg-[#E8E8E8] text-[#00332A] px-6 py-2 text-xs font-bold uppercase hover:bg-[#C4A980] hover:text-white transition-all flex items-center gap-2 mt-2 rounded-sm">
                Gửi
                <ArrowUpRight size={14} />
              </button>
            </form>
          </div>

          {/* Center: Logo */}
          <div className="w-full flex flex-col items-center justify-center text-center py-10 lg:py-0">
            <div className="mb-6">
              <img src={IconLogo} alt="Biểu trưng Mai Bá Hương" className="h-24 w-24 object-contain" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-white uppercase tracking-widest mb-2">MAI BÁ HƯƠNG</h2>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#C4A980] font-bold">KẾ THỪA DI SẢN - KIẾN TẠO TƯƠNG LAI</p>
          </div>

          {/* Right: Contact Info */}
          <div className="w-full lg:pl-10 relative">
             <h3 className="text-[#C4A980] text-sm font-bold uppercase tracking-widest mb-6">Công ty cổ phần Mai Bá Hương</h3>
             <div className="space-y-5 text-xs text-gray-300">
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
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 uppercase tracking-wide">
          <div className="flex gap-4">
            <a href="#" className="bg-white text-[#00332A] rounded-full p-1.5 hover:bg-[#C4A980] hover:text-white transition-colors"><Facebook size={14} /></a>
            <a href="#" className="bg-white text-[#00332A] rounded-full p-1.5 hover:bg-[#C4A980] hover:text-white transition-colors"><Youtube size={14} /></a>
            <a href="#" className="bg-white text-[#00332A] rounded-full p-1.5 hover:bg-[#C4A980] hover:text-white transition-colors"><Instagram size={14} /></a>
          </div>
          <p>© 2025 Mai Bá Hương. All Rights Reserved.</p>
          <p className="hover:text-white cursor-pointer transition-colors">Chính sách bảo mật thông tin cá nhân</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;