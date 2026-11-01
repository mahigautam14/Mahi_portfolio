import React from 'react';
import { topPicks } from '../data/portfolio';

interface Props {
  onNavigate: (sectionId: string) => void;
}

export const TopPicks: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section id="top10" className="max-w-7xl mx-auto px-4 sm:px-8 py-14 border-t border-white/10">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-[0.3em] text-[#e50914] font-semibold">
          TRENDING IN INDIA TODAY
        </span>
        <h2 className="font-display text-4xl sm:text-5xl tracking-wider text-white mt-1">
          Top 10 Highlights in Mahi&apos;s Portfolio
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {topPicks.map((item) => (
          <button
            key={item.rank}
            onClick={() => onNavigate(item.targetSection)}
            className="group relative bg-zinc-900/60 hover:bg-zinc-900 border border-white/10 hover:border-[#e50914]/60 rounded-2xl p-5 text-left transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden cursor-pointer"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="font-display text-6xl leading-none text-white/15 group-hover:text-[#e50914]/40 transition select-none">
                #{item.rank}
              </span>
              <span className="text-[10px] uppercase tracking-wider bg-[#e50914]/20 text-red-300 border border-[#e50914]/30 px-2 py-0.5 rounded">
                {item.tag}
              </span>
            </div>

            <div className="mt-4">
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider">
                {item.category}
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-[#e50914] transition mt-0.5">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                {item.caption}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};
