import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { MenuSection } from './components/MenuSection';
import { StoreSection } from './components/StoreSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-crush-cream text-crush-black font-sans selection:bg-crush-orange selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <Marquee 
          text="FRESH COFFEE • GOOD VIBES • ORANGE CRUSH • KITSCH LIFE • " 
          className="transform -rotate-1 shadow-xl z-20"
        />
        
        <MenuSection />
        
        <Marquee 
          text="BEST BEANS • SWEET DESSERT • DAILY ROAST • " 
          className="bg-crush-black border-y-white"
          reverse={true}
        />

        <StoreSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;