import React from 'react';
import { profile } from '../data/portfolio';

export const About: React.FC = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-8 py-14 border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#e50914] font-semibold">
            EPISODE 00 • THE PILOT
          </span>
          <h2 className="font-display text-4xl sm:text-5xl tracking-wider text-white">
            Professional Summary
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            {profile.summary}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {profile.stats.map((st) => (
              <div
                key={st.label}
                className="bg-zinc-900/70 border border-white/10 rounded-xl p-4"
              >
                <div className="font-display text-2xl sm:text-3xl text-[#e50914]">
                  {st.value}
                </div>
                <div className="text-xs text-zinc-400 mt-1">{st.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-zinc-900/60 border border-white/10 rounded-2xl p-6 space-y-4">
          <div className="text-xs uppercase tracking-[0.25em] text-zinc-400">
            Series Metadata • Cast &amp; Direct Links
          </div>
          <div className="space-y-2.5 text-sm">
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-zinc-400">Name</span>
              <span className="text-white font-medium">{profile.name}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-zinc-400">Education</span>
              <span className="text-white font-medium">MCA @ NIT Raipur</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-zinc-400">Location</span>
              <span className="text-white font-medium">{profile.location}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-zinc-400">Email</span>
              <a
                href={`mailto:${profile.email}`}
                className="text-[#e50914] hover:underline font-medium"
              >
                {profile.email}
              </a>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-zinc-400">Phone</span>
              <span className="text-white font-medium">{profile.phone}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-zinc-400">GitHub</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-[#e50914] underline"
              >
                github.com/{profile.githubHandle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
