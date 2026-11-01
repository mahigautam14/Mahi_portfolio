import React from 'react';
import { motion } from 'framer-motion';
import { projects, Project, profile } from '../data/portfolio';

interface Props {
  onSelectProject: (p: Project) => void;
}

export const Originals: React.FC<Props> = ({ onSelectProject }) => {
  return (
    <section id="originals" className="max-w-7xl mx-auto px-4 sm:px-8 py-14 border-t border-white/10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#e50914] font-semibold">
            {profile.originalLabel}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl tracking-wider text-white mt-1">
            Featured Originals (Projects)
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
          Click any Original poster to open full architecture notes, bullet highlights, live demo, and GitHub source.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => onSelectProject(proj)}
            className={`group relative rounded-2xl overflow-hidden border border-white/15 hover:border-[#e50914] bg-gradient-to-br ${proj.gradient} p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-2xl cursor-pointer`}
          >
            <div>
              {/* Top poster header */}
              <div className="flex items-center justify-between text-xs mb-4">
                <span className="inline-flex items-center gap-1.5 font-bold tracking-widest uppercase text-[#e50914]">
                  <span className="px-1.5 py-0.5 bg-[#e50914] text-white rounded text-[10px]">
                    M
                  </span>
                  {proj.rating}
                </span>
                <span className="text-emerald-400 font-semibold">{proj.match}</span>
              </div>

              <div className="font-display text-5xl text-white/15 leading-none mb-1">
                EPISODE {proj.number}
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-[#e50914] transition">
                {proj.title}
              </h3>
              <p className="text-xs font-medium text-zinc-300 mt-1">{proj.subtitle}</p>

              <p className="text-xs sm:text-sm text-zinc-300/90 mt-4 leading-relaxed">
                {proj.tagline}
              </p>

              <ul className="mt-4 space-y-2 text-xs text-zinc-300">
                {proj.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#e50914] mt-0.5">▸</span>
                    <span className="line-clamp-2">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] bg-black/50 border border-white/15 text-zinc-200 px-2.5 py-0.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-white group-hover:text-[#e50914] transition">
                  ▶ More Info &amp; Episode Details
                </span>
                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] font-semibold bg-[#e50914] hover:bg-red-700 text-white px-2.5 py-1 rounded transition"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] font-medium bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 rounded transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
