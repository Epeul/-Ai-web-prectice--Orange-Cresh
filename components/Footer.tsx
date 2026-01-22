import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-serif font-medium mb-6 text-white tracking-tight">
                Orange Crush.
              </h2>
              <p className="font-sans text-gray-400 font-normal leading-relaxed max-w-sm">
                A space for inspiration and comfort. <br/>
                Experience the difference in every cup.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="font-sans font-bold text-xs tracking-widest text-gray-500 mb-6 uppercase">Visit Us</h3>
            <p className="font-sans text-gray-300 leading-loose font-light">
              123 Orange Street, Seoul<br/>
              02-1234-5678<br/>
              hello@orangecrush.com
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-sans font-bold text-xs tracking-widest text-gray-500 mb-6 uppercase">Hours</h3>
            <p className="font-sans text-gray-300 leading-loose font-light">
              Mon - Fri : 08:00 - 22:00<br/>
              Sat - Sun : 10:00 - 23:00
            </p>
          </div>

          <div className="md:col-span-2">
             <h3 className="font-sans font-bold text-xs tracking-widest text-gray-500 mb-6 uppercase">Social</h3>
             <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-crush-orange transition-colors"><Instagram size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-crush-orange transition-colors"><Twitter size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-crush-orange transition-colors"><Facebook size={24} /></a>
             </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-light">
          <p>© 2024 ORANGE CRUSH. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};