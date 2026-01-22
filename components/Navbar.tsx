import React, { useState } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-crush-cream/90 backdrop-blur-sm border-b-2 border-crush-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="bg-crush-orange p-1 rounded-full border-2 border-crush-black">
              <Coffee className="h-6 w-6 text-white" />
            </div>
            <span className="font-serif font-black text-2xl tracking-tighter text-crush-black">
              ORANGE CRUSH
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="font-sans font-bold text-crush-black hover:text-crush-orange transition-colors">ABOUT</a>
            <a href="#menu" className="font-sans font-bold text-crush-black hover:text-crush-orange transition-colors">MENU</a>
            <a href="#store" className="font-sans font-bold text-crush-black hover:text-crush-orange transition-colors">STORE</a>
            <button className="bg-crush-black text-white px-5 py-2 rounded-full font-bold hover:bg-crush-orange hover:text-black border-2 border-transparent hover:border-black transition-all">
              VISIT US
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-crush-black hover:text-crush-orange focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-crush-cream border-b-2 border-crush-black">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-xl font-serif font-bold hover:text-crush-orange">ABOUT</a>
            <a href="#menu" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-xl font-serif font-bold hover:text-crush-orange">MENU</a>
            <a href="#store" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-xl font-serif font-bold hover:text-crush-orange">STORE</a>
          </div>
        </div>
      )}
    </nav>
  );
};