import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';

interface Props {
  onPlayIntro: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<Props> = ({ onPlayIntro, onOpenResume }) => {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center overflow-hidden border-b border-white/10"
    >
      {/* Background atmospheric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(229,9,20,0.22),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-black/60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Left column: Billboard details */}
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.35em] text-[#e50914] font-semibold">
            <span className="px-2 py-0.5 bg-[#e50914] text-white font-bold rounded text-[10px] tracking-widest">
              M
            </span>
            <span>{profile.originalLabel}</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-6xl sm:text-8xl lg:text-9xl tracking-wider text-white leading-none"
          >
            {profile.name}{' '}
            <span className="text-[#e50914] font-serif-italic font-normal text-4xl sm:text-6xl align-middle">
              — The Series
            </span>
          </motion.h1>

          {/* Meta badges */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            <span className="text-emerald-400 font-bold">{profile.metaBadges[0]}</span>
            <span className="text-zinc-300">{profile.metaBadges[1]}</span>
            <span className="border border-white/25 px-1.5 py-0.5 rounded text-[11px] text-zinc-200">
              {profile.metaBadges[2]}
            </span>
            <span className="text-zinc-300 font-medium">{profile.metaBadges[3]}</span>
            <span className="border border-white/20 px-1.5 py-0.5 rounded text-[10px] text-zinc-400">
              {profile.metaBadges[4]}
            </span>
            <span className="text-zinc-400">• {profile.location}</span>
          </div>

          <p className="text-base sm:text-lg text-zinc-200 font-medium max-w-2xl">
            {profile.headline}
          </p>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
            {profile.summary}
          </p>

          {/* Floating skill chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            {profile.floatingChips.map((chip) => (
              <span
                key={chip}
                className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-200 px-3 py-1 rounded-full transition"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-3">
            <button
              onClick={onPlayIntro}
              className="inline-flex items-center gap-2.5 bg-white hover:bg-zinc-200 text-black font-semibold px-6 py-3 rounded-lg text-sm shadow-lg transition cursor-pointer"
            >
              <span className="text-base">▶</span> Play Intro
            </button>

            <a
              href="#originals"
              className="inline-flex items-center gap-2 bg-zinc-800/90 hover:bg-zinc-700 text-white font-semibold px-6 py-3 rounded-lg text-sm border border-white/15 transition"
            >
              Explore Originals
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 bg-[#e50914]/15 hover:bg-[#e50914]/30 text-red-300 border border-[#e50914]/40 font-medium px-5 py-3 rounded-lg text-sm transition cursor-pointer"
            >
              Resume &amp; Credentials
            </button>
          </div>

          {/* Quick Contact Bar */}
          <div className="pt-4 flex flex-wrap items-center gap-5 text-xs text-zinc-400">
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-white transition underline underline-offset-4"
            >
              {profile.email}
            </a>
            <span>•</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition underline underline-offset-4"
            >
              GitHub ({profile.githubHandle})
            </a>
            <span>•</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition underline underline-offset-4"
            >
              LinkedIn
            </a>
            <span>•</span>
            <span>{profile.phone}</span>
          </div>
        </div>

        {/* Right column: Portrait Poster Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#e50914]/40 via-red-600/10 to-transparent blur-2xl pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-zinc-900 shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
              <picture>
                <source
                  srcSet={`${profile.portraitWebp480} 480w, ${profile.portraitWebp720} 720w, ${profile.portraitWebp1080} 1080w`}
                  sizes="(max-width: 768px) 90vw, 420px"
                  type="image/webp"
                />
                <img
                  src={profile.portraitFallback}
                  alt={profile.name}
                  className="w-full aspect-square object-cover object-top"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-4 inset-x-4 flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#e50914] font-bold">
                    STARRING
                  </span>
                  <h2 className="font-display text-3xl tracking-wider text-white">
                    {profile.name}
                  </h2>
                  <p className="text-xs text-zinc-300">
                    MCA @ NIT Raipur • Software Engineer
                  </p>
                </div>
                <span className="text-[11px] bg-[#e50914] text-white font-bold px-2.5 py-1 rounded">
                  TOP 10
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
