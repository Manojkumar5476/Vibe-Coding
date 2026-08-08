import { CourseTrack, DayTask, MultiUserParticipant, StudentProfile } from '../types';

export const COURSE_TRACKS: CourseTrack[] = [
  {
    id: 'fullstack',
    title: 'Full-Stack Web Engineering',
    shortDesc: 'React 19, TypeScript, Express, Node.js & Tailwind CSS',
    fullDesc: 'Master modern web app development from front-end design systems to REST/GraphQL microservices, state management, and real-time database persistence.',
    icon: 'Code2',
    accentColor: '#22d3a6',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-indigo-500/20',
    enrolledCount: 14200,
    skills: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'PostgreSQL', 'Vite', 'REST APIs'],
    prerequisites: 'Basic HTML, CSS, and JS fundamentals.',
    phases: [
      { phase: 'Phase 1', days: 'Days 1-15', topic: 'Modern UI Engineering & State', description: 'Components, hooks, responsive typography, state engines & local persistence.' },
      { phase: 'Phase 2', days: 'Days 16-30', topic: 'Full-Stack Integration & Express', description: 'Custom Express APIs, middleware, security headers, JWT & session auth.' },
      { phase: 'Phase 3', days: 'Days 31-45', topic: 'Database Architecture & ORMs', description: 'Relational data modeling, SQL queries, Drizzle/Prisma & Firebase Firestore.' },
      { phase: 'Phase 4', days: 'Days 46-60', topic: 'Production Shipping & Capstone', description: 'Cloud Run deployment, CI/CD pipelines, performance tuning & portfolio showcase.' },
    ],
  },
  {
    id: 'ai-tools',
    title: 'AI & GenAI Product Development',
    shortDesc: 'Gemini 2.5 API, LLM Agents, Vector Search & RAG',
    fullDesc: 'Build AI-powered applications utilizing Google Gemini API, prompt engineering, agentic workflows, embeddings, vector databases, and real-time multimodal AI.',
    icon: 'Sparkles',
    accentColor: '#6d5efc',
    gradient: 'from-indigo-500/20 via-purple-500/10 to-emerald-500/20',
    enrolledCount: 18900,
    skills: ['Gemini API', '@google/genai', 'RAG', 'Vector Embeddings', 'Function Calling', 'TypeScript', 'Agentic Workflows'],
    prerequisites: 'Basic JavaScript/TypeScript knowledge.',
    phases: [
      { phase: 'Phase 1', days: 'Days 1-15', topic: 'Prompt Engineering & Gemini API', description: 'Structured JSON outputs, multimodal image/audio prompts & system rules.' },
      { phase: 'Phase 2', days: 'Days 16-30', topic: 'Function Calling & Tool Execution', description: 'Connecting LLMs to live APIs, search grounding, weather & database tools.' },
      { phase: 'Phase 3', days: 'Days 31-45', topic: 'Retrieval-Augmented Generation (RAG)', description: 'Chunking, vector embeddings, semantic search & document Q&A engines.' },
      { phase: 'Phase 4', days: 'Days 46-60', topic: 'Autonomous Agents & Production Deploy', description: 'Multi-agent coordination, streaming responses, chat persistence & Cloud Run.' },
    ],
  },
  {
    id: 'mobile',
    title: 'Cross-Platform Mobile Apps',
    shortDesc: 'Flutter, React Native & Native Bridge Interfaces',
    fullDesc: 'Craft high-performance mobile applications for iOS and Android with smooth 60fps animations, local SQLite storage, camera integration, and push alerts.',
    icon: 'Smartphone',
    accentColor: '#38bdf8',
    gradient: 'from-sky-500/20 via-blue-500/10 to-teal-500/20',
    enrolledCount: 9800,
    skills: ['React Native', 'Flutter', 'Dart', 'Tailwind/NativeWind', 'Mobile UX', 'SQLite', 'Push Notifications'],
    prerequisites: 'Foundational programming logic in JS or Dart.',
    phases: [
      { phase: 'Phase 1', days: 'Days 1-15', topic: 'Mobile UI Layouts & Gestures', description: 'Flexbox layouts, touch targets, dark mode, navigation stacks & safe areas.' },
      { phase: 'Phase 2', days: 'Days 16-30', topic: 'State & Offline Persistence', description: 'Global state management, offline-first storage & offline sync queues.' },
      { phase: 'Phase 3', days: 'Days 31-45', topic: 'Device Hardware & Sensors', description: 'Camera, geolocation, audio recorder, biometrics & haptics.' },
      { phase: 'Phase 4', days: 'Days 46-60', topic: 'Store Readiness & Production Build', description: 'App store submission checklist, OTA updates, crash analytics & monetization.' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Systems & Distributed APIs',
    shortDesc: 'Node.js, Express, Microservices, Redis & PostgreSQL',
    fullDesc: 'Architect rock-solid, scalable backend infrastructure with rate limiting, caching layers, message queues, relational database transactions, and gRPC.',
    icon: 'Server',
    accentColor: '#f5b942',
    gradient: 'from-amber-500/20 via-orange-500/10 to-indigo-500/20',
    enrolledCount: 8400,
    skills: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'REST', 'WebSockets', 'Rate Limiting'],
    prerequisites: 'Basic JavaScript and command line usage.',
    phases: [
      { phase: 'Phase 1', days: 'Days 1-15', topic: 'API Design & Express Architecture', description: 'RESTful conventions, request validation with Zod, error handling & logging.' },
      { phase: 'Phase 2', days: 'Days 16-30', topic: 'Data Modeling & Query Optimization', description: 'ACID transactions, indexes, foreign keys, database pooling & migrations.' },
      { phase: 'Phase 3', days: 'Days 31-45', topic: 'Caching, Queues & WebSockets', description: 'Redis caching, BullMQ job queues, real-time WebSocket pub/sub systems.' },
      { phase: 'Phase 4', days: 'Days 46-60', topic: 'Security, Microservices & Containerization', description: 'Dockerizing apps, JWT authentication, rate limiting & load testing.' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps, Cloud & Infrastructure',
    shortDesc: 'Docker, GitHub Actions, Terraform, Kubernetes & GCP',
    fullDesc: 'Automate build pipelines, infrastructure as code, container orchestration, server monitoring, and zero-downtime deployment workflows.',
    icon: 'Cloud',
    accentColor: '#8b5cf6',
    gradient: 'from-purple-500/20 via-indigo-500/10 to-teal-500/20',
    enrolledCount: 6200,
    skills: ['Docker', 'GitHub Actions', 'Terraform', 'Kubernetes', 'Google Cloud', 'Nginx', 'CI/CD'],
    prerequisites: 'Basic Linux terminal and Git commands.',
    phases: [
      { phase: 'Phase 1', days: 'Days 1-15', topic: 'Linux Shell & Git Automation', description: 'Bash scripting, SSH keys, Git workflows, semantic versioning & release tags.' },
      { phase: 'Phase 2', days: 'Days 16-30', topic: 'Containerization & Docker Basics', description: 'Writing Dockerfiles, multi-stage builds, Docker Compose & networking.' },
      { phase: 'Phase 3', days: 'Days 31-45', topic: 'CI/CD Pipelines & Cloud Provisioning', description: 'GitHub Actions automation, linting, unit tests, artifact storage & Cloud Run.' },
      { phase: 'Phase 4', days: 'Days 46-60', topic: 'Infrastructure as Code & Monitoring', description: 'Terraform configurations, CloudWatch metrics, uptime alerts & reverse proxies.' },
    ],
  },
];

// Generates 60 full challenge tasks
export const CHALLENGE_TASKS: DayTask[] = [
  {
    dayNumber: 1,
    trackId: 'fullstack',
    title: 'Initialize Workspace & Build Your Personal Developer Hub',
    summary: 'Kick off your 60-day challenge! Set up a clean React + TypeScript applet, define your developer bio card, and submit your initial proof of work.',
    difficulty: 'Beginner',
    estimatedHours: 1.5,
    points: 100,
    problemStatement: `Welcome to Day 1 of the ABTalks 60-Day Coding Challenge! Today, you are laying the foundation for your 60-day proof-of-work journey.

Your goal for Day 1 is to initialize a clean React + TypeScript application that serves as your Personal Developer Hub. It must display your profile, your chosen learning track, a streak status counter starting at Day 1, and links to your GitHub and LinkedIn profiles.

When completed, commit your code to GitHub and write a brief LinkedIn post sharing your commitment to the 60-Day Challenge using the hashtag #ABTalks60DayCoding.`,
    objectives: [
      'Set up a responsive layout with a hero banner showing Day 1 active streak in vibrant green and blue gradient styling.',
      'Display your student profile card with college name, selected track badge, and social links.',
      'Implement local storage state to track challenge completion.',
      'Commit your codebase to GitHub and craft your first daily LinkedIn progress post.',
    ],
    codeSnippet: `// Starter Day 1 Developer Profile Component
import React from 'react';

export function Day1Profile({ streakDay = 1, trackName = "Full-Stack Web" }) {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-indigo-950/40 border border-emerald-500/30 text-white">
      <div className="flex items-center justify-between">
        <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
          🔥 Day ${'${streakDay}'} Active Streak
        </span>
        <span className="text-xs text-slate-400 font-mono">Track: ${'${trackName}'}</span>
      </div>
      <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white">
        I am committing to 60 Days of Code! 🚀
      </h2>
      <p className="mt-2 text-sm text-slate-300">
        Building proof of work every single day with ABTalks.
      </p>
    </div>
  );
}`,
    codeLanguage: 'tsx',
    requirements: [
      { id: 'req-1', text: 'Create responsive Developer Hub interface' },
      { id: 'req-2', text: 'Show Day 1 streak badge in green & blue mixed styling' },
      { id: 'req-3', text: 'Push codebase to GitHub repository' },
      { id: 'req-4', text: 'Post commitment announcement on LinkedIn with #ABTalks60DayCoding' },
    ],
    helpfulResources: [
      { title: 'ABTalks Challenge Guide', url: 'https://github.com' },
      { title: 'Vite React TypeScript Quickstart', url: 'https://vitejs.dev' },
      { title: 'LinkedIn Post Format Tips for Recruiter Visibility', url: 'https://linkedin.com' },
    ],
  },
  {
    dayNumber: 2,
    trackId: 'fullstack',
    title: 'Interactive Component Library & Design Tokens',
    summary: 'Construct reusable UI components (Buttons, Chips, Modal dialogs, Progress bars) styled with Tailwind CSS utility classes.',
    difficulty: 'Beginner',
    estimatedHours: 2,
    points: 100,
    problemStatement: 'Build a modular component library with smooth hover transitions, accessible keyboard focus states, and customizable variant props.',
    objectives: [
      'Build Button component supporting primary, secondary, and outline variants.',
      'Create custom Badge and Progress bar components.',
      'Implement clean dark-mode design tokens.',
    ],
    codeSnippet: `export function Button({ variant = 'primary', children, ...props }) {
  const base = "px-4 py-2 rounded-xl font-bold transition-all duration-200 active:scale-95";
  const variants = {
    primary: "bg-gradient-to-r from-emerald-500 to-indigo-600 text-white shadow-lg shadow-emerald-500/20 hover:opacity-95",
    secondary: "bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700"
  };
  return <button className={\`\${base} \${variants[variant]}\`} {...props}>{children}</button>;
}`,
    codeLanguage: 'tsx',
    requirements: [
      { id: 'req-1', text: 'Build modular Button, Chip, and Progress Bar components' },
      { id: 'req-2', text: 'Add interactive hover and active animation states' },
      { id: 'req-3', text: 'Submit GitHub commit link & LinkedIn post' },
    ],
    helpfulResources: [
      { title: 'Tailwind CSS Component Docs', url: 'https://tailwindcss.com' },
    ],
  },
  {
    dayNumber: 3,
    trackId: 'fullstack',
    title: 'State Engine & Local Storage Persistence',
    summary: 'Build a custom React state engine using localStorage hooks to persist user preferences and task checklists across browser reloads.',
    difficulty: 'Beginner',
    estimatedHours: 2,
    points: 100,
    problemStatement: 'Implement a reliable custom hook `useLocalStorage` to synchronize state values with browser storage safely.',
    objectives: [
      'Write `useLocalStorage` hook with JSON parse/serialize error boundary.',
      'Persist checklist state for daily challenge items.',
      'Provide reset and export JSON functionality.',
    ],
    codeSnippet: `import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (e) {
      console.error(e);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}`,
    codeLanguage: 'typescript',
    requirements: [
      { id: 'req-1', text: 'Implement custom useLocalStorage React hook' },
      { id: 'req-2', text: 'Persist daily completion checklist automatically' },
      { id: 'req-3', text: 'Submit GitHub repository & LinkedIn update' },
    ],
    helpfulResources: [
      { title: 'React Hooks Guide', url: 'https://react.dev' },
    ],
  },
  {
    dayNumber: 4,
    trackId: 'fullstack',
    title: 'Dynamic Data Filtering & Search Bar',
    summary: 'Build a high-performance search and filter interface with debounced text input, tags, and zero-state messaging.',
    difficulty: 'Intermediate',
    estimatedHours: 2.5,
    points: 120,
    problemStatement: 'Create a responsive filterable catalog for courses and tasks with real-time query matching and animated result transitions.',
    objectives: [
      'Implement debounced search query state.',
      'Add multi-category filter pill toggles.',
      'Handle empty state gracefully with illustrations.',
    ],
    requirements: [
      { id: 'req-1', text: 'Filter catalog items dynamically by category and query string' },
      { id: 'req-2', text: 'Add debouncing for smooth search performance' },
      { id: 'req-3', text: 'Submit proof links on GitHub and LinkedIn' },
    ],
    helpfulResources: [{ title: 'Debounce Pattern in JS', url: 'https://developer.mozilla.org' }],
  },
  {
    dayNumber: 5,
    trackId: 'fullstack',
    title: 'Interactive Heatmap & Streak Calendar View',
    summary: 'Construct an interactive 60-day challenge calendar grid showing completed, current, and locked challenge days with tooltips.',
    difficulty: 'Intermediate',
    estimatedHours: 2.5,
    points: 120,
    problemStatement: 'Build a 60-day calendar matrix displaying status color codes: emerald green for completed days, indigo blue for current active day, and dark soft for future days.',
    objectives: [
      'Design 60-cell responsive grid matrix.',
      'Show day progress percentage and streak count.',
      'Enable clicking any day cell to view that specific task details.',
    ],
    requirements: [
      { id: 'req-1', text: 'Render 60-day challenge grid with status tooltips' },
      { id: 'req-2', text: 'Color code completed days in emerald green and current day in indigo' },
      { id: 'req-3', text: 'Submit GitHub commit and LinkedIn proof' },
    ],
    helpfulResources: [{ title: 'CSS Grid Matrix Layouts', url: 'https://css-tricks.com' }],
  },
];

// Helper to auto-fill the remaining days up to Day 60 with structured coding challenges
for (let i = 6; i <= 60; i++) {
  const tracks: CourseTrack['id'][] = ['fullstack', 'ai-tools', 'mobile', 'backend', 'devops'];
  const trackId = tracks[(i - 1) % tracks.length];
  
  let topicName = '';
  if (i <= 15) topicName = `Foundational Module ${i}: Core Architecture & UI State`;
  else if (i <= 30) topicName = `Intermediate Module ${i}: Express APIs & Server Routes`;
  else if (i <= 45) topicName = `Advanced Module ${i}: Data Persistence & Gemini AI Integration`;
  else topicName = `Capstone Module ${i}: Cloud Deployment & System Polish`;

  CHALLENGE_TASKS.push({
    dayNumber: i,
    trackId,
    title: `Day ${i}: ${topicName}`,
    summary: `Build and ship functional feature for Day ${i}. Maintain your public proof-of-work streak on GitHub and LinkedIn.`,
    difficulty: i < 20 ? 'Beginner' : i < 40 ? 'Intermediate' : 'Advanced',
    estimatedHours: 2,
    points: 100 + (i * 2),
    problemStatement: `Welcome to Day ${i}! Today's objective is to implement: ${topicName}. Make sure to write clean, self-documenting code, test your solution, and upload proof of work.`,
    objectives: [
      `Implement core requirements for Day ${i}.`,
      'Ensure zero console errors and clean responsive layout.',
      'Upload GitHub commit link and LinkedIn daily post.',
    ],
    codeSnippet: `// Sample implementation starter for Day ${i}
export function Day${i}Task() {
  return (
    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 font-mono">
      Day ${i} Module initialized successfully! 🔥
    </div>
  );
}`,
    codeLanguage: 'tsx',
    requirements: [
      { id: `req-d${i}-1`, text: `Complete functional scope for Day ${i}` },
      { id: `req-d${i}-2`, text: 'Add responsive dark theme styling and error handling' },
      { id: `req-d${i}-3`, text: 'Post daily proof on GitHub & LinkedIn' },
    ],
    helpfulResources: [
      { title: `Day ${i} Technical Reference`, url: 'https://github.com' },
    ],
  });
}

// Multi-user participants (Indian college students participating in challenge)
export const MULTI_USER_PARTICIPANTS: MultiUserParticipant[] = [
  {
    id: 'p-1',
    name: 'Aarav Sharma',
    college: 'IIT Bombay',
    avatar: 'AS',
    trackId: 'fullstack',
    currentStreak: 1,
    totalSubmissions: 1,
    rank: 1,
    verifiedCount: 1,
    recentSubmission: {
      dayNumber: 1,
      githubUrl: 'https://github.com/aaravsharma/60day-challenge/commit/a8f921d',
      linkedinUrl: 'https://linkedin.com/posts/aaravsharma_abtalks60daycoding-day1-activity-712893',
      timeAgo: '12m ago',
    },
  },
  {
    id: 'p-2',
    name: 'Ananya Roy',
    college: 'NIT Trichy',
    avatar: 'AR',
    trackId: 'ai-tools',
    currentStreak: 1,
    totalSubmissions: 1,
    rank: 2,
    verifiedCount: 1,
    recentSubmission: {
      dayNumber: 1,
      githubUrl: 'https://github.com/anannyaroy/gemini-60days/commit/b3310ff',
      linkedinUrl: 'https://linkedin.com/posts/anannyaroy_abtalks60daycoding-day1-activity-891022',
      timeAgo: '28m ago',
    },
  },
  {
    id: 'p-3',
    name: 'Rohan Verma',
    college: 'BITS Pilani',
    avatar: 'RV',
    trackId: 'backend',
    currentStreak: 1,
    totalSubmissions: 1,
    rank: 3,
    verifiedCount: 1,
    recentSubmission: {
      dayNumber: 1,
      githubUrl: 'https://github.com/rohanverma/backend-mastery/commit/e4221a',
      linkedinUrl: 'https://linkedin.com/posts/rohanverma_abtalks60daycoding-day1-activity-441092',
      timeAgo: '45m ago',
    },
  },
  {
    id: 'p-4',
    name: 'Priya Sundaram',
    college: 'VIT Vellore',
    avatar: 'PS',
    trackId: 'mobile',
    currentStreak: 1,
    totalSubmissions: 1,
    rank: 4,
    verifiedCount: 1,
    recentSubmission: {
      dayNumber: 1,
      githubUrl: 'https://github.com/priyasundaram/flutter-60-days/commit/f90012',
      linkedinUrl: 'https://linkedin.com/posts/priyasundaram_abtalks60daycoding-day1-activity-991204',
      timeAgo: '1h ago',
    },
  },
  {
    id: 'p-5',
    name: 'Devansh Patel',
    college: 'Delhi Technological Univ (DTU)',
    avatar: 'DP',
    trackId: 'devops',
    currentStreak: 1,
    totalSubmissions: 1,
    rank: 5,
    verifiedCount: 1,
    recentSubmission: {
      dayNumber: 1,
      githubUrl: 'https://github.com/devanshpatel/devops-60days/commit/c00192',
      linkedinUrl: 'https://linkedin.com/posts/devanshpatel_abtalks60daycoding-day1-activity-120049',
      timeAgo: '2h ago',
    },
  },
  {
    id: 'p-6',
    name: 'Sneha Kulkarni',
    college: 'COEP Pune',
    avatar: 'SK',
    trackId: 'fullstack',
    currentStreak: 1,
    totalSubmissions: 1,
    rank: 6,
    verifiedCount: 1,
    recentSubmission: {
      dayNumber: 1,
      githubUrl: 'https://github.com/snehak/react-60day/commit/d88190',
      linkedinUrl: 'https://linkedin.com/posts/snehak_abtalks60daycoding-day1-activity-332190',
      timeAgo: '2h ago',
    },
  },
  {
    id: 'p-7',
    name: 'Vikramaditya Nair',
    college: 'IIT Madras',
    avatar: 'VN',
    trackId: 'ai-tools',
    currentStreak: 1,
    totalSubmissions: 1,
    rank: 7,
    verifiedCount: 1,
    recentSubmission: {
      dayNumber: 1,
      githubUrl: 'https://github.com/vikramnair/ai-agent-60/commit/99201f',
      linkedinUrl: 'https://linkedin.com/posts/vikramnair_abtalks60daycoding-day1-activity-881920',
      timeAgo: '3h ago',
    },
  },
];

// Initial active student profile (starts with Day 1 active streak!)
export const INITIAL_STUDENT_PROFILE: StudentProfile = {
  name: 'Manoj Kumar',
  college: 'IIT Madras',
  avatar: 'MK',
  selectedTrack: 'fullstack',
  currentStreak: 1,
  longestStreak: 1,
  completedDays: [1],
  submissions: {
    1: {
      dayNumber: 1,
      githubUrl: 'https://github.com/manojkumar/abtalks-60day-challenge/commit/4f2a91b',
      linkedinUrl: 'https://linkedin.com/posts/manojkumar_abtalks60daycoding-day1-activity-7291823',
      notes: 'Day 1 setup completed! Initialized personal dev hub, integrated green-blue streak badge, and pushed codebase to GitHub.',
      submittedAt: 'Today at 02:15 AM',
      verified: true,
    },
  },
  totalPoints: 100,
  globalRank: 14,
  joinedDate: 'August 2026',
  badges: [
    {
      id: 'b-day1',
      name: 'Day 1 Pioneer',
      icon: 'Zap',
      description: 'Took the pledge and completed Day 1 proof of work!',
      unlockedAt: 'August 8, 2026',
    },
    {
      id: 'b-streak1',
      name: 'Streak Ignited 🔥',
      icon: 'Flame',
      description: 'Started active streak with GitHub commit and LinkedIn post.',
      unlockedAt: 'August 8, 2026',
    },
  ],
};
