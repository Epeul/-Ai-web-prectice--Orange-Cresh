import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { MenuSection } from './components/MenuSection';
import { StoreSection } from './components/StoreSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-crush-black font-sans selection:bg-crush-orange selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <Marquee 
          text="Fresh Coffee • Orange Vibe • Daily Roast • Kitsch Life •" 
        />
        
        <MenuSection />
        
        <StoreSection />

        <LocationSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;