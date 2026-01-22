import React from 'react';

interface MarqueeProps {
  text: string;
  className?: string;
  reverse?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({ text, className = "", reverse = false }) => {
  return (
    <div className={`relative flex overflow-hidden whitespace-nowrap border-y-2 border-crush-black bg-crush-orange py-3 ${className}`}>
      <div className={`animate-marquee flex whitespace-nowrap ${reverse ? 'flex-row-reverse' : ''}`}>
        <span className="text-3xl font-bold font-serif italic text-white mx-4 uppercase tracking-wider">{text}</span>
        <span className="text-3xl font-bold font-serif italic text-crush-black mx-4 uppercase tracking-wider">{text}</span>
        <span className="text-3xl font-bold font-serif italic text-white mx-4 uppercase tracking-wider">{text}</span>
        <span className="text-3xl font-bold font-serif italic text-crush-black mx-4 uppercase tracking-wider">{text}</span>
        <span className="text-3xl font-bold font-serif italic text-white mx-4 uppercase tracking-wider">{text}</span>
        <span className="text-3xl font-bold font-serif italic text-crush-black mx-4 uppercase tracking-wider">{text}</span>
      </div>
      <div className={`absolute top-0 animate-marquee2 flex whitespace-nowrap ${reverse ? 'flex-row-reverse' : ''}`}>
        <span className="text-3xl font-bold font-serif italic text-white mx-4 uppercase tracking-wider">{text}</span>
        <span className="text-3xl font-bold font-serif italic text-crush-black mx-4 uppercase tracking-wider">{text}</span>
        <span className="text-3xl font-bold font-serif italic text-white mx-4 uppercase tracking-wider">{text}</span>
        <span className="text-3xl font-bold font-serif italic text-crush-black mx-4 uppercase tracking-wider">{text}</span>
        <span className="text-3xl font-bold font-serif italic text-white mx-4 uppercase tracking-wider">{text}</span>
        <span className="text-3xl font-bold font-serif italic text-crush-black mx-4 uppercase tracking-wider">{text}</span>
      </div>
    </div>
  );
};