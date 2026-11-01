import React from 'react';
import { achievements, certifications } from '../data/portfolio';

export const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
      className="max-w-7xl mx-auto px-4 sm:px-8 py-14 border-t border-white/10"
    >
      <div className="mb-8">
        <span className="text-xs uppercase tracking-[0.3em] text-[#e50914] font-semibold">
          ACCOLADES &amp; VERIFIED MILESTONES
        </span>
        <h2 className="font-display text-4xl sm:text-5xl tracking-wider text-white mt-1">
          Awards, Achievements &amp; Certifications
        </h2>
      </div>

      {/* Award poster cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {achievements.map((ach) => (
          <div
            key={ach.id}
            className="bg-gradient-to-b from-zinc-900 to-black border border-white/15 hover:border-[#e50914]/60 rounded-2xl p-6 flex flex-col justify-between transition"
          >
            <div>
              <div className="flex items-center justify-between text-[10px] uppercase tracking-widest mb-3">
                <span className="text-[#e50914] font-bold">{ach.badge}</span>
                <span className="bg-white/10 text-zinc-200 px-2 py-0.5 rounded">
                  {ach.metric}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">{ach.title}</h3>
              <p className="text-xs text-zinc-400 mt-0.5">{ach.issuer}</p>
              <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
                {ach.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications & Training Rail */}
      <div className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6">
        <h3 className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-4">
          Certifications &amp; Intensive Training Programs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-black/50 border border-white/10 rounded-xl p-4 space-y-1.5"
            >
              <div className="text-[11px] font-semibold text-[#e50914] uppercase tracking-wider">
                {cert.issuer} • {cert.category}
              </div>
              <div className="text-sm font-bold text-white">{cert.title}</div>
              <p className="text-xs text-zinc-400 leading-relaxed">{cert.highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
