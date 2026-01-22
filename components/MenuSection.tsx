import React from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

export const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="relative bg-[#FDFBF7]">
      {/* Section Header */}
      <div className="py-24 px-4 text-center sticky top-0 z-0 h-[50vh] flex flex-col justify-center items-center opacity-50 scale-90">
        <span className="text-crush-orange font-bold tracking-[0.5em] uppercase text-sm mb-6 block animate-pulse">
          Orange Crush Series
        </span>
        <h2 className="text-[12vw] leading-none font-serif font-medium text-crush-black tracking-tighter">
          MENU
        </h2>
        <p className="mt-8 text-xl font-sans text-gray-500 max-w-xl mx-auto">
          Scroll down to explore our signature flavors.
        </p>
      </div>

      {/* Stacking Cards Container */}
      <div className="relative z-10 -mt-[20vh] pb-24">
        {MENU_ITEMS.map((item, index) => (
          <SingleMenuItem key={item.id} item={item} index={index} total={MENU_ITEMS.length} />
        ))}
      </div>
    </section>
  );
};

const SingleMenuItem: React.FC<{ item: MenuItem; index: number; total: number }> = ({ item, index, total }) => {
  // Rotate slightly based on index for a "messy" organic stack feel
  const rotation = index % 2 === 0 ? 'lg:-rotate-1' : 'lg:rotate-1';
  
  return (
    <div className="sticky top-0 h-screen flex items-center justify-center p-4 overflow-hidden">
      <div 
        className={`
          relative w-full max-w-6xl aspect-[9/14] lg:aspect-[16/8] 
          bg-[#FDFBF7] rounded-[3rem] border border-black/5 shadow-2xl 
          flex flex-col lg:flex-row overflow-hidden
          transition-transform duration-500 ease-out ${rotation}
        `}
        style={{ 
          marginTop: `${index * 20}px`, // Slight offset for stacking visibility
          boxShadow: '0 -20px 60px -10px rgba(0,0,0,0.1)'
        }}
      >
        {/* Number Watermark */}
        <div className="absolute top-4 right-8 text-[15rem] font-serif font-bold text-black/[0.03] leading-none z-0 pointer-events-none">
          {index + 1}
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative group overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-crush-orange/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Tag */}
          <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full border border-black/5">
             <span className="font-sans font-bold text-xs tracking-widest uppercase">{item.tag}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full p-8 lg:p-20 flex flex-col justify-center relative z-10 bg-white/50 backdrop-blur-3xl">
          <div className="flex flex-col gap-6">
            <h3 className="text-5xl lg:text-7xl font-serif font-medium text-crush-black leading-[0.9] tracking-tight">
              {item.name}
            </h3>
            
            <div className="w-20 h-1 bg-crush-orange/50 rounded-full"></div>
            
            <p className="text-lg lg:text-xl font-sans text-gray-600 font-medium leading-relaxed max-w-md">
              {item.description}
            </p>

            <div className="mt-8 flex items-center gap-6">
              <span className="text-4xl font-serif font-medium italic text-crush-orange">
                ${item.price}
              </span>
              <button className="px-8 py-3 rounded-full border border-crush-black font-bold text-sm hover:bg-crush-black hover:text-white transition-colors uppercase tracking-wider">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};