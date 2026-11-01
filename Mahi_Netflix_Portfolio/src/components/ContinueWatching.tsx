import React from 'react';
import { WatchProgressMap } from '../hooks/useWatchProgress';

interface Props {
  progress: WatchProgressMap;
  onNavigate: (sectionId: string) => void;
}

const cards = [
  {
    id: 'originals',
    ep: 'S02 • ORIGINALS',
    title: 'Featured Originals (3 Projects)',
    subtitle: 'AskLio AI Chatbot • GitOrbit Tracker • Wi-Fi CSI HAR',
    duration: '3 Episodes'
  },
  {
    id: 'skills',
    ep: 'S02 • TOOLKIT',
    title: 'Technical Skills & Genres',
    subtitle: 'C/C++, Python, FastAPI, React, Next.js, Docker, Linux, SQL',
    duration: '7 Genres'
  },
  {
    id: 'journey',
    ep: 'S01–S02 • SEASONS',
    title: 'Education & Academic Journey',
    subtitle: 'MCA @ NIT Raipur • B.Sc. @ Bundelkhand University',
    duration: '2 Seasons'
  },
  {
    id: 'achievements',
    ep: 'S02 • AWARDS',
    title: 'Awards & Certifications',
    subtitle: '150+ DSA • MySirG C++ • HackerRank • iNeuron FSD',
    duration: '4 Milestones'
  }
];

export const ContinueWatching: React.FC<Props> = ({ progress, onNavigate }) => {
  return (
    <section id="continue" className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      <div className="flex items-end justify-between mb-6">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#e50914] font-semibold">
            RESUME STREAMING
          </span>
          <h2 className="font-display text-3xl sm:text-4xl tracking-wider text-white mt-1">
            Continue Watching for Mahi
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card) => {
          const pct = progress[card.id] ?? 75;
          return (
            <button
              key={card.id}
              onClick={() => onNavigate(card.id)}
              className="group text-left bg-zinc-900/70 hover:bg-zinc-900 border border-white/10 hover:border-[#e50914]/60 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2">
                  <span className="font-semibold text-[#e50914]">{card.ep}</span>
                  <span>{card.duration}</span>
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-[#e50914] transition">
                  {card.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1.5 line-clamp-2">
                  {card.subtitle}
                </p>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-1.5">
                  <span>Watched {pct}%</span>
                  <span className="text-white group-hover:translate-x-1 transition">
                    ▶ Jump In
                  </span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#e50914] transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
