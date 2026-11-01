import React, { useState } from 'react';
import { skillCategories, skillEvidence } from '../data/portfolio';

export const Skills: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>('all');

  const filteredCategories =
    selectedGenre === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedGenre);

  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-8 py-14 border-t border-white/10">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#e50914] font-semibold">
            BROWSE BY GENRE • STRICTLY FROM RESUME
          </span>
          <h2 className="font-display text-4xl sm:text-5xl tracking-wider text-white mt-1">
            Technical Skills &amp; Evidence
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedGenre('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
              selectedGenre === 'all'
                ? 'bg-[#e50914] text-white'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/10'
            }`}
          >
            All Genres (7)
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedGenre(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                selectedGenre === cat.id
                  ? 'bg-[#e50914] text-white'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              {cat.genre}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCategories.map((cat) => (
          <div
            key={cat.id}
            className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <h3 className="text-lg font-bold text-white">{cat.genre}</h3>
                <p className="text-xs text-zinc-400">{cat.tagline}</p>
              </div>
              <span className="text-xs font-semibold bg-[#e50914]/20 text-red-300 px-2.5 py-1 rounded-full">
                {cat.skills.length} Skills
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {cat.skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-black/40 border border-white/10 hover:border-[#e50914]/50 rounded-xl p-3 transition"
                >
                  <div className="text-xs font-semibold text-white">{skill}</div>
                  {skillEvidence[skill] && (
                    <div className="text-[11px] text-zinc-400 mt-1 leading-snug">
                      {skillEvidence[skill]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
