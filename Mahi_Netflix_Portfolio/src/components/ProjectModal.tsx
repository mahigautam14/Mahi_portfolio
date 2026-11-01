import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, profile } from '../data/portfolio';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-3xl w-full bg-zinc-950 border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className={`p-6 sm:p-8 bg-gradient-to-br ${project.gradient} relative`}>
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/20 cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center gap-2 text-xs text-[#e50914] font-bold tracking-widest uppercase mb-2">
                <span>{profile.originalLabel}</span>
                <span>•</span>
                <span>{project.rating}</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wider">
                {project.title}
              </h2>
              <p className="text-sm text-zinc-300 mt-1">{project.subtitle}</p>

              <div className="flex flex-wrap items-center gap-3 mt-4 text-xs">
                <span className="text-emerald-400 font-bold">{project.match}</span>
                <span className="text-zinc-300">{project.year}</span>
                <span className="border border-white/20 px-2 py-0.5 rounded text-zinc-200">
                  {project.seasons}
                </span>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-zinc-200 text-black font-semibold px-5 py-2.5 rounded-lg text-xs transition"
                  >
                    ▶ Launch Live Demo ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-white border border-white/20 font-semibold px-5 py-2.5 rounded-lg text-xs transition"
                  >
                    View Repository on GitHub ↗
                  </a>
                )}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-3">
                  Episode Synopsis &amp; Engineering Breakdown
                </h3>
                <ul className="space-y-3 text-sm text-zinc-200">
                  {project.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#e50914] font-bold">0{i + 1}</span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-3">
                  Technical Stack Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-zinc-900 border border-white/15 text-zinc-200 px-3 py-1.5 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
