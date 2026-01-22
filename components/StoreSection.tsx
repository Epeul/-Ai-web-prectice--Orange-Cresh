import React from 'react';
import { MERCH_ITEMS } from '../constants';
import { ShoppingBag } from 'lucide-react';

export const StoreSection: React.FC = () => {
  return (
    <section id="store" className="py-24 bg-crush-cream relative">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: 'linear-gradient(#FF4D00 1px, transparent 1px), linear-gradient(90deg, #FF4D00 1px, transparent 1px)', 
        backgroundSize: '40px 40px' 
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-black pb-6">
          <div>
            <span className="text-crush-orange font-bold tracking-widest uppercase mb-2 block">Online Store</span>
            <h2 className="text-5xl md:text-6xl font-serif font-black text-crush-black">
              GOODS & <br/>BEANS
            </h2>
          </div>
          <button className="mt-6 md:mt-0 flex items-center gap-2 bg-crush-black text-white px-8 py-3 rounded-full font-bold hover:bg-crush-orange transition-colors border-2 border-transparent hover:border-black">
            <ShoppingBag size={20} />
            VIEW ALL
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MERCH_ITEMS.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-2xl border-4 border-black bg-white mb-4">
                {item.isNew && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 border border-black z-10">
                    NEW
                  </span>
                )}
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-black font-bold px-6 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000]">
                    ADD
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-crush-black group-hover:text-crush-orange transition-colors">
                {item.name}
              </h3>
              <p className="text-gray-600 font-sans font-bold mt-1">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};