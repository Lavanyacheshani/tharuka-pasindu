import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Music2, Volume2, VolumeX } from 'lucide-react';
import { FloatingPetals } from './components/FloatingPetals';
import { Envelope } from './components/Envelope';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { CeremonyDetails } from './components/CeremonyDetails';
import { CoupleDetails } from './components/CoupleDetails';
// Removed Timeline import
import { Location } from './components/Location';
import { Footer } from './components/Footer';

export default function App() {
  const [showMain, setShowMain] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const weddingDate = new Date('2026-05-21T08:15:00');

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Audio play blocked: ", err));
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-brand-gold selection:text-white overflow-x-hidden bg-brand-primary">
      <FloatingPetals />
      
      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/paulyudin-wedding-485932.mp3"
        loop
      />

      <AnimatePresence mode="wait">
        {!showMain ? (
          <Envelope key="envelope" onComplete={() => setShowMain(true)} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="relative z-10"
          >
            {/* Music Toggle Button */}
            <button
              onClick={toggleMusic}
              className="fixed bottom-8 right-8 z-[60] w-14 h-14 glass rounded-full flex items-center justify-center text-brand-secondary hover:bg-brand-secondary hover:text-brand-primary transition-all active:scale-90 shadow-2xl group"
            >
              <div className="absolute inset-0 rounded-full border border-brand-sakura/20 scale-110 group-hover:scale-125 transition-transform" />
              {isMusicPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
            </button>

            <section id="hero">
              <Hero />
            </section>

            <section id="countdown" className="py-16 sm:py-32 relative overflow-hidden section-dark">
              {/* Premium Background Ambient Glows */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] bg-brand-sakura/30 blur-[120px] rounded-full" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[70%] bg-brand-primary/10 blur-[120px] rounded-full" />
              </div>
              
              <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-brand-primary/60" />
                  <span className="text-brand-primary uppercase tracking-[0.5em] text-[11px] font-semibold font-sans drop-shadow-sm">The Final Countdown</span>
                  <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-brand-primary/60" />
                </div>
                
                <h2 className="text-5xl sm:text-7xl font-display text-brand-primary tracking-tight mb-6 drop-shadow-sm">
                  Until We Say <span className="italic text-brand-primary/80 font-light">"I Do"</span>
                </h2>
                
                <p className="text-lg sm:text-xl font-serif italic text-brand-primary/70 mb-12 sm:mb-16 max-w-2xl text-center leading-relaxed">
                  Time is standing still as we eagerly await the moment our forever begins.
                </p>

                <Countdown targetDate={weddingDate} />
              </div>
            </section>

            <section id="couple" className="py-16 sm:py-32 section-light">
              <CoupleDetails />
            </section>

            <section id="ceremony" className="py-16 sm:py-32 section-dark">
              <CeremonyDetails />
            </section>

            {/* Timeline section removed entirely as requested */}

            <section id="location" className="py-16 sm:py-32 section-light">
              <Location />
            </section>



            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

