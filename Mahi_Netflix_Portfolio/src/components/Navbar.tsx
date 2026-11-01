import React, { useState, useEffect } from 'react';
import { profile, ViewerProfile, viewerProfiles } from '../data/portfolio';

interface Props {
  activeViewer: ViewerProfile;
  onChangeViewer: (v: ViewerProfile) => void;
  onOpenResume: () => void;
  onOpenPlayIntro: () => void;
}

export const Navbar: React.FC<Props> = ({
  activeViewer,
  onChangeViewer,
  onOpenResume,
  onOpenPlayIntro,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Originals', href: '#originals' },
    { label: 'Skills', href: '#skills' },
    { label: 'My Journey', href: '#journey' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Top 10', href: '#top10' },
    { label: 'The Pilot', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07070a]/90 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="font-display text-3xl sm:text-4xl tracking-wider text-[#e50914] font-bold">
              {profile.name}
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.3em] text-zinc-400 border border-white/15 px-2 py-0.5 rounded">
              SERIES
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-300 hover:text-white transition font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenPlayIntro}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium bg-white/10 hover:bg-white/20 text-white px-3.5 py-2 rounded-lg border border-white/15 transition cursor-pointer"
          >
            <span>▶</span> Highlight Reel
          </button>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#e50914] hover:bg-red-700 text-white px-3.5 py-2 rounded-lg shadow-[0_0_20px_rgba(229,9,20,0.4)] transition cursor-pointer"
          >
            Resume
          </button>

          <div className="relative">
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="flex items-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 border border-white/15 rounded-lg px-2.5 py-1.5 text-xs text-zinc-200 cursor-pointer"
              title="Switch Viewer Profile"
            >
              <img
                src={profile.portraitWebp480}
                alt={profile.name}
                className="w-6 h-6 rounded object-cover"
              />
              <span className="hidden md:inline">{activeViewer.name}</span>
              <span className="text-[10px] text-zinc-400">▾</span>
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-zinc-950 border border-white/15 rounded-xl shadow-2xl p-2 z-50">
                <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-zinc-500">
                  Switch Viewer Lens
                </div>
                {viewerProfiles.map((vp) => (
                  <button
                    key={vp.id}
                    onClick={() => {
                      onChangeViewer(vp);
                      setMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition cursor-pointer ${
                      vp.id === activeViewer.id
                        ? 'bg-[#e50914]/20 text-white font-semibold'
                        : 'text-zinc-300 hover:bg-white/5'
                    }`}
                  >
                    <span>{vp.name}</span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: vp.color }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
