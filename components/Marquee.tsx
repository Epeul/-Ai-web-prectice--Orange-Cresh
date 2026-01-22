import React from 'react';

interface MarqueeProps {
  text: string;
  className?: string;
  reverse?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({ text, className = "", reverse = false }) => {
  return (
    <div className={`relative flex overflow-hidden whitespace-nowrap py-6 bg-transparent ${className}`}>
        {/* Simple gradient fade on sides */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10"></div>

      <div className={`animate-marquee flex whitespace-nowrap items-center ${reverse ? 'flex-row-reverse' : ''}`}>
        <span className="text-2xl font-sans font-bold text-crush-black/90 mx-8 uppercase tracking-[0.2em]">{text}</span>
        <span className="w-2 h-2 rounded-full bg-crush-orange"></span>
        <span className="text-2xl font-sans font-bold text-crush-black/90 mx-8 uppercase tracking-[0.2em]">{text}</span>
        <span className="w-2 h-2 rounded-full bg-crush-orange"></span>
        <span className="text-2xl font-sans font-bold text-crush-black/90 mx-8 uppercase tracking-[0.2em]">{text}</span>
        <span className="w-2 h-2 rounded-full bg-crush-orange"></span>
        <span className="text-2xl font-sans font-bold text-crush-black/90 mx-8 uppercase tracking-[0.2em]">{text}</span>
        <span className="w-2 h-2 rounded-full bg-crush-orange"></span>
      </div>
      
      <div className={`absolute top-0 py-6 animate-marquee2 flex whitespace-nowrap items-center ${reverse ? 'flex-row-reverse' : ''}`}>
        <span className="text-2xl font-sans font-bold text-crush-black/90 mx-8 uppercase tracking-[0.2em]">{text}</span>
        <span className="w-2 h-2 rounded-full bg-crush-orange"></span>
        <span className="text-2xl font-sans font-bold text-crush-black/90 mx-8 uppercase tracking-[0.2em]">{text}</span>
        <span className="w-2 h-2 rounded-full bg-crush-orange"></span>
        <span className="text-2xl font-sans font-bold text-crush-black/90 mx-8 uppercase tracking-[0.2em]">{text}</span>
        <span className="w-2 h-2 rounded-full bg-crush-orange"></span>
        <span className="text-2xl font-sans font-bold text-crush-black/90 mx-8 uppercase tracking-[0.2em]">{text}</span>
        <span className="w-2 h-2 rounded-full bg-crush-orange"></span>
      </div>
    </div>
  );
};