import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen pt-20 flex flex-col items-center justify-center overflow-hidden bg-[#FDFBF7]">
      {/* Abstract Background Blurs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-300/30 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-yellow-200/40 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Text Content - Cleaner & Bolder */}
        <div className="lg:col-span-5 flex flex-col gap-8 text-center lg:text-left order-2 lg:order-1">
          <div className="flex flex-col gap-2">
            <span className="font-sans font-bold text-crush-orange tracking-[0.2em] text-sm uppercase">
              Est. 2024 Seoul
            </span>
            <h1 className="text-6xl lg:text-8xl font-serif font-medium leading-[0.95] text-crush-black tracking-tight">
              Orange <br />
              <i className="font-serif font-light text-crush-orange">Crush</i> <br />
              Moment.
            </h1>
          </div>
          
          <p className="text-lg font-sans text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
            감각적인 오렌지빛 공간에서 즐기는 여유. <br/>
            트렌디한 감성과 깊은 풍미가 공존하는 곳.
          </p>

          <div className="flex gap-4 justify-center lg:justify-start pt-4">
             <button className="bg-crush-black text-white px-8 py-4 rounded-full font-sans font-bold hover:bg-crush-orange transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm tracking-wide">
              OUR STORY
            </button>
          </div>
        </div>

        {/* Right Visual - 3D Perspective & Depth */}
        <div className="lg:col-span-7 relative h-[60vh] w-full flex items-center justify-center perspective-[2000px] order-1 lg:order-2 group">
          {/* Main Image with 3D Tilt */}
          <div className="relative w-[80%] h-[90%] transform transition-transform duration-700 ease-out group-hover:rotate-y-[-5deg] group-hover:rotate-x-[5deg] preserve-3d">
            <div className="absolute inset-0 bg-black/5 rounded-[3rem] transform translate-x-4 translate-y-4 blur-xl"></div>
            <img 
              src="https://picsum.photos/seed/cafe-interior/800/1000" 
              alt="Space" 
              className="w-full h-full object-cover rounded-[3rem] shadow-2xl z-10 relative"
            />
            
            {/* Floating Element - Gives Spatial Depth */}
            <div className="absolute -bottom-10 -left-10 w-48 h-64 transform translate-z-[50px] transition-transform duration-500 hover:translate-y-[-10px]">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl overflow-hidden p-2">
                 <img 
                  src="https://picsum.photos/seed/cafe-exterior/400/500" 
                  alt="Detail" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

             {/* Decorative Circle */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-crush-orange rounded-full flex items-center justify-center text-white font-serif italic text-xl z-20 animate-float shadow-lg">
                Vibe
             </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce opacity-50">
        <ArrowDown className="w-6 h-6 text-crush-black" />
      </div>
    </section>
  );
};