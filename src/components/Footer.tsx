import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-maroon-light border-t border-brand-sakura/20 pt-24 pb-12 text-center relative overflow-hidden">

      {/* Soft gradient bottom edge glow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-sakura/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Decorative Line instead of Circle */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <div className="h-[1px] w-24 sm:w-32 bg-gradient-to-l from-brand-sakura/60 to-transparent" />
          <Heart className="w-6 h-6 text-brand-sakura-deep fill-brand-sakura/20 animate-pulse" />
          <div className="h-[1px] w-24 sm:w-32 bg-gradient-to-r from-brand-sakura/60 to-transparent" />
        </div>

        <h2 className="text-4xl sm:text-5xl font-display text-stone-800 mb-6 tracking-tight drop-shadow-sm">Pasindu & Tharuka</h2>
        <p className="text-stone-500 font-serif italic text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-16">
          "A hundred hearts would be too few to carry all the love we share."
        </p>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-sakura/50 to-transparent mb-12" />

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-[10px] sm:text-xs text-stone-400 font-bold uppercase tracking-[0.3em]">
            With all our love 💕
          </div>
          <div className="text-[9px] text-stone-500 tracking-widest uppercase font-medium">
            © 2026 Pasindu & Tharuka Wedding
          </div>
        </div>
      </div>
    </footer>
  );
};
