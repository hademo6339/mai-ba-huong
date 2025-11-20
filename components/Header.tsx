import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import { NavItem } from '../types';

interface HeaderProps {
  scrolled: boolean;
}

const navItems: NavItem[] = [
  { label: 'Giới thiệu', href: '#gioi-thieu' },
  { label: 'Dự án', href: '#du-an' },
  { label: 'Tin tức', href: '#tin-tuc' },
  { label: 'Thư viện', href: '#thu-vien' },
  { label: 'Tuyển dụng', href: '#tuyen-dung' },
  { label: 'Liên hệ', href: '#lien-he' },
];

const BrandLogo: React.FC<{ className?: string, isScrolled: boolean }> = ({ className, isScrolled }) => (
    <svg width="280" height="60" viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Icon / Monogram */}
    <g transform="translate(5, 5)">
       {/* Outer Circle */}
       <circle cx="25" cy="25" r="24" stroke="#C4A980" strokeWidth="1.2"/>
       
       {/* Stylized Monogram (MBH Abstract) */}
       <path d="M17 38V16" stroke="#C4A980" strokeWidth="1.5" strokeLinecap="round"/>
       <path d="M33 38V16" stroke="#C4A980" strokeWidth="1.5" strokeLinecap="round"/>
       <path d="M25 38V23" stroke="#C4A980" strokeWidth="1.5" strokeLinecap="round"/>
       
       {/* Connecting curves forming the M/B shape */}
       <path d="M17 16C17 16 21 23 25 23C29 23 33 16 33 16" stroke="#C4A980" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </g>

    {/* Text */}
    <g transform="translate(65, 12)">
      <text x="0" y="22" fontFamily="Playfair Display" fontWeight="700" fontSize="24" fill={isScrolled ? '#004D40' : '#C4A980'} letterSpacing="0.02em">MAI BÁ HƯƠNG</text>
      <text x="1" y="38" fontFamily="Manrope" fontSize="7" fontWeight="600" fill={isScrolled ? '#555555' : '#C4A980'} letterSpacing="0.2em" textTransform="uppercase">KẾ THỪA DI SẢN - KIẾN TẠO TƯƠNG LAI</text>
    </g>
  </svg>
);

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-gradient-to-b from-black/60 to-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
           <BrandLogo className="h-12 md:h-14 w-auto" isScrolled={isScrolled} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-8 text-[12px] font-bold tracking-widest uppercase">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`hover:text-accent transition-colors relative group ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden xl:flex items-center space-x-6 text-xs font-medium">
          <div className={`flex items-center cursor-pointer space-x-1 hover:text-accent transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            <span>VN</span>
            <ChevronDown size={12} />
          </div>
          
          {/* Divider */}
          <div className={`h-3 w-px ${isScrolled ? 'bg-gray-300' : 'bg-white/30'}`}></div>

          <div className={`flex items-center border rounded-full px-3 py-1.5 space-x-2 ${isScrolled ? 'border-gray-300 text-gray-500' : 'border-white/30 text-white/80'} hover:border-accent transition-colors`}>
            <input 
               type="text" 
               placeholder="Tìm kiếm" 
               className="bg-transparent border-none outline-none text-xs w-20 placeholder-current focus:w-28 transition-all"
            />
            <Search size={12} className="cursor-pointer hover:text-accent" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`xl:hidden p-2 ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-0 bg-primary-dark z-40 xl:hidden flex flex-col p-8 animate-fade-in">
          <div className="flex justify-end mb-8">
             <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                <X size={24} />
             </button>
          </div>
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-white text-xl font-serif py-4 border-b border-white/10 hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-auto flex items-center justify-between text-white border-t border-white/10 pt-6">
            <div className="flex space-x-4">
                <span>VN</span>
                <span>|</span>
                <span>EN</span>
            </div>
            <Search size={20} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;