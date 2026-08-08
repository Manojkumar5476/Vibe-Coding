import React from 'react';
import { 
  Flame, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Zap, 
  Github, 
  Linkedin, 
  Users, 
  BookOpen, 
  Trophy, 
  Calendar, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { StudentProfile, DayTask, CourseTrack } from '../types';
import { CHALLENGE_TASKS, COURSE_TRACKS, MULTI_USER_PARTICIPANTS } from '../data/mockData';

interface DashboardViewProps {
  profile: StudentProfile;
  setCurrentView: (view: string) => void;
  selectedDayNumber: number;
  setSelectedDayNumber: (day: number) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  profile,
  setCurrentView,
  selectedDayNumber,
  setSelectedDayNumber,
}) => {
  const currentTrack = COURSE_TRACKS.find(t => t.id === profile.selectedTrack) || COURSE_TRACKS[0];
  const todayTask = CHALLENGE_TASKS.find(t => t.dayNumber === selectedDayNumber) || CHALLENGE_TASKS[0];
  const totalDays = 60;
  const completionPercentage = Math.round((profile.completedDays.length / totalDays) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 md:pb-12 text-slate-100">
      
      {/* ---------- STUDENT HERO BANNER WITH GREEN & BLUE MIXED STREAK ---------- */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-indigo-950/60 border border-emerald-500/30 shadow-2xl relative overflow-hidden mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            {/* Day 1 Streak Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-indigo-600/25 border border-emerald-400/40 text-emerald-300 shadow-md mb-3">
              <Flame className="w-4 h-4 text-emerald-400 fill-current animate-pulse" />
              <span className="text-xs font-black tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-indigo-300">
                DAY {profile.currentStreak} ACTIVE STREAK · PROOF VERIFIED
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Welcome back, {profile.name}! 👋
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-xl">
              Student at <strong className="text-white">{profile.college}</strong> • Enrolled in <strong className="text-emerald-300">{currentTrack.title}</strong>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                setSelectedDayNumber(1);
                setCurrentView('day');
              }}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/20 hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-slate-950 fill-current" />
              <span>Open Day {selectedDayNumber} Task</span>
            </button>

            <button
              onClick={() => setCurrentView('tracks')}
              className="px-5 py-3.5 rounded-2xl bg-slate-900 border border-white/10 hover:border-emerald-500/30 text-slate-200 font-bold text-xs transition-all cursor-pointer flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Switch Track</span>
            </button>
          </div>
        </div>
      </div>

      {/* ---------- METRICS OVERVIEW GRID ---------- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        
        {/* Metric 1: Streak */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-slate-900 border border-emerald-500/30">
          <div className="flex items-center justify-between text-xs text-emerald-300 font-bold uppercase tracking-wider mb-2">
            <span>Current Streak</span>
            <Flame className="w-4 h-4 text-emerald-400 fill-current" />
          </div>
          <div className="text-3xl font-black text-white flex items-baseline gap-2">
            Day {profile.currentStreak}
            <span className="text-xs text-emerald-400 font-extrabold">🔥 Active</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2 font-medium">
            Longest streak: {profile.longestStreak} Day
          </p>
        </div>

        {/* Metric 2: Completion Progress */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/30">
          <div className="flex items-center justify-between text-xs text-indigo-300 font-bold uppercase tracking-wider mb-2">
            <span>Overall Completion</span>
            <CheckCircle2 className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-3xl font-black text-white">
            {profile.completedDays.length} <span className="text-xs font-semibold text-slate-400">/ 60 Days</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mt-3">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-indigo-500 rounded-full transition-all duration-500"
              style={{ width: `${Math.max(completionPercentage, 3)}%` }}
            />
          </div>
        </div>

        {/* Metric 3: Standing Rank */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-teal-950/40 to-slate-900 border border-teal-500/30">
          <div className="flex items-center justify-between text-xs text-teal-300 font-bold uppercase tracking-wider mb-2">
            <span>Global Rank</span>
            <Trophy className="w-4 h-4 text-teal-400" />
          </div>
          <div className="text-3xl font-black text-white">
            #{profile.globalRank}
          </div>
          <p className="text-[11px] text-teal-400 mt-2 font-bold">
            Top 5% in Indian Colleges
          </p>
        </div>

        {/* Metric 4: Total XP */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-950/40 to-slate-900 border border-purple-500/30">
          <div className="flex items-center justify-between text-xs text-purple-300 font-bold uppercase tracking-wider mb-2">
            <span>Experience Points</span>
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-3xl font-black text-white">
            {profile.totalPoints} <span className="text-xs text-purple-400 font-bold">XP</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2 font-medium">
            Next unlock at 200 XP
          </p>
        </div>

      </div>

      {/* ---------- MAIN CONTENT GRID: TODAY'S TASK & 60-DAY HEATMAP ---------- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        
        {/* TODAY'S TASK CARD (2 Cols) */}
        <div className="lg:col-span-2 p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-emerald-500/30 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-black border border-emerald-500/30">
                CHALLENGE DAY {todayTask.dayNumber} TASK
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Est. {todayTask.estimatedHours} Hours • {todayTask.points} Points
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {todayTask.title}
            </h2>

            <p className="text-slate-300 text-sm mt-2 leading-relaxed">
              {todayTask.summary}
            </p>

            {/* Checklist items preview */}
            <div className="mt-5 space-y-2">
              <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">
                Key Task Requirements
              </h4>
              {todayTask.requirements.map((req, idx) => {
                const isDone = profile.completedDays.includes(todayTask.dayNumber);
                return (
                  <div
                    key={req.id}
                    className={`p-3 rounded-xl border text-xs font-semibold flex items-center gap-3 transition-colors ${
                      isDone
                        ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                        : 'bg-slate-950/60 border-white/10 text-slate-300'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] shrink-0 ${
                      isDone ? 'bg-emerald-500 border-emerald-400 text-slate-950 font-black' : 'border-slate-600 text-slate-400'
                    }`}>
                      {isDone ? '✓' : idx + 1}
                    </div>
                    <span className="flex-1">{req.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Requires GitHub Commit & LinkedIn Post Links</span>
            </div>

            <button
              onClick={() => {
                setSelectedDayNumber(todayTask.dayNumber);
                setCurrentView('day');
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Go to Day {todayTask.dayNumber} Challenge Page</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>

        {/* RECENT SUBMISSIONS & BADGES (1 Col) */}
        <div className="space-y-6">
          
          {/* Day 1 Verified Proof Card */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-white/10">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              YOUR DAY 1 VERIFIED PROOF
            </h3>

            {profile.submissions[1] ? (
              <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-400">Proof Verified</span>
                  <span className="text-[10px] text-slate-400">{profile.submissions[1].submittedAt}</span>
                </div>

                <p className="text-xs text-slate-300 italic">
                  "{profile.submissions[1].notes}"
                </p>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2 text-xs">
                  <a
                    href={profile.submissions[1].githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 font-bold text-slate-200 hover:text-emerald-400 transition-colors"
                  >
                    <Github className="w-4 h-4 text-white" /> Commit Link
                  </a>
                  <a
                    href={profile.submissions[1].linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 font-bold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn Post
                  </a>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-400">No submission recorded for Day 1 yet.</p>
            )}
          </div>

          {/* Unlocked Badges */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-white/10">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-indigo-400" />
              UNLOCKED ACHIEVEMENTS ({profile.badges.length})
            </h3>

            <div className="space-y-3">
              {profile.badges.map(badge => (
                <div key={badge.id} className="p-3 rounded-2xl bg-slate-950/60 border border-emerald-500/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-indigo-600 flex items-center justify-center text-slate-950 font-black text-base shrink-0 shadow-md">
                    ⚡
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-white">{badge.name}</h4>
                    <p className="text-[11px] text-slate-400">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* ---------- 60-DAY INTERACTIVE CALENDAR HEATMAP MATRIX ---------- */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-400" />
              60-Day Challenge Progress Heatmap
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Click any day cell to open the challenge task and submit your GitHub & LinkedIn proof of work.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-gradient-to-r from-emerald-400 to-indigo-500" />
              <span className="text-emerald-300">Completed Day 1</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-slate-800 border border-white/20" />
              <span className="text-slate-400">Future Task</span>
            </div>
          </div>
        </div>

        {/* 60 Grid Matrix */}
        <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-12 gap-2 sm:gap-3">
          {Array.from({ length: 60 }, (_, i) => i + 1).map(day => {
            const isCompleted = profile.completedDays.includes(day);
            const isCurrent = day === selectedDayNumber;

            return (
              <button
                key={day}
                onClick={() => {
                  setSelectedDayNumber(day);
                  setCurrentView('day');
                }}
                className={`aspect-square rounded-xl p-1 text-center flex flex-col items-center justify-center transition-all cursor-pointer relative group ${
                  isCompleted
                    ? 'bg-gradient-to-br from-emerald-500 via-teal-500 to-indigo-600 text-slate-950 font-black shadow-lg shadow-emerald-500/20 hover:scale-110'
                    : isCurrent
                    ? 'bg-slate-800 border-2 border-emerald-400 text-emerald-300 font-extrabold hover:bg-slate-700'
                    : 'bg-slate-950 border border-white/10 text-slate-500 font-semibold hover:border-slate-500 hover:text-slate-300'
                }`}
              >
                <span className="text-xs font-mono">{day}</span>
                {isCompleted && (
                  <span className="text-[9px] leading-none mt-0.5">✓</span>
                )}

                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 hidden group-hover:block z-30 p-2 rounded-xl bg-slate-950 border border-white/20 text-[10px] text-slate-200 whitespace-nowrap shadow-2xl pointer-events-none">
                  Day {day}: {isCompleted ? 'Verified Proof' : 'Task Ready'}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ---------- MULTI-USER LEADERBOARD SUMMARY ---------- */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-400" />
              Live Participant Standings
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Top Indian college coders maintaining active streaks.
            </p>
          </div>

          <button
            onClick={() => setCurrentView('leaderboard')}
            className="text-xs font-extrabold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>View All</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          {MULTI_USER_PARTICIPANTS.slice(0, 3).map((student, idx) => (
            <div
              key={student.id}
              className="p-3.5 rounded-2xl bg-slate-950/70 border border-white/5 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-slate-500 w-5">#{idx + 1}</span>
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-indigo-600 flex items-center justify-center font-bold text-xs text-white">
                  {student.avatar}
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-white">{student.name}</h4>
                  <p className="text-[11px] text-slate-400">{student.college}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-xs border border-emerald-500/30">
                  Day {student.currentStreak} 🔥
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
