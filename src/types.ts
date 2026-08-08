export type TrackId = 'fullstack' | 'ai-tools' | 'mobile' | 'backend' | 'devops';

export interface CourseTrack {
  id: TrackId;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string; // Lucide icon name
  accentColor: string; // Tailwind class or hex
  gradient: string;
  enrolledCount: number;
  skills: string[];
  prerequisites: string;
  phases: {
    phase: string;
    days: string;
    topic: string;
    description: string;
  }[];
}

export interface DayRequirement {
  id: string;
  text: string;
  completed?: boolean;
}

export interface DayTask {
  dayNumber: number;
  trackId: TrackId;
  title: string;
  summary: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedHours: number;
  points: number;
  problemStatement: string;
  objectives: string[];
  codeSnippet?: string;
  codeLanguage?: string;
  requirements: DayRequirement[];
  helpfulResources: { title: string; url: string }[];
}

export interface ProofSubmission {
  dayNumber: number;
  githubUrl: string;
  linkedinUrl: string;
  notes?: string;
  submittedAt: string;
  verified: boolean;
}

export interface StudentProfile {
  name: string;
  college: string;
  avatar: string;
  selectedTrack: TrackId;
  currentStreak: number;
  longestStreak: number;
  completedDays: number[]; // array of day numbers
  submissions: Record<number, ProofSubmission>; // dayNumber -> Proof
  totalPoints: number;
  globalRank: number;
  joinedDate: string;
  badges: { id: string; name: string; icon: string; description: string; unlockedAt?: string }[];
}

export interface MultiUserParticipant {
  id: string;
  name: string;
  college: string;
  avatar: string;
  trackId: TrackId;
  currentStreak: number;
  totalSubmissions: number;
  recentSubmission?: {
    dayNumber: number;
    githubUrl: string;
    linkedinUrl: string;
    timeAgo: string;
  };
  rank: number;
  verifiedCount: number;
}
