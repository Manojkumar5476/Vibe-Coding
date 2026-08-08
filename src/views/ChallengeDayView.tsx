import React, { useState, useEffect } from 'react';
import { 
  Flame, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Code2, 
  Sparkles, 
  ExternalLink,
  Info,
  Clock,
  Award,
  BookOpen
} from 'lucide-react';
import { StudentProfile, ProofSubmission } from '../types';
import { CHALLENGE_TASKS, COURSE_TRACKS } from '../data/mockData';

interface ChallengeDayViewProps {
  dayNumber: number;
  setSelectedDayNumber: (day: number) => void;
  profile: StudentProfile;
  setProfile: React.Dispatch<React.SetStateAction<StudentProfile>>;
  showToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
  setCurrentView: (view: string) => void;
}

export const ChallengeDayView: React.FC<ChallengeDayViewProps> = ({
  dayNumber,
  setSelectedDayNumber,
  profile,
  setProfile,
  showToast,
  setCurrentView,
}) => {
  const task = CHALLENGE_TASKS.find(t => t.dayNumber === dayNumber) || CHALLENGE_TASKS[0];
  const currentTrack = COURSE_TRACKS.find(t => t.id === profile.selectedTrack) || COURSE_TRACKS[0];

  const existingSubmission = profile.submissions[dayNumber];
  const isCompleted = profile.completedDays.includes(dayNumber);

  // Form states
  const [githubUrl, setGithubUrl] = useState(existingSubmission?.githubUrl || '');
  const [linkedinUrl, setLinkedinUrl] = useState(existingSubmission?.linkedinUrl || '');
  const [notes, setNotes] = useState(existingSubmission?.notes || '');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLinkedInText, setCopiedLinkedInText] = useState(false);

  // Local checklist state for requirements
  const [completedReqs, setCompletedReqs] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    task.requirements.forEach(req => {
      initial[req.id] = isCompleted;
    });
    return initial;
  });

  useEffect(() => {
    if (existingSubmission) {
      setGithubUrl(existingSubmission.githubUrl);
      setLinkedinUrl(existingSubmission.linkedinUrl);
      setNotes(existingSubmission.notes || '');
    } else {
      setGithubUrl('');
      setLinkedinUrl('');
      setNotes('');
    }

    const initial: Record<string, boolean> = {};
    task.requirements.forEach(req => {
      initial[req.id] = isCompleted;
    });
    setCompletedReqs(initial);
  }, [dayNumber, existingSubmission, isCompleted, task.requirements]);

  const toggleReq = (reqId: string) => {
    setCompletedReqs(prev => ({ ...prev, [reqId]: !prev[reqId] }));
  };

  const handleCopyCode = () => {
    if (task.codeSnippet) {
      navigator.clipboard.writeText(task.codeSnippet);
      setCopiedCode(true);
      showToast('Starter code snippet copied to clipboard!', 'info');
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const handleFillSampleLinks = () => {
    setGithubUrl(`https://github.com/manojkumar/abtalks-60day/commit/day${dayNumber}-proof`);
    setLinkedinUrl(`https://linkedin.com/posts/manojkumar_abtalks60daycoding-day${dayNumber}-activity-881290`);
    setNotes(`Completed Day ${dayNumber}: ${task.title}. Built with React, TypeScript & Tailwind CSS.`);
    showToast('Sample GitHub & LinkedIn proof URLs filled!', 'info');
  };

  const handleSubmitProof = (e: React.FormEvent) => {
    e.preventDefault();

    if (!githubUrl.trim() || !githubUrl.includes('github.com')) {
      showToast('Please provide a valid GitHub repository or commit URL', 'error');
      return;
    }

    if (!linkedinUrl.trim() || !linkedinUrl.includes('linkedin.com')) {
      showToast('Please provide a valid LinkedIn post URL', 'error');
      return;
    }

    const newSubmission: ProofSubmission = {
      dayNumber,
      githubUrl: githubUrl.trim(),
      linkedinUrl: linkedinUrl.trim(),
      notes: notes.trim() || `Completed Day ${dayNumber} task.`,
      submittedAt: 'Just now',
      verified: true,
    };

    setProfile(prev => {
      const isNewCompletion = !prev.completedDays.includes(dayNumber);
      const updatedCompletedDays = isNewCompletion
        ? [...prev.completedDays, dayNumber].sort((a, b) => a - b)
        : prev.completedDays;

      // Calculate streak
      const newStreak = updatedCompletedDays.length;

      return {
        ...prev,
        completedDays: updatedCompletedDays,
        currentStreak: newStreak,
        longestStreak: Math.max(prev.longestStreak, newStreak),
        submissions: {
          ...prev.submissions,
          [dayNumber]: newSubmission,
        },
        totalPoints: isNewCompletion ? prev.totalPoints + task.points : prev.totalPoints,
      };
    });

    showToast(`Day ${dayNumber} Proof Submitted! Streak set to Day ${profile.currentStreak + (isCompleted ? 0 : 1)} 🔥`, 'success');
  };

  const linkedInShareText = `🔥 Day ${dayNumber} of ABTalks 60-Day Coding Challenge Completed!

Today's Project: ${task.title}
Track: ${currentTrack.title}

Key learnings:
- Built responsive UI components
- Solved daily logic objectives
- Committed proof of work on GitHub

GitHub Commit: ${githubUrl || 'https://github.com'}

Joining thousands of Indian college students in building public proof of work! 🚀

#ABTalks60DayCoding #60DaysOfCode #BuildInPublic #SoftwareEngineering #${currentTrack.id}`;

  const handleCopyLinkedInPost = () => {
    navigator.clipboard.writeText(linkedInShareText);
    setCopiedLinkedInText(true);
    showToast('LinkedIn post text copied! Paste it in your LinkedIn post.', 'success');
    setTimeout(() => setCopiedLinkedInText(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 md:pb-16 text-slate-100">
      
      {/* Top Breadcrumb & Day Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <button
          onClick={() => setCurrentView('dashboard')}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Student Dashboard</span>
        </button>

        {/* Day Selector Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
          <button
            disabled={dayNumber <= 1}
            onClick={() => setSelectedDayNumber(Math.max(1, dayNumber - 1))}
            className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <span className="px-4 py-2 rounded-xl bg-slate-900 border border-emerald-500/30 text-xs font-mono font-black text-emerald-300">
            Day {dayNumber} / 60
          </span>

          <button
            disabled={dayNumber >= 60}
            onClick={() => setSelectedDayNumber(Math.min(60, dayNumber + 1))}
            className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ---------- DAY HEADER BANNER WITH GREEN & BLUE MIXED STREAK ---------- */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-indigo-950/60 border border-emerald-500/40 shadow-2xl relative overflow-hidden mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {/* Day 1 Streak Badge */}
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-indigo-600/25 border border-emerald-400/40 text-emerald-300 text-xs font-black flex items-center gap-1.5 shadow-md">
                <Flame className="w-3.5 h-3.5 text-emerald-400 fill-current" />
                DAY {profile.currentStreak} STREAK ACTIVE
              </span>

              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">
                {currentTrack.title}
              </span>

              {isCompleted && (
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-black border border-emerald-500/40 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED PROOF
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {task.title}
            </h1>
            <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              {task.summary}
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono font-bold shrink-0 bg-slate-950/80 p-4 rounded-2xl border border-white/10">
            <div>
              <div className="text-slate-400 font-sans text-[10px] uppercase">Reward Points</div>
              <div className="text-emerald-400 text-lg font-black">{task.points} XP</div>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div>
              <div className="text-slate-400 font-sans text-[10px] uppercase">Est. Time</div>
              <div className="text-indigo-300 text-lg font-black">{task.estimatedHours}h</div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- PROBLEM STATEMENT & OBJECTIVES ---------- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        
        <div className="lg:col-span-2 space-y-6">
          
          {/* Problem Statement Box */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-white/10">
            <h2 className="text-base font-extrabold text-white mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              Challenge Problem Statement
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
              {task.problemStatement}
            </p>

            <h3 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mt-6 mb-3">
              Daily Objectives
            </h3>
            <ul className="space-y-2">
              {task.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <span className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-extrabold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirement Checklist */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-white/10">
            <h2 className="text-base font-extrabold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              Interactive Task Requirements Checklist
            </h2>

            <div className="space-y-2.5">
              {task.requirements.map(req => {
                const checked = !!completedReqs[req.id];
                return (
                  <label
                    key={req.id}
                    onClick={() => toggleReq(req.id)}
                    className={`p-3.5 rounded-2xl border text-xs font-semibold flex items-center gap-3 cursor-pointer transition-all ${
                      checked
                        ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                        : 'bg-slate-950/60 border-white/10 text-slate-300 hover:bg-slate-800/60'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-lg border flex items-center justify-center text-xs transition-colors shrink-0 ${
                      checked ? 'bg-emerald-500 border-emerald-400 text-slate-950 font-black' : 'border-slate-600'
                    }`}>
                      {checked && '✓'}
                    </div>
                    <span className="flex-1">{req.text}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Starter Code Snippet Box */}
          {task.codeSnippet && (
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-indigo-400" /> Starter Code Snippet ({task.codeLanguage || 'typescript'})
                </span>
                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 border border-white/10 text-xs font-bold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-2xl bg-slate-950 border border-white/10 font-mono-code text-xs text-emerald-300 overflow-x-auto leading-relaxed">
                <code>{task.codeSnippet}</code>
              </pre>
            </div>
          )}

        </div>

        {/* ---------- RIGHT COLUMN: PROOF OF WORK SUBMISSION FORM ---------- */}
        <div className="space-y-6">
          
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-2xl sticky top-24">
            
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-black text-white flex items-center gap-2">
                <Github className="w-5 h-5 text-emerald-400" />
                Submit Proof of Work
              </h2>

              <button
                type="button"
                onClick={handleFillSampleLinks}
                className="text-[10px] font-bold text-emerald-400 hover:underline cursor-pointer"
              >
                Autofill Sample Links
              </button>
            </div>

            <p className="text-xs text-slate-300 mb-5">
              Submit your public GitHub commit and LinkedIn post URL to record your daily streak.
            </p>

            <form onSubmit={handleSubmitProof} className="space-y-4">
              {/* GitHub Commit URL Input */}
              <div>
                <label className="block text-xs font-extrabold text-slate-300 mb-1.5">
                  1. GitHub Repository / Commit Link *
                </label>
                <div className="relative">
                  <input
                    type="url"
                    required
                    placeholder="https://github.com/username/repo/commit/..."
                    value={githubUrl}
                    onChange={e => setGithubUrl(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-950 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors pl-9"
                  />
                  <Github className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                </div>
              </div>

              {/* LinkedIn Post URL Input */}
              <div>
                <label className="block text-xs font-extrabold text-slate-300 mb-1.5">
                  2. LinkedIn Public Post Link *
                </label>
                <div className="relative">
                  <input
                    type="url"
                    required
                    placeholder="https://linkedin.com/posts/username_activity-..."
                    value={linkedinUrl}
                    onChange={e => setLinkedinUrl(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-950 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors pl-9"
                  />
                  <Linkedin className="w-4 h-4 text-sky-400 absolute left-3 top-3.5" />
                </div>
              </div>

              {/* Reflection Notes */}
              <div>
                <label className="block text-xs font-extrabold text-slate-300 mb-1.5">
                  3. Key Learnings & Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="What did you build or learn today?"
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4 text-slate-950 fill-current" />
                <span>{isCompleted ? 'Update Proof of Work' : 'Verify & Lock Day Streak'}</span>
              </button>
            </form>

            {/* LinkedIn Share Helper Template */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-sky-400 flex items-center gap-1.5">
                  <Share2 className="w-3.5 h-3.5" /> LinkedIn Share Template
                </span>
                <button
                  type="button"
                  onClick={handleCopyLinkedInPost}
                  className="text-[11px] font-bold text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  {copiedLinkedInText ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>Copy Template</span>
                </button>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 text-[11px] font-mono text-slate-400 max-h-28 overflow-y-auto leading-relaxed border border-white/5">
                {linkedInShareText}
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
