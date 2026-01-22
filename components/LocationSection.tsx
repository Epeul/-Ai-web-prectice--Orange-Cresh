import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="relative py-24 bg-crush-black text-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Content Info */}
          <div className="w-full lg:w-1/3 flex flex-col gap-10">
            <div>
              <span className="text-crush-orange font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                Store Location
              </span>
              <h2 className="text-5xl lg:text-6xl font-serif font-medium leading-tight">
                Find Our <br/>
                <span className="text-crush-orange italic">Spot.</span>
              </h2>
            </div>

            <div className="space-y-8 font-sans">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/10 rounded-full shrink-0">
                  <MapPin className="w-6 h-6 text-crush-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Address</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Gangnam-gu, Seoul, Republic of Korea<br/>
                    (Orange Street 123)
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/10 rounded-full shrink-0">
                  <Clock className="w-6 h-6 text-crush-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Everyday<br/>
                    10:00 AM - 10:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/10 rounded-full shrink-0">
                  <Phone className="w-6 h-6 text-crush-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Contact</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    +82 02-1234-5678<br/>
                    hello@orangecrush.com
                  </p>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-full py-4 bg-white text-crush-black font-bold rounded-xl hover:bg-crush-orange hover:text-white transition-all duration-300 text-center block"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Right: Map Visual */}
          <div className="w-full lg:w-2/3 h-[500px] lg:h-[600px] relative rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl group">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.043329381628!2d127.02534561531023!3d37.50654097980894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15aee94d653%3A0x6a03195afc08722!2sGangnam-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1623123456789!5m2!1sen!2skr" 
               width="100%" 
               height="100%" 
               style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }} 
               allowFullScreen 
               loading="lazy"
               className="group-hover:grayscale-0 transition-all duration-700"
             ></iframe>
            
            {/* Overlay for tint (removed to allow interaction, but kept subtle pointer events none for style?) No, interaction is better */}
            <div className="absolute inset-0 bg-crush-orange/10 pointer-events-none mix-blend-overlay"></div>

            {/* Custom Map Marker UI - Decorative floating over map */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 pointer-events-none">
               <div className="relative">
                 <div className="w-4 h-4 bg-crush-orange rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
                 <div className="w-16 h-16 bg-crush-orange text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,77,0,0.6)] border-4 border-white/20">
                    <MapPin className="w-8 h-8 fill-current" />
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};