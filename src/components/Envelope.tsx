import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Feather } from 'lucide-react';
import { FloatingPetals } from './FloatingPetals';

interface EnvelopeProps {
  onComplete: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onComplete }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleOpen = () => {
    if (isOpened) return;
    setIsOpened(true);
    setTimeout(() => {
      setIsDone(true);
      setTimeout(onComplete, 800);
    }, 4500);
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(30px)' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Deep Cinematic Velvet Background */}
          <div className="absolute inset-0 bg-[#160a0f]" />
          <div className="absolute top-[-20%] right-[-10%] w-[100vw] h-[100vw] max-w-[1200px] max-h-[1200px] bg-brand-sakura-deep/30 blur-[150px] rounded-full opacity-80 pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[-20%] left-[-10%] w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-brand-sakura/20 blur-[150px] rounded-full opacity-60 pointer-events-none mix-blend-screen" />
          
          <FloatingPetals />

          {/* Majestic Glow Behind Envelope */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-sakura/20 rounded-full blur-[90px]"
            animate={isOpened ? { scale: 1.8, opacity: 0.3 } : { scale: 1, opacity: 0.9 }}
            transition={{ duration: 3 }}
          />

          <motion.div 
            className="relative w-[340px] h-[240px] sm:w-[580px] sm:h-[400px] perspective-1500"
            initial={{ scale: 0.85, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Envelope Back Base (Premium Cherry Blossom Texture) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#fff0f3] to-[#ffe5ec] shadow-[0_50px_100px_rgba(251,113,133,0.3)] rounded-xl border border-brand-sakura overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-overlay opacity-40" />
               <div className="absolute inset-3 border-[1.5px] border-brand-sakura-deep/30 rounded-lg pointer-events-none" />
            </div>
            
            {/* Pull-out Arched Invitation Card */}
            <motion.div
              className="absolute left-4 right-4 sm:left-6 sm:right-6 top-8 sm:top-10 bottom-2 bg-white shadow-[0_0_50px_rgba(251,113,133,0.15)] rounded-t-[4rem] sm:rounded-t-[6rem] flex flex-col items-center justify-start pt-4 sm:pt-6 text-center z-10 overflow-hidden border-t-[4px] sm:border-t-[6px] border-x-[4px] sm:border-x-[6px] border-white"
              initial={{ y: "0%" }}
              animate={isOpened ? { y: "-88%", zIndex: 40, rotate: -1 } : {}}
              transition={{ delay: 1.5, duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Card Inner Arch Border */}
              <div className="absolute inset-1 border-[1px] border-brand-sakura-deep/30 rounded-t-[3.5rem] sm:rounded-t-[5.5rem] pointer-events-none" />
              <div className="absolute inset-2 border border-brand-sakura/30 rounded-t-[3rem] sm:rounded-t-[5rem] pointer-events-none" />
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={isOpened ? { opacity: 1 } : {}}
                transition={{ delay: 2.8, duration: 1.5 }}
                className="relative z-10 w-full px-2 flex flex-col items-center h-full max-h-full"
              >
                <Feather className="w-4 h-4 sm:w-6 sm:h-6 text-brand-sakura-deep/70 mb-2 sm:mb-3" />
                
                <h2 className="text-2xl sm:text-4xl font-display font-medium text-stone-800 tracking-tight leading-[1.1] mb-2 sm:mb-3">
                  Dimalka <br/>
                  <span className="text-lg sm:text-2xl text-brand-sakura-deep italic font-light my-0.5 sm:my-1 block">&</span> 
                  Dinindu
                </h2>
                
                <div className="w-10 sm:w-16 h-[1.5px] bg-brand-sakura-deep/40 mx-auto my-1 sm:my-3" />
                
                <p className="text-[7px] sm:text-[10px] font-sans tracking-[0.2em] sm:tracking-[0.4em] uppercase text-stone-500 mb-1 sm:mb-2 font-bold leading-none">
                  Are getting married
                </p>
                <p className="text-sm sm:text-xl font-serif text-brand-sakura-deep tracking-widest mt-0.5 drop-shadow-sm leading-none">
                  20 • 08 • 2026
                </p>
              </motion.div>
              
              {/* Subtle floral watermark inside */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-sakura/20 rounded-full blur-2xl pointer-events-none" />
            </motion.div>

            {/* Envelope Flap (Top) */}
            <motion.div
              className="absolute top-0 left-0 w-full h-[65%] z-30 origin-top pointer-events-none"
              initial={{ rotateX: 0 }}
              animate={isOpened ? { rotateX: 180, zIndex: 0 } : {}}
              transition={{ delay: 0.6, duration: 1.5, ease: [0.45, 0, 0.15, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front of Flap */}
              <div 
                className="absolute inset-0 drop-shadow-[0_10px_20px_rgba(251,113,133,0.2)]" 
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="w-full h-full bg-gradient-to-b from-[#fff5f7] to-[#ffd6e0] overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}>
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-overlay opacity-40" />
                   {/* Deep Sakura edge trim on flap */}
                   <div className="absolute bottom-0 left-0 w-full h-full border-b-[3px] border-r-[3px] border-brand-sakura-deep/40 transform rotate-45 translate-y-1/2 scale-150" />
                </div>
              </div>
              
              {/* Inside of Flap (Luxury Lining) */}
              <div 
                className="absolute inset-0" 
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="w-full h-full bg-gradient-to-t from-brand-sakura-deep to-[#ffb3c6] border-t-2 border-white" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}>
                   {/* Satin texture overlay for inner lining */}
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay opacity-30" />
                </div>
              </div>
            </motion.div>

            {/* Envelope Front Folds */}
            <div className="absolute inset-0 z-20 pointer-events-none rounded-b-xl overflow-hidden">
               {/* Underneath drop shadow across the folds */}
               <div className="absolute inset-0 bg-[#fff0f3]">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-overlay opacity-40" />
               </div>

               {/* Left Fold */}
               <div className="absolute inset-0 drop-shadow-[8px_0_12px_rgba(251,113,133,0.15)] pointer-events-none">
                 <div className="w-full h-full bg-gradient-to-r from-[#ffe5ec] to-[#ffc2d1]" style={{ clipPath: 'polygon(0 0, 55% 50%, 0 100%)' }} />
               </div>
               
               {/* Right Fold */}
               <div className="absolute inset-0 drop-shadow-[-8px_0_12px_rgba(251,113,133,0.15)] pointer-events-none">
                 <div className="w-full h-full bg-gradient-to-l from-[#ffe5ec] to-[#ffc2d1]" style={{ clipPath: 'polygon(100% 0, 45% 50%, 100% 100%)' }} />
               </div>

               {/* Bottom Fold */}
               <div className="absolute inset-0 drop-shadow-[0_-8px_16px_rgba(251,113,133,0.2)] pointer-events-none">
                 <div className="w-full h-full bg-gradient-to-t from-[#ffb3c6] to-[#ffe5ec]" style={{ clipPath: 'polygon(0 100%, 50% 45%, 100% 100%)' }} />
               </div>
            </div>

            {/* Frosted Cherry Blossom Vellum Wrap */}
            <motion.div 
              className="absolute top-[30%] left-[-2%] w-[104%] h-[40%] bg-[#fff0f3]/25 backdrop-blur-md z-25 pointer-events-none shadow-[0_10px_30px_rgba(251,113,133,0.2)] border-y border-[#ffb3c6]/60 flex items-center justify-center overflow-hidden"
              initial={{ opacity: 1 }}
              animate={isOpened ? { opacity: 0, scale: 1.05 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="absolute top-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-brand-sakura to-transparent" />
              <div className="absolute bottom-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-brand-sakura to-transparent" />
              {/* Fine sakura thread wrapped around vellum */}
              <div className="w-full h-[1.5px] bg-brand-sakura-deep/50 shadow-[0_0_4px_#fb7185]" />
            </motion.div>

            {/* 3D Cinematic Wax Seal */}
            <AnimatePresence>
              {!isOpened && (
                <motion.button
                  onClick={handleOpen}
                  className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center cursor-pointer group pointer-events-auto shadow-[0_20px_40px_rgba(251,113,133,0.5)]"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 1.5, opacity: 0, filter: 'blur(10px)' }}
                  transition={{ 
                    scale: { type: 'spring', stiffness: 150, damping: 15, delay: 1.5 },
                    rotate: { type: 'spring', stiffness: 150, damping: 15, delay: 1.5 },
                    exit: { duration: 0.5, ease: "easeIn" } 
                  }}
                >
                  {/* Cherry Blossom Wax base with deeply realistic gradients */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ffb3c6] via-[#fb7185] to-[#be123c] border border-[#ffe5ec] shadow-[inset_0_4px_10px_rgba(255,255,255,0.6),inset_0_-4px_15px_rgba(159,18,57,0.7)]" />
                  
                  {/* Wax ridge ring */}
                  <div className="absolute inset-2 sm:inset-3 rounded-full border-[3px] border-[#e11d48]/60 shadow-[inset_0_2px_5px_rgba(159,18,57,0.6),0_2px_4px_rgba(255,255,255,0.5)] mix-blend-multiply" />
                  
                  <div className="relative flex items-center justify-center translate-y-[-2px]">
                    <span className="text-white font-serif text-5xl sm:text-6xl italic tracking-tighter drop-shadow-[0_2px_5px_rgba(159,18,57,0.8)]">
                      D
                    </span>
                    <span className="text-white/90 font-serif text-2xl sm:text-3xl mx-0.5 font-light drop-shadow-[0_2px_4px_rgba(159,18,57,0.8)] translate-y-2">
                      &
                    </span>
                    <span className="text-white font-serif text-5xl sm:text-6xl italic tracking-tighter drop-shadow-[0_2px_5px_rgba(159,18,57,0.8)]">
                      D
                    </span>
                  </div>
                  
                  {/* Realistic Specular Highlight reflecting light */}
                  <div className="absolute top-1 left-2 w-12 h-6 bg-white/40 rounded-full blur-[4px] -rotate-45 pointer-events-none" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
          
          <AnimatePresence>
            {!isOpened && (
              <motion.div
                className="absolute bottom-12 sm:bottom-20 flex flex-col items-center gap-6 z-50 pointer-events-none"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: 2, duration: 1, ease: 'easeOut' }}
              >
                <div className="flex flex-col items-center gap-3">
                  <p className="text-white font-serif italic text-xl sm:text-3xl font-light tracking-wide drop-shadow-[0_4px_10px_rgba(251,113,133,0.5)]">
                    You're cordially invited
                  </p>
                  <p className="text-brand-sakura font-sans text-[9px] sm:text-xs tracking-[0.4em] uppercase font-bold drop-shadow-md">
                    Break the seal to begin
                  </p>
                </div>
                <div className="w-[1.5px] h-20 sm:h-24 bg-gradient-to-b from-brand-sakura/80 to-transparent animate-[bounce_2s_infinite] shadow-[0_0_10px_rgba(251,113,133,0.5)]" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
