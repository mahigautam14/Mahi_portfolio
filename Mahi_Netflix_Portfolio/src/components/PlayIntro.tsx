import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { introSlides, profile } from '../data/portfolio';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const PlayIntro: React.FC<Props> = ({ open, onClose }) => {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!open) {
      setIdx(0);
      setPaused(false);
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        setPaused((p) => !p);
      }
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % introSlides.length);
      if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + introSlides.length) % introSlides.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open || paused) return;
    const timer = setTimeout(() => {
      setIdx((i) => (i + 1) % introSlides.length);
    }, 3800);
    return () => clearTimeout(timer);
  }, [open, paused, idx]);

  if (!open) return null;

  const slide = introSlides[idx];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 select-none">
      {/* Progress bars */}
      <div className="max-w-4xl w-full mx-auto space-y-4">
        <div className="grid grid-cols-5 gap-2">
          {introSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="h-1.5 rounded-full bg-white/15 overflow-hidden cursor-pointer"
            >
              <div
                className={`h-full bg-[#e50914] transition-all duration-300 ${
                  i <= idx ? 'w-full' : 'w-0'
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl text-[#e50914]">{profile.name}</span>
            <span>• HIGHLIGHT REEL ({idx + 1}/{introSlides.length})</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPaused((p) => !p)}
              className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white cursor-pointer"
            >
              {paused ? '▶ Resume' : '⏸ Pause'}
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1 rounded bg-red-600/20 hover:bg-red-600/40 text-red-200 border border-red-500/30 cursor-pointer"
            >
              ✕ Close (Esc)
            </button>
          </div>
        </div>
      </div>

      {/* Main Slide */}
      <div className="max-w-4xl w-full mx-auto my-auto py-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5 flex justify-center">
          <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-[#e50914]/60 shadow-[0_0_50px_rgba(229,9,20,0.35)]">
            <img
              src={profile.portraitWebp720}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              <span className="text-xs uppercase tracking-[0.35em] text-[#e50914] font-bold">
                {slide.kicker}
              </span>
              <h2 className="font-display text-5xl sm:text-7xl text-white tracking-wider">
                {slide.title}
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="text-xs font-semibold bg-[#e50914] text-white px-3 py-1.5 rounded-full">
                  {slide.stat}
                </span>
                <span className="text-xs bg-white/10 text-zinc-200 px-3 py-1.5 rounded-full border border-white/15">
                  {slide.pill}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls footer */}
      <div className="max-w-4xl w-full mx-auto flex items-center justify-between text-xs text-zinc-400">
        <button
          onClick={() => setIdx((i) => (i - 1 + introSlides.length) % introSlides.length)}
          className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/15 text-white cursor-pointer"
        >
          ← Previous
        </button>
        <span className="hidden sm:inline">Use ← → keys or Space to pause</span>
        <button
          onClick={() => setIdx((i) => (i + 1) % introSlides.length)}
          className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/15 text-white cursor-pointer"
        >
          Next →
        </button>
      </div>
    </div>
  );
};
