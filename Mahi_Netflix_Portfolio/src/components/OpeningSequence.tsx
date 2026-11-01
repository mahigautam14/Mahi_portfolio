import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/portfolio';

interface Props {
  onComplete: () => void;
}

export const OpeningSequence: React.FC<Props> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 700);
    const t2 = setTimeout(() => setStep(2), 2100);
    const t3 = setTimeout(() => onComplete(), 3800);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Escape' || e.key === ' ') {
        onComplete();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('keydown', onKey);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07070a] text-white overflow-hidden select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.22)_0%,transparent_65%)] pointer-events-none" />

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="studio"
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            animate={{ opacity: 1, letterSpacing: '0.45em' }}
            exit={{ opacity: 0, scale: 1.08 }}
            transition={{ duration: 0.55 }}
            className="text-xs sm:text-sm uppercase text-red-500 font-semibold tracking-[0.45em]"
          >
            {profile.originalLabel}
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="title"
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.35, filter: 'blur(10px)' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center px-6"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-zinc-400 mb-3">
              {profile.originalLabel}
            </span>
            <h1 className="font-display text-7xl sm:text-9xl font-bold tracking-wider text-[#e50914] drop-shadow-[0_0_45px_rgba(229,9,20,0.65)]">
              {profile.name}
            </h1>
            <p className="mt-2 font-display text-2xl sm:text-3xl tracking-[0.35em] text-zinc-200">
              THE SERIES
            </p>
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div
            key="ready"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center px-6"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#e50914] shadow-[0_0_40px_rgba(229,9,20,0.5)] mb-5">
              <img
                src={profile.portraitWebp480}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl tracking-widest text-white">
              {profile.seriesTitle}
            </h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-md">
              {profile.headline}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={onComplete}
        className="absolute bottom-8 right-8 text-xs uppercase tracking-[0.25em] text-zinc-400 hover:text-white border border-white/15 hover:border-white/40 px-4 py-2 rounded-full transition cursor-pointer"
      >
        Skip Intro ↵
      </button>
    </div>
  );
};
