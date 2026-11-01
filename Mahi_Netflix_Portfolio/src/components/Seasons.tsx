import React, { useState } from 'react';
import { seasons } from '../data/portfolio';

export const Seasons: React.FC = () => {
  const [selectedSeasonId, setSelectedSeasonId] = useState(seasons[0].id);
  const currentSeason = seasons.find((s) => s.id === selectedSeasonId) || seasons[0];

  return (
    <section id="journey" className="max-w-7xl mx-auto px-4 sm:px-8 py-14 border-t border-white/10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#e50914] font-semibold">
            EDUCATION &amp; ACADEMIC TIMELINE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl tracking-wider text-white mt-1">
            Seasons &amp; Episodes (My Journey)
          </h2>
        </div>

        <div className="flex items-center gap-2">
          {seasons.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedSeasonId(s.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition cursor-pointer ${
                s.id === selectedSeasonId
                  ? 'bg-[#e50914] text-white shadow-[0_0_20px_rgba(229,9,20,0.4)]'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              Season {s.seasonNumber} ({s.year})
            </button>
          ))}
        </div>
      </div>

      <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-6 border-b border-white/10">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              {currentSeason.title}
            </h3>
            <p className="text-sm text-zinc-400 mt-0.5">{currentSeason.subtitle}</p>
          </div>
          <span className="text-xs font-semibold bg-white/10 text-zinc-200 px-3 py-1 rounded-full">
            {currentSeason.year}
          </span>
        </div>

        <div className="mt-6 space-y-6">
          {currentSeason.episodes.map((ep) => (
            <div
              key={ep.ep}
              className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold bg-[#e50914] text-white px-2.5 py-1 rounded">
                    {ep.ep}
                  </span>
                  <h4 className="text-lg font-semibold text-white">{ep.title}</h4>
                </div>
                <div className="text-xs text-zinc-400">
                  {ep.period} • {ep.location}
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">{ep.summary}</p>

              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                {ep.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <span className="text-[#e50914] mt-1">●</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {ep.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] bg-white/5 border border-white/10 text-zinc-300 px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
