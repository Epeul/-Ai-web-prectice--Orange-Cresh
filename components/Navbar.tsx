import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Goods', href: '#shop' }, // Goods -> Shop Section
    { name: 'Store', href: '#location' }, // Store -> Map/Location Section
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <span className="font-serif font-black text-2xl tracking-tight text-crush-black">
              ORANGE CRUSH
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="font-sans text-sm font-bold text-gray-600 hover:text-crush-orange transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-crush-black text-white px-6 py-2.5 rounded-full font-sans text-sm font-bold hover:bg-crush-orange transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
              Visit Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-crush-black hover:text-crush-orange focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl">
          <div className="px-4 py-8 space-y-4 flex flex-col items-center">
            {navLinks.map((link) => (
               <a 
                 key={link.name}
                 href={link.href} 
                 onClick={() => setIsOpen(false)} 
                 className="text-2xl font-serif font-medium hover:text-crush-orange transition-colors"
               >
                 {link.name}
               </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};