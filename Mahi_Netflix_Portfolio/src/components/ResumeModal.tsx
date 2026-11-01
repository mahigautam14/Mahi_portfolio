import React, { useEffect } from 'react';
import {
  profile,
  projects,
  seasons,
  skillCategories,
  achievements
} from '../data/portfolio';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<Props> = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-4xl w-full bg-zinc-950 border border-white/15 rounded-2xl overflow-hidden shadow-2xl my-auto max-h-[90vh] flex flex-col"
      >
        {/* Top bar */}
        <div className="p-4 sm:px-6 bg-zinc-900 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="font-display text-2xl text-[#e50914]">{profile.name}</span>
            <span className="text-xs text-zinc-400">Official Resume Sheet &amp; PDF</span>
          </div>
          <div className="flex items-center gap-2.5">
            <a
              href={profile.resumeUrl}
              download="Mahi_Resume.pdf"
              className="text-xs font-semibold bg-[#e50914] hover:bg-red-700 text-white px-3.5 py-1.5 rounded-lg transition"
            >
              ⬇ Download PDF
            </a>
            <button
              onClick={onClose}
              className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg cursor-pointer"
            >
              ✕ Close
            </button>
          </div>
        </div>

        {/* Formatted Interactive Resume Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm">
          <div className="border-b border-white/10 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
              <p className="text-xs text-zinc-400 mt-1">
                {profile.location} • {profile.phone} • {profile.email}
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#e50914] hover:underline"
              >
                GitHub
              </a>
              <span>•</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-[#e50914] hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#e50914] font-bold mb-2">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {profile.summary}
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#e50914] font-bold mb-3">
              Education
            </h3>
            <div className="space-y-3">
              {seasons.map((s) =>
                s.episodes.map((ep) => (
                  <div
                    key={ep.ep}
                    className="flex flex-col sm:flex-row sm:items-center justify-between bg-zinc-900/60 border border-white/10 rounded-xl p-3.5"
                  >
                    <div>
                      <div className="font-semibold text-white">{ep.subtitle}</div>
                      <div className="text-xs text-zinc-300">{ep.title}</div>
                    </div>
                    <div className="text-xs text-zinc-400 mt-1 sm:mt-0 sm:text-right">
                      <div>{ep.period}</div>
                      <div>{ep.location}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#e50914] font-bold mb-3">
              Projects
            </h3>
            <div className="space-y-4">
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="bg-zinc-900/60 border border-white/10 rounded-xl p-4 space-y-2"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="font-bold text-white">{p.title}</div>
                    <div className="text-xs text-zinc-400">{p.tech.join(', ')}</div>
                  </div>
                  <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1">
                    {p.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#e50914] font-bold mb-3">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {skillCategories.map((c) => (
                <div
                  key={c.id}
                  className="bg-zinc-900/60 border border-white/10 rounded-lg p-3"
                >
                  <span className="font-semibold text-white">{c.genre}: </span>
                  <span className="text-zinc-300">{c.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#e50914] font-bold mb-3">
              Awards &amp; Achievements
            </h3>
            <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1.5">
              {achievements.map((a) => (
                <li key={a.id}>{a.description}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
