import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen pt-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-crush-orange rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Text Content */}
        <div className="md:col-span-5 flex flex-col gap-6 text-center md:text-left">
          <div className="inline-block bg-crush-black text-white px-4 py-1 font-bold text-sm tracking-widest uppercase w-max mx-auto md:mx-0 transform -rotate-2">
            Since 2024
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-black leading-[0.9] text-crush-black">
            FRESH <br />
            <span className="text-crush-orange italic">VIBES</span> <br />
            ONLY.
          </h1>
          <p className="text-lg md:text-xl font-sans font-medium leading-relaxed max-w-md mx-auto md:mx-0 text-gray-800">
            일상의 지루함을 깨는 오렌지빛 감각. <br/>
            키치한 감성과 진한 커피가 만나는 공간, <br/>
            오렌지 크러쉬입니다.
          </p>
        </div>

        {/* Right Image Collage */}
        <div className="md:col-span-7 relative h-[500px] md:h-[600px] w-full mt-10 md:mt-0">
          {/* Image 1: Interior Main */}
          <div className="absolute top-0 right-0 md:right-10 w-64 h-80 md:w-80 md:h-96 z-10 transform rotate-3 border-4 border-crush-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://picsum.photos/seed/cafe-interior/600/800" 
              alt="Cafe Interior" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2: Exterior/Detail */}
          <div className="absolute bottom-10 left-4 md:left-20 w-56 h-56 md:w-72 md:h-72 z-20 transform -rotate-6 border-4 border-crush-black bg-white p-2 rounded-xl shadow-[8px_8px_0px_0px_rgba(255,77,0,1)] hover:-rotate-2 transition-transform duration-500">
            <img 
              src="https://picsum.photos/seed/cafe-exterior/600/600" 
              alt="Cafe Exterior" 
              className="w-full h-full object-cover border-2 border-black"
            />
            <div className="absolute -top-6 -right-6 bg-crush-orange text-white rounded-full p-4 w-20 h-20 flex items-center justify-center font-bold text-xs transform rotate-12 animate-spin-slow border-2 border-black">
              OPEN<br/>DAILY
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown className="w-8 h-8 text-crush-black" />
      </div>
    </section>
  );
};