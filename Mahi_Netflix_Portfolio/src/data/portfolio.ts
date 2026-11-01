export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  year: string;
  match: string;
  rating: string;
  seasons: string;
  genres: string[];
  tech: string[];
  description: string;
  bullets: string[];
  liveUrl?: string;
  githubUrl?: string;
  accent: string;
  gradient: string;
}

export interface Episode {
  ep: string;
  title: string;
  subtitle: string;
  period: string;
  location: string;
  duration: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export interface Season {
  id: string;
  seasonNumber: number;
  title: string;
  subtitle: string;
  year: string;
  episodes: Episode[];
}

export interface SkillCategory {
  id: string;
  genre: string;
  tagline: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  badge: string;
  title: string;
  issuer: string;
  metric: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: string;
  highlight: string;
  url?: string;
}

export interface TopPick {
  rank: number;
  title: string;
  category: string;
  caption: string;
  tag: string;
  targetSection: string;
}

export interface IntroSlide {
  kicker: string;
  title: string;
  subtitle: string;
  stat: string;
  pill: string;
}

export interface ViewerProfile {
  id: 'recruiter' | 'developer' | 'creative';
  name: string;
  role: string;
  tagline: string;
  color: string;
  sectionOrder: string[];
}

export const profile = {
  name: 'MAHI',
  fullName: 'Mahi',
  seriesTitle: 'MAHI — THE SERIES',
  originalLabel: 'A MAHI ORIGINAL SERIES',
  headline: 'Software Engineer • Full-Stack & AI Systems • MCA @ NIT Raipur',
  tagline: 'Engineering real-time AI applications, full-stack analytics platforms, and multi-threaded hardware-software sensing pipelines.',
  summary:
    'Software Engineer pursuing MCA with a strong foundation in C/C++, Python, Object-Oriented Programming (OOP), Cloud Computing and REST APIs. Solid understanding of Operating Systems and multi-threading concepts, along with Agile development practices. Experienced in building full-stack applications, including AI-integrated tools (LLMs/FastAPI) and hardware-software pipelines (ESP32). Focused on problem-solving, debugging, and developing reliable software solutions.',
  location: 'Noida, India',
  collegeLocation: 'Raipur, India',
  phone: '+91-7991264930',
  email: 'mahigautam7991@gmail.com',
  github: 'https://github.com/mahigautam14',
  githubHandle: 'mahigautam14',
  linkedin: 'https://www.linkedin.com/in/mahi-gautam-7b6508252/',
  linkedinHandle: 'mahi-gautam-7b6508252',
  resumeUrl: '/assets/Mahi_Resume.pdf',
  portraitWebp480: '/assets/portrait-480.webp',
  portraitWebp720: '/assets/portrait-720.webp',
  portraitWebp1080: '/assets/portrait-1080.webp',
  portraitFallback: '/assets/portrait.png',
  metaBadges: ['99% Match', '2024–Present', 'U/A 16+', '3 Originals', '4K HDR', 'Spatial Audio'],
  floatingChips: [
    'MCA @ NIT Raipur',
    'C / C++ & Python',
    'FastAPI • React • Next.js',
    'LLMs / Groq API',
    '150+ DSA Problems',
    'ESP32 & Multi-threading'
  ],
  stats: [
    { label: 'Featured Originals', value: '3' },
    { label: 'DSA Problems Solved', value: '150+' },
    { label: 'Core Languages', value: '6' },
    { label: 'Current Degree', value: 'MCA @ NIT Raipur' }
  ]
};

export const projects: Project[] = [
  {
    id: 'asklio-ai-chatbot',
    number: '01',
    title: 'AskLio AI Chatbot',
    subtitle: 'Real-Time Streaming LLM Application',
    tagline: 'Real-time AI token streaming over Server-Sent Events with persistent PostgreSQL chat history and JWT security.',
    year: '2025',
    match: '99% Match',
    rating: 'ORIGINAL #1',
    seasons: 'Full-Stack AI',
    genres: ['AI Tools', 'FastAPI', 'Real-Time SSE', 'React'],
    tech: ['Python', 'FastAPI', 'React', 'Groq API (AI)', 'PostgreSQL', 'JWT', 'Vercel'],
    description:
      'Engineered a ChatGPT-style AI application using AI tools (Groq LLaMA) and a Python FastAPI backend with real-time token streaming and persistent session storage.',
    bullets: [
      'Engineered a ChatGPT-style AI application using AI tools (Groq LLaMA) and Python backend (FastAPI).',
      'Integrated Server-Sent Events (SSE) for real-time AI token streaming and managed persistent PostgreSQL chat history.',
      'Implemented secure JWT authentication and token-based session handling across REST API endpoints.'
    ],
    liveUrl: 'https://asklio-chat.vercel.app/',
    githubUrl: 'https://github.com/mahigautam14/AskLio-ai',
    accent: '#e50914',
    gradient: 'from-red-950/90 via-zinc-950 to-black'
  },
  {
    id: 'gitorbit-github-tracker',
    number: '02',
    title: 'GitOrbit — GitHub Tracker',
    subtitle: 'Full-Stack GitHub Analytics & Snapshot Engine',
    tagline: 'Track followers, following, repository activity, and historical audience changes with MongoDB snapshot diffs.',
    year: '2025',
    match: '98% Match',
    rating: 'ORIGINAL #2',
    seasons: 'Analytics SaaS',
    genres: ['Next.js', 'FastAPI', 'MongoDB', 'GitHub REST API'],
    tech: ['Next.js', 'FastAPI', 'MongoDB', 'GitHub REST API', 'Vercel', 'Render'],
    description:
      'Built a full-stack GitHub analytics dashboard to track followers, following, repository activity, and historical audience changes, deployed on Vercel (frontend) and Render (backend).',
    bullets: [
      'Built a full-stack GitHub analytics dashboard to track followers, following, repository activity, and historical audience changes, deployed on Vercel (frontend) and Render (backend).',
      'Integrated GitHub REST API with token authentication to sync profile/repository data into MongoDB snapshots.',
      'Implemented snapshot comparison and append-only event logs to detect follow/unfollow events over time.',
      'Designed responsive dashboard UI with search, filters, and manual sync for real-time insights.'
    ],
    liveUrl: 'https://git-orbit.vercel.app/',
    githubUrl: 'https://github.com/mahigautam14/GitOrbit',
    accent: '#dc2626',
    gradient: 'from-rose-950/90 via-neutral-950 to-black'
  },
  {
    id: 'wifi-csi-har',
    number: '03',
    title: 'Wi-Fi CSI Human Activity Recognition',
    subtitle: 'ESP32 Hardware-Software Sensing Pipeline',
    tagline: 'Concurrent multi-threaded signal capture, real-time Python GUI logging, and OOP dataset generation from Wi-Fi CSI.',
    year: '2025',
    match: '97% Match',
    rating: 'ORIGINAL #3',
    seasons: 'Systems & IoT',
    genres: ['ESP32 C++', 'Python GUI', 'Multi-threading', 'Signal Processing'],
    tech: ['C++ (ESP32)', 'Python', 'Multi-threading', 'NumPy', 'Pandas', 'Matplotlib'],
    description:
      'Designed a hardware-software sensing pipeline using ESP32 Wi-Fi Channel State Information (CSI) to recognize human activities via signal processing and concurrent Python logging.',
    bullets: [
      'Designed a hardware-software sensing pipeline using ESP32 Wi-Fi CSI to recognize human activities via signal processing.',
      'Developed a real-time Python GUI logger utilizing multi-threading to handle concurrent data capturing, labeling, and CSV storage without blocking the main process.',
      'Applied OOP principles to structure the data parsing logic for scalable and reproducible dataset generation.'
    ],
    githubUrl: 'https://github.com/mahigautam14',
    accent: '#f97316',
    gradient: 'from-orange-950/80 via-zinc-950 to-black'
  }
];

export const seasons: Season[] = [
  {
    id: 'season-2',
    seasonNumber: 2,
    title: 'Season 2: Master of Computer Applications (MCA)',
    subtitle: 'National Institute of Technology Raipur',
    year: 'Aug 2024 – Present',
    episodes: [
      {
        ep: 'S02 • E01',
        title: 'MCA at NIT Raipur',
        subtitle: 'National Institute of Technology Raipur',
        period: 'Aug 2024 – Present',
        location: 'Raipur, India',
        duration: 'Current Season',
        summary:
          'Pursuing Master of Computer Applications (MCA) at NIT Raipur with a strong focus on C/C++, Python, Object-Oriented Programming (OOP), Operating Systems, Multi-threading, Cloud Computing, and full-stack software engineering.',
        highlights: [
          'Engineered AskLio AI Chatbot with React, Python (FastAPI), PostgreSQL, and Groq/LLaMA AI streaming via SSE.',
          'Built GitOrbit GitHub Tracker using Next.js, FastAPI, MongoDB snapshots, and GitHub REST API.',
          'Designed Wi-Fi CSI Human Activity Recognition pipeline using C++ (ESP32), Python, Multi-threading, NumPy, Pandas, and Matplotlib.'
        ],
        tags: ['NIT Raipur', 'MCA', 'C/C++', 'Python', 'FastAPI', 'OOP', 'Operating Systems']
      }
    ]
  },
  {
    id: 'season-1',
    seasonNumber: 1,
    title: 'Season 1: Bachelor of Science (B.Sc.)',
    subtitle: 'Bundelkhand University',
    year: 'Jul 2021 – Jul 2024',
    episodes: [
      {
        ep: 'S01 • E01',
        title: 'Bachelor of Science (B.Sc.)',
        subtitle: 'Bundelkhand University',
        period: 'Jul 2021 – Jul 2024',
        location: 'Jhansi, India',
        duration: '3 Years',
        summary:
          'Completed Bachelor of Science (B.Sc.) at Bundelkhand University, Jhansi, building foundational analytical, mathematical, and programming problem-solving skills.',
        highlights: [
          'Built core foundation in computer science, programming logic, and analytical problem-solving.',
          'Practiced Data Structures & Algorithms in C++ and Python alongside Object-Oriented Programming principles.'
        ],
        tags: ['Bundelkhand University', 'B.Sc.', 'Jhansi, India', 'Problem Solving', 'Foundations']
      }
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    genre: 'Languages',
    tagline: 'Core programming & query languages',
    skills: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'SQL']
  },
  {
    id: 'core-concepts',
    genre: 'Core Concepts',
    tagline: 'Computer science & engineering fundamentals',
    skills: [
      'Object-Oriented Programming (OOP)',
      'Operating Systems',
      'Multi-threading',
      'DSA',
      'Agile'
    ]
  },
  {
    id: 'ai-tools-tech',
    genre: 'AI Tools & Tech',
    tagline: 'LLM integration & intelligent workflows',
    skills: [
      'Groq API (LLaMA)',
      'Spring AI',
      'AI Prompting',
      'Machine Learning Concepts'
    ]
  },
  {
    id: 'backend-db',
    genre: 'Backend & DB',
    tagline: 'APIs, validation & persistent data stores',
    skills: [
      'FastAPI',
      'Pydantic',
      'Node.js',
      'REST APIs',
      'PostgreSQL',
      'MongoDB',
      'MySQL'
    ]
  },
  {
    id: 'cloud-devops',
    genre: 'Cloud & DevOps',
    tagline: 'Containers, orchestration & CI/CD automation',
    skills: [
      'Linux',
      'Docker',
      'Kubernetes',
      'Bash Scripting',
      'Cloud Computing',
      'GitHub Actions',
      'CI/CD'
    ]
  },
  {
    id: 'ai-data-processing',
    genre: 'AI & Data Processing',
    tagline: 'Signal processing, numerical computing & ML',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn']
  },
  {
    id: 'tools-frontend',
    genre: 'Tools & Frontend',
    tagline: 'Modern web interfaces, version control & cloud hosting',
    skills: [
      'Git',
      'GitHub',
      'Vercel',
      'Render',
      'React',
      'Next.js',
      'Tailwind CSS'
    ]
  }
];

export const skillEvidence: Record<string, string> = {
  'C': 'Core systems programming language & pointer fundamentals',
  'C++': 'ESP32 firmware in Wi-Fi CSI HAR & 150+ DSA problems + MySirG C++ DSA Bootcamp',
  'Python': 'Backend in AskLio AI & GitOrbit + multi-threaded GUI logger in Wi-Fi CSI HAR',
  'Java': 'Core object-oriented programming & backend language',
  'JavaScript': 'Frontend interactivity across React and Next.js applications',
  'SQL': 'Relational queries & schema design for PostgreSQL and MySQL',
  'Object-Oriented Programming (OOP)': 'Scalable data parsing in Wi-Fi CSI HAR & MySirG C++ DSA Bootcamp',
  'Operating Systems': 'Concurrency, process scheduling & system-level resource management',
  'Multi-threading': 'Concurrent data capture, labeling & CSV storage in Wi-Fi CSI Python GUI logger',
  'DSA': '150+ problems solved on LeetCode & GeeksforGeeks + HackerRank Problem Solving Certificate',
  'Agile': 'Iterative full-stack software development & iNeuron Full Stack training',
  'Groq API (LLaMA)': 'Real-time LLaMA token streaming engine in AskLio AI Chatbot',
  'Spring AI': 'Enterprise AI integration framework in technical toolkit',
  'AI Prompting': 'Structured system prompt engineering for LLM applications',
  'Machine Learning Concepts': 'Activity recognition pipelines & feature extraction',
  'FastAPI': 'High-performance Python REST & SSE backends for AskLio AI and GitOrbit',
  'Pydantic': 'Strict request/response schema validation in FastAPI services',
  'Node.js': 'JavaScript runtime for full-stack web development',
  'REST APIs': 'Secure JWT endpoints in AskLio AI & GitHub REST API sync in GitOrbit',
  'PostgreSQL': 'Persistent relational chat history store in AskLio AI Chatbot',
  'MongoDB': 'Snapshot comparison & append-only event logs in GitOrbit',
  'MySQL': 'Relational database management in technical stack',
  'Linux': 'Development environment, server administration & CLI workflows',
  'Docker': 'Containerized application packaging and deployment',
  'Kubernetes': 'Container orchestration in Cloud & DevOps toolkit',
  'Bash Scripting': 'Shell automation & build pipeline scripting',
  'Cloud Computing': 'Cloud-native deployment architectures across Vercel & Render',
  'GitHub Actions': 'Automated CI/CD workflows & repository automation',
  'CI/CD': 'Continuous integration & automated cloud deployments',
  'NumPy': 'Signal processing & numerical array operations in Wi-Fi CSI HAR',
  'Pandas': 'Dataset structuring, labeling & CSV pipelines in Wi-Fi CSI HAR',
  'Matplotlib': 'Signal waveform & activity data visualization in Wi-Fi CSI HAR',
  'Scikit-learn': 'Machine learning classification & model evaluation toolkit',
  'Git': 'Distributed version control across all engineering projects',
  'GitHub': 'Source code hosting & GitHub REST API integration in GitOrbit',
  'Vercel': 'Production frontend & full-stack deployment for AskLio AI and GitOrbit',
  'Render': 'Production FastAPI backend hosting for GitOrbit',
  'React': 'Interactive streaming chat UI in AskLio AI Chatbot',
  'Next.js': 'Responsive analytics dashboard UI with search & filters in GitOrbit',
  'Tailwind CSS': 'Utility-first responsive styling across modern frontend interfaces'
};

export const achievements: Achievement[] = [
  {
    id: 'dsa-150',
    badge: 'ALGORITHMS',
    title: '150+ DSA Problems Solved',
    issuer: 'LeetCode & GeeksforGeeks',
    metric: '150+ Solved',
    description:
      'Solved 150+ data structures and algorithms problems utilizing C++ and Python on LeetCode and GeeksforGeeks.'
  },
  {
    id: 'cpp-dsa-bootcamp',
    badge: 'BOOTCAMP',
    title: 'Intensive C++ DSA Bootcamp',
    issuer: 'MySirG',
    metric: 'OOP & Pointers',
    description:
      'Successfully completed an intensive C++ DSA Bootcamp (MySirG), mastering Object-Oriented principles and pointers.'
  },
  {
    id: 'hackerrank-ps',
    badge: 'CERTIFIED',
    title: 'Problem Solving Certification',
    issuer: 'HackerRank',
    metric: 'Verified Credential',
    description:
      'Earned Problem Solving certification from HackerRank, demonstrating strong algorithmic thinking.'
  },
  {
    id: 'ineuron-fsd',
    badge: 'FULL STACK',
    title: 'Full Stack Web Development Training',
    issuer: 'iNeuron',
    metric: 'Agile Environment',
    description:
      'Completed Full Stack Web Development training (iNeuron) in an Agile learning environment.'
  }
];

export const certifications: Certification[] = [
  {
    id: 'cert-hackerrank',
    title: 'Problem Solving Certification',
    issuer: 'HackerRank',
    category: 'Algorithms & Data Structures',
    highlight: 'Demonstrated strong algorithmic thinking and problem-solving proficiency.'
  },
  {
    id: 'cert-mysirg',
    title: 'Intensive C++ DSA Bootcamp',
    issuer: 'MySirG',
    category: 'C++ • OOP • Pointers • DSA',
    highlight: 'Mastered Object-Oriented Programming principles, memory pointers, and data structures in C++.'
  },
  {
    id: 'cert-ineuron',
    title: 'Full Stack Web Development Training',
    issuer: 'iNeuron',
    category: 'Full-Stack • Agile Development',
    highlight: 'Completed comprehensive Full Stack Web Development training in an Agile learning environment.'
  }
];

export const topPicks: TopPick[] = [
  {
    rank: 1,
    title: 'AskLio AI Chatbot',
    category: 'Featured Original',
    caption: 'React, Python (FastAPI), PostgreSQL & Groq/LLaMA AI with real-time SSE streaming & JWT auth.',
    tag: 'Live on Vercel',
    targetSection: 'originals'
  },
  {
    rank: 2,
    title: 'GitOrbit — GitHub Tracker',
    category: 'Featured Original',
    caption: 'Next.js, FastAPI & MongoDB dashboard tracking follower diffs & repo snapshots via GitHub REST API.',
    tag: 'Vercel + Render',
    targetSection: 'originals'
  },
  {
    rank: 3,
    title: 'Wi-Fi CSI Activity Recognition',
    category: 'Featured Original',
    caption: 'ESP32 C++ & multi-threaded Python GUI logger for real-time human activity signal processing.',
    tag: 'ESP32 + Python',
    targetSection: 'originals'
  },
  {
    rank: 4,
    title: 'MCA @ NIT Raipur',
    category: 'Education',
    caption: 'Master of Computer Applications at National Institute of Technology Raipur (Aug 2024 – Present).',
    tag: 'Season 2',
    targetSection: 'journey'
  },
  {
    rank: 5,
    title: '150+ DSA Problems Solved',
    category: 'Achievement',
    caption: 'Solved 150+ algorithmic challenges using C++ and Python across LeetCode and GeeksforGeeks.',
    tag: 'LeetCode & GFG',
    targetSection: 'achievements'
  },
  {
    rank: 6,
    title: 'FastAPI & Real-Time SSE',
    category: 'Backend Architecture',
    caption: 'Asynchronous Python REST APIs, Server-Sent Events token streaming, Pydantic & JWT security.',
    tag: 'Backend & DB',
    targetSection: 'skills'
  },
  {
    rank: 7,
    title: 'C++ OOP & Multi-Threading',
    category: 'Systems & Core CS',
    caption: 'Strong foundation in Operating Systems, concurrent multi-threading, pointers, and OOP design.',
    tag: 'Core Concepts',
    targetSection: 'skills'
  },
  {
    rank: 8,
    title: 'Cloud & DevOps Pipeline',
    category: 'Infrastructure',
    caption: 'Linux, Docker, Kubernetes, Bash Scripting, GitHub Actions, CI/CD, Vercel & Render.',
    tag: 'DevOps',
    targetSection: 'skills'
  },
  {
    rank: 9,
    title: 'HackerRank Problem Solving',
    category: 'Certification',
    caption: 'Certified in Problem Solving by HackerRank along with MySirG C++ DSA & iNeuron Full Stack training.',
    tag: 'Verified',
    targetSection: 'achievements'
  },
  {
    rank: 10,
    title: 'B.Sc. @ Bundelkhand University',
    category: 'Education',
    caption: 'Bachelor of Science completed at Bundelkhand University, Jhansi (Jul 2021 – Jul 2024).',
    tag: 'Season 1',
    targetSection: 'journey'
  }
];

export const introSlides: IntroSlide[] = [
  {
    kicker: 'NOW STREAMING • NIT RAIPUR',
    title: 'MAHI',
    subtitle: 'Software Engineer pursuing MCA at National Institute of Technology Raipur.',
    stat: 'MCA • 2024 – Present',
    pill: 'Noida / Raipur, India'
  },
  {
    kicker: 'ORIGINAL #1 • FULL-STACK AI',
    title: 'ASKLIO AI CHATBOT',
    subtitle: 'ChatGPT-style AI app with Groq LLaMA, Python FastAPI, Server-Sent Events (SSE), PostgreSQL & JWT.',
    stat: 'Real-Time SSE Streaming',
    pill: 'React • FastAPI • PostgreSQL'
  },
  {
    kicker: 'ORIGINAL #2 • ANALYTICS SAAS',
    title: 'GITORBIT TRACKER',
    subtitle: 'Full-stack GitHub analytics dashboard with MongoDB snapshot comparison & append-only event logs.',
    stat: 'Vercel + Render',
    pill: 'Next.js • FastAPI • MongoDB'
  },
  {
    kicker: 'ORIGINAL #3 • HARDWARE-SOFTWARE PIPELINE',
    title: 'WI-FI CSI SENSING',
    subtitle: 'ESP32 Wi-Fi CSI human activity recognition with a multi-threaded real-time Python GUI logger.',
    stat: 'Concurrent Multi-Threading',
    pill: 'C++ (ESP32) • Python • NumPy'
  },
  {
    kicker: 'PROVEN ALGORITHMIC FOUNDATION',
    title: '150+ DSA SOLVED',
    subtitle: 'LeetCode & GeeksforGeeks in C++ and Python • HackerRank Certified • MySirG C++ Bootcamp • iNeuron FSD.',
    stat: '7 Skill Genres',
    pill: 'Ready for Software Engineering Roles'
  }
];

export const viewerProfiles: ViewerProfile[] = [
  {
    id: 'recruiter',
    name: 'Recruiter',
    role: 'Hiring Manager & Talent Acquisition',
    tagline: 'Prioritizes Originals, Resume, Achievements & Academic Journey',
    color: '#e50914',
    sectionOrder: ['continue', 'originals', 'achievements', 'skills', 'journey', 'top10', 'about']
  },
  {
    id: 'developer',
    name: 'Engineering Lead',
    role: 'Technical Interviewer & Architect',
    tagline: 'Prioritizes Technical Stack, Originals, Systems & Code Architecture',
    color: '#2563eb',
    sectionOrder: ['originals', 'skills', 'continue', 'top10', 'journey', 'achievements', 'about']
  },
  {
    id: 'creative',
    name: 'Collaborator',
    role: 'Product Builder & Fellow Developer',
    tagline: 'Full chronological story from The Pilot to Originals',
    color: '#d97706',
    sectionOrder: ['about', 'journey', 'originals', 'top10', 'skills', 'achievements', 'continue']
  }
];
