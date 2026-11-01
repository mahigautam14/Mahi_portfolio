import React, { useState } from 'react';
import {
  viewerProfiles,
  ViewerProfile,
  Project
} from './data/portfolio';
import { useWatchProgress } from './hooks/useWatchProgress';
import { OpeningSequence } from './components/OpeningSequence';
import { ProfileSelector } from './components/ProfileSelector';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlayIntro } from './components/PlayIntro';
import { ContinueWatching } from './components/ContinueWatching';
import { Originals } from './components/Originals';
import { ProjectModal } from './components/ProjectModal';
import { Skills } from './components/Skills';
import { Seasons } from './components/Seasons';
import { Achievements } from './components/Achievements';
import { TopPicks } from './components/TopPicks';
import { About } from './components/About';
import { ResumeModal } from './components/ResumeModal';
import { FinalCTA } from './components/FinalCTA';

type Stage = 'opening' | 'profiles' | 'home';

export default function App() {
  const [stage, setStage] = useState<Stage>('opening');
  const [viewer, setViewer] = useState<ViewerProfile>(viewerProfiles[0]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [playIntroOpen, setPlayIntroOpen] = useState(false);
  const { progress, markWatched } = useWatchProgress();

  const handleNavigate = (sectionId: string) => {
    markWatched(sectionId, 100);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (stage === 'opening') {
    return <OpeningSequence onComplete={() => setStage('profiles')} />;
  }

  if (stage === 'profiles') {
    return (
      <ProfileSelector
        onSelect={(vp) => {
          setViewer(vp);
          setStage('home');
        }}
      />
    );
  }

  const sectionComponents: Record<string, React.ReactNode> = {
    continue: (
      <ContinueWatching
        key="continue"
        progress={progress}
        onNavigate={handleNavigate}
      />
    ),
    originals: (
      <Originals
        key="originals"
        onSelectProject={(proj) => {
          markWatched('originals', 100);
          setSelectedProject(proj);
        }}
      />
    ),
    skills: <Skills key="skills" />,
    journey: <Seasons key="journey" />,
    achievements: <Achievements key="achievements" />,
    top10: <TopPicks key="top10" onNavigate={handleNavigate} />,
    about: <About key="about" />
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-zinc-100 selection:bg-[#e50914] selection:text-white">
      <Navbar
        activeViewer={viewer}
        onChangeViewer={setViewer}
        onOpenResume={() => setResumeOpen(true)}
        onOpenPlayIntro={() => setPlayIntroOpen(true)}
      />

      <main>
        <Hero
          onPlayIntro={() => setPlayIntroOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />

        {viewer.sectionOrder.map((secId) => sectionComponents[secId])}
      </main>

      <FinalCTA onOpenResume={() => setResumeOpen(true)} />

      <PlayIntro open={playIntroOpen} onClose={() => setPlayIntroOpen(false)} />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
