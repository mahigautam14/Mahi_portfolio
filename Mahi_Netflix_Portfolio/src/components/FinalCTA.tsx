import React from 'react';
import { profile } from '../data/portfolio';

interface Props {
  onOpenResume: () => void;
}

export const FinalCTA: React.FC<Props> = ({ onOpenResume }) => {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-[#07070a] to-black py-16 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.4em] text-[#e50914] font-semibold">
          TO BE CONTINUED…
        </span>
        <h2 className="font-display text-5xl sm:text-7xl tracking-wider text-white">
          Ready for the Next Season with {profile.name}?
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
          Open to Software Engineering, Full-Stack, Backend (Python/FastAPI), and C/C++ Systems roles and internships.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={`mailto:${profile.email}`}
            className="bg-[#e50914] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg text-sm shadow-[0_0_25px_rgba(229,9,20,0.45)] transition"
          >
            ✉ Email {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="bg-zinc-900 hover:bg-zinc-800 text-white border border-white/15 font-semibold px-6 py-3 rounded-lg text-sm transition"
          >
            GitHub (@{profile.githubHandle}) ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="bg-zinc-900 hover:bg-zinc-800 text-white border border-white/15 font-semibold px-6 py-3 rounded-lg text-sm transition"
          >
            LinkedIn ↗
          </a>
          <button
            onClick={onOpenResume}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/15 font-semibold px-6 py-3 rounded-lg text-sm transition cursor-pointer"
          >
            View / Download Resume
          </button>
        </div>

        <div className="pt-8 text-xs text-zinc-500">
          {profile.seriesTitle} • {profile.location} • {profile.phone}
        </div>
      </div>
    </footer>
  );
};
