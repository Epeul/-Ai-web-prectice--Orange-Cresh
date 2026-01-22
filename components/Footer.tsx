import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-crush-orange text-white border-t-4 border-black pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-6 text-black">
              ORANGE CRUSH
            </h2>
            <p className="font-sans text-lg max-w-md text-black font-medium">
              We brew coffee with attitude. <br/>
              Join the kitsch movement and taste the vibe.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-black border-b-2 border-black pb-2 mb-4 inline-block">LOCATION</h3>
            <p className="font-sans text-black/80 font-medium">
              123 Orange Street,<br/>
              Seoul, Korea<br/><br/>
              Everyday 10:00 - 22:00
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black border-b-2 border-black pb-2 mb-4 inline-block">CONTACT</h3>
            <p className="font-sans text-black/80 font-medium mb-4">
              hello@orangecrush.com<br/>
              02-1234-5678
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-black text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors border-2 border-transparent hover:border-black">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-black text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors border-2 border-transparent hover:border-black">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-black text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors border-2 border-transparent hover:border-black">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t-2 border-black/20 pt-8 flex flex-col md:flex-row justify-between items-center text-black/60 font-medium text-sm">
          <p>© 2024 ORANGE CRUSH CAFE. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};