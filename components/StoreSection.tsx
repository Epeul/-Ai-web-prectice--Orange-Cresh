import React from 'react';
import { MERCH_ITEMS } from '../constants';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export const StoreSection: React.FC = () => {
  return (
    <section id="shop" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-crush-orange font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Online Shop</span>
            <h2 className="text-5xl font-serif font-medium text-crush-black leading-tight">
              Curated Goods
            </h2>
          </div>
          <button className="group mt-6 md:mt-0 flex items-center gap-2 text-crush-black font-bold hover:text-crush-orange transition-colors">
            VIEW ALL PRODUCTS
            <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {MERCH_ITEMS.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-gray-50 mb-6 transition-all duration-300 group-hover:shadow-xl">
                {item.isNew && (
                  <span className="absolute top-4 left-4 bg-crush-orange text-white text-[10px] font-bold px-3 py-1 rounded-full z-10 tracking-widest uppercase">
                    New Arrival
                  </span>
                )}
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Modern Floating Add Button */}
                <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-crush-black hover:text-white transition-colors">
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </div>
              
              <h3 className="text-xl font-serif font-medium text-crush-black group-hover:text-crush-orange transition-colors">
                {item.name}
              </h3>
              <p className="text-gray-500 font-sans font-medium mt-1 text-sm">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};