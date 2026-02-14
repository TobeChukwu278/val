import HeroSection from './components/HeroSection';
import ArchiveSection from './components/ArchiveSection';
import VirtualVault from './components/VirtualVault';
import SealedNote from './components/SealedNote';
import Ambiance from './components/Ambiance';
import GoldenOrbitCursor from './components/GoldenOrbitCursor';

function App() {
  return (
    <div className="relative min-h-screen bg-onyx">
      {/* Custom Golden Cursor */}
      <GoldenOrbitCursor />

      {/* Main content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Section Divider */}
        <div className="section-divider max-w-4xl mx-auto" />

        {/* Archive Section - Our Story */}
        <ArchiveSection />

        {/* Section Divider */}
        <div className="section-divider max-w-4xl mx-auto" />

        {/* Virtual Vault - Gallery */}
        <VirtualVault />

        {/* Section Divider */}
        <div className="section-divider max-w-4xl mx-auto" />

        {/* Sealed Note - Interactive Letter */}
        <SealedNote />

        {/* Footer */}
        <footer className="relative py-16 bg-onyx border-t border-champagne/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="font-display text-2xl text-ivory mb-4">
              <span className="text-gold-gradient">Forever Yours</span>
            </h3>
            <p className="font-body text-champagne/40 text-sm tracking-widest">
              Made with love this Valentine's Day
            </p>

            {/* Decorative elements */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-champagne/30" />
              <span className="text-champagne/20 text-xl">♥</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-champagne/30" />
            </div>
          </div>
        </footer>
      </main>

      {/* Floating Music Widget */}
      <Ambiance />
    </div>
  );
}

export default App;
