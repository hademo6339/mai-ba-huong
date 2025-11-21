import React, { useState } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import LogoNgang from '../logo-ngang.png';

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

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm h-[80px] md:h-[90px] transition-all duration-300"
    >
      <div className="container mx-auto px-4 md:px-8 h-full flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0">
           <img src={LogoNgang} alt="Mai Bá Hương" className="h-10 md:h-12 w-auto object-contain" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-8 text-[13px] font-medium text-gray-600">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="hover:text-[#004D40] transition-colors relative group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C4A980] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden xl:flex items-center space-x-6 text-xs font-medium text-gray-500">
          <div className="flex items-center cursor-pointer space-x-1 hover:text-[#004D40] transition-colors">
            <span>VN</span>
            <ChevronDown size={12} />
          </div>
          
          {/* Divider */}
          <div className="h-4 w-px bg-gray-200"></div>

          <div className="flex items-center border border-gray-200 rounded-full px-4 py-2 space-x-2 hover:border-[#C4A980] transition-colors group bg-white">
            <input 
               type="text" 
               placeholder="Tìm kiếm" 
               className="bg-transparent border-none outline-none text-xs w-24 text-gray-600 placeholder-gray-400 focus:w-32 transition-all"
            />
            <Search size={14} className="cursor-pointer text-gray-400 group-hover:text-[#C4A980] transition-colors" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="xl:hidden p-2 text-[#004D40]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[80px] bg-white z-40 xl:hidden flex flex-col p-8 border-t border-gray-100 animate-fade-in h-[calc(100vh-80px)]">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-[#004D40] text-lg font-serif font-medium py-4 border-b border-gray-100 hover:text-[#C4A980] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-auto flex flex-col gap-6">
             <div className="flex items-center gap-4 text-gray-600">
                <span>VN</span>
                <span className="w-px h-4 bg-gray-300"></span>
                <span>EN</span>
             </div>
             <div className="flex items-center border border-gray-200 rounded-full px-4 py-3">
                <input 
                  type="text" 
                  placeholder="Tìm kiếm..." 
                  className="bg-transparent border-none outline-none text-sm w-full text-gray-600"
                />
                <Search size={18} className="text-gray-400" />
             </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;