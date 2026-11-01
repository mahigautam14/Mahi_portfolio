import React from 'react';
import { motion } from 'framer-motion';
import { viewerProfiles, ViewerProfile, profile } from '../data/portfolio';

interface Props {
  onSelect: (viewer: ViewerProfile) => void;
}

export const ProfileSelector: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="min-h-screen bg-[#07070a] text-white flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(229,9,20,0.14),transparent_60%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 relative z-10"
      >
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[#e50914] font-semibold mb-3">
          <span className="w-2 h-2 rounded-full bg-[#e50914] animate-ping" />
          {profile.seriesTitle}
        </div>
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
          Who&apos;s watching?
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 mt-2">
          Choose a viewer lens to customize section priority for {profile.name}&apos;s portfolio
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl w-full relative z-10">
        {viewerProfiles.map((vp, idx) => (
          <motion.button
            key={vp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => onSelect(vp)}
            className="group flex flex-col items-center text-center bg-zinc-900/60 hover:bg-zinc-900 border border-white/10 hover:border-white/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
          >
            <div
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden mb-4 border-2 transition-all duration-300 group-hover:scale-105 relative"
              style={{ borderColor: vp.color }}
            >
              <img
                src={profile.portraitWebp480}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 opacity-25 group-hover:opacity-10 transition"
                style={{ backgroundColor: vp.color }}
              />
            </div>
            <h2 className="text-lg font-semibold text-white group-hover:text-[#e50914] transition">
              {vp.name}
            </h2>
            <p className="text-xs font-medium text-zinc-400 mt-0.5">{vp.role}</p>
            <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{vp.tagline}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
