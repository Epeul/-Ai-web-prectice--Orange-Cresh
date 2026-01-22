import React, { useEffect, useRef, useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

export const MenuSection: React.FC = () => {
  // We will simply stack them and use sticky behavior for a nice scroll effect
  return (
    <section id="menu" className="relative py-20 bg-crush-black text-crush-cream border-t-4 border-crush-orange">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-5xl md:text-7xl font-serif font-black text-crush-orange mb-4">
          OUR MENU
        </h2>
        <p className="text-xl font-sans max-w-2xl mx-auto opacity-80">
          오감을 자극하는 오렌지 크러쉬만의 시그니처 메뉴들을 만나보세요.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {MENU_ITEMS.map((item, index) => (
          <SingleMenuItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

const SingleMenuItem: React.FC<{ item: MenuItem; index: number }> = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="sticky top-20 min-h-[80vh] flex items-center justify-center py-10">
      <div className={`
        relative w-full bg-crush-cream text-crush-black border-4 border-crush-orange rounded-[3rem] p-6 md:p-12 
        flex flex-col md:flex-row gap-8 md:gap-16 items-center shadow-[12px_12px_0px_0px_#fff]
        transition-transform duration-500
        ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}
      `}>
        
        {/* Image Side */}
        <div className="w-full md:w-1/2 relative group">
          <div className="overflow-hidden rounded-2xl border-4 border-black aspect-[4/5] relative">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-crush-orange opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          {/* Floating Tag */}
          <div className="absolute -top-4 -right-4 bg-crush-orange text-white px-4 py-2 font-bold font-sans border-2 border-black transform rotate-3 shadow-[4px_4px_0px_0px_#000]">
            {item.tag}
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-4">
          <span className="text-6xl font-serif font-black text-stroke text-transparent" style={{ WebkitTextStroke: '1px #FF4D00' }}>
            0{item.id}
          </span>
          <h3 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            {item.name}
          </h3>
          <div className="w-20 h-2 bg-crush-orange rounded-full"></div>
          <p className="text-lg font-sans font-medium leading-relaxed">
            {item.description}
          </p>
          <div className="mt-4 text-3xl font-bold font-sans">
            {item.price}
          </div>
        </div>
      </div>
    </div>
  );
};