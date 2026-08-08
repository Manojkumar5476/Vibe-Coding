import React, { useState } from 'react';
import { 
  Flame, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Sparkles, 
  Smartphone, 
  Server, 
  Cloud, 
  Github, 
  Linkedin, 
  Users, 
  Award, 
  ShieldCheck, 
  BookOpen, 
  TrendingUp, 
  Check, 
  Star,
  Zap,
  ExternalLink
} from 'lucide-react';
import { COURSE_TRACKS, MULTI_USER_PARTICIPANTS } from '../data/mockData';
import { CourseTrack, StudentProfile, TrackId } from '../types';

interface LandingPageProps {
  setCurrentView: (view: string) => void;
  profile: StudentProfile;
  setProfile: React.Dispatch<React.SetStateAction<StudentProfile>>;
  setSelectedDayNumber: (day: number) => void;
  showToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  setCurrentView,
  profile,
  setProfile,
  setSelectedDayNumber,
  showToast,
}) => {
  const [selectedTrackDetail, setSelectedTrackDetail] = useState<CourseTrack>(COURSE_TRACKS[0]);

  const handleSelectTrack = (trackId: TrackId) => {
    setProfile(prev => ({ ...prev, selectedTrack: trackId }));
    const track = COURSE_TRACKS.find(t => t.id === trackId);
    showToast(`Enrolled in ${track?.title || 'Selected Track'}!`, 'success');
    setCurrentView('dashboard');
  };

  const trackIconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-6 h-6 text-emerald-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-indigo-400" />,
    Smartphone: <Smartphone className="w-6 h-6 text-sky-400" />,
    Server: <Server className="w-6 h-6 text-amber-400" />,
    Cloud: <Cloud className="w-6 h-6 text-purple-400" />,
  };

  return (
    <div className="min-h-screen pb-24 md:pb-16 text-slate-100">
      
      {/* ---------- HERO SECTION WITH GREEN + BLUE MIXED GLOW ---------- */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-indigo-600/20 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Day 1 Active Streak Pill */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-indigo-600/25 border border-emerald-400/40 text-emerald-300 shadow-xl shadow-emerald-500/10 backdrop-blur-md animate-pulse">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span className="text-xs font-black tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-indigo-300">
                🔥 DAY 1 ACTIVE STREAK · 60-DAY CODING CHALLENGE
              </span>
            </div>
          </div>

          {/* Huge Attractive Display Title */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.02] text-white">
              BUILD EVERY DAY.{' '}
              <span className="gradient-text-emerald-indigo block mt-1">
                BECOME UNSTOPPABLE.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
              The premier <strong className="text-emerald-300 font-bold">Proof of Work</strong> challenge for Indian college students. Pick a track, code every night, post daily GitHub & LinkedIn proof, and land top engineer offers.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  setSelectedDayNumber(1);
                  setCurrentView('day');
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 text-slate-950 font-black text-base shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>Start Day 1 Challenge Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-slate-950" />
              </button>

              <button
                onClick={() => setCurrentView('dashboard')}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-emerald-500/30 text-white font-bold text-base transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Flame className="w-5 h-5 text-emerald-400" />
                <span>View Student Dashboard</span>
              </button>
            </div>

            {/* Trust Row */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span><strong className="text-white">14,200+</strong> Indian College Coders Enrolled</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span><strong className="text-white">89,000+</strong> Verified GitHub Commits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span><strong className="text-white">45+</strong> Hiring Partners (Google, Swiggy, CRED)</span>
              </div>
            </div>
          </div>

          {/* ---------- PHONE FRAME & INTERACTIVE APPLET MOCKUP ---------- */}
          <div className="mt-14 max-w-4xl mx-auto">
            <div className="p-3 sm:p-5 rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 via-[#0a0d14] to-[#07090f] shadow-2xl relative">
              {/* Phone Frame Mockup Header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 text-xs font-mono text-slate-400 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-slate-300 font-semibold">ABTalks Student Applet — Live Preview</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Day 1 Proof Submitted
                </div>
              </div>

              {/* Interactive Dashboard Preview Box */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                {/* Metric 1 */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-slate-900 border border-emerald-500/30">
                  <div className="text-xs text-emerald-300 font-bold uppercase tracking-wider mb-1">
                    Current Streak
                  </div>
                  <div className="text-3xl font-extrabold text-white flex items-baseline gap-2">
                    Day 1 <span className="text-xs text-emerald-400 font-bold">🔥 Active</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Started today! Next goal: Day 2 unlock.
                  </p>
                </div>

                {/* Metric 2 */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/30">
                  <div className="text-xs text-indigo-300 font-bold uppercase tracking-wider mb-1">
                    Proof Verification
                  </div>
                  <div className="text-3xl font-extrabold text-white flex items-center gap-2">
                    100% <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-[11px] text-slate-300">
                    <Github className="w-3.5 h-3.5 text-white" /> Commit Verified
                    <Linkedin className="w-3.5 h-3.5 text-sky-400" /> Post Live
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-950/40 to-slate-900 border border-teal-500/30">
                  <div className="text-xs text-teal-300 font-bold uppercase tracking-wider mb-1">
                    Leaderboard League
                  </div>
                  <div className="text-3xl font-extrabold text-white">
                    #14 <span className="text-xs text-teal-400 font-semibold">IIT/NIT Division</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2">
                    100 Points earned on Day 1.
                  </p>
                </div>
              </div>

              {/* Day 1 Task Preview Strip */}
              <div className="mt-4 p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                    <Zap className="w-4 h-4" /> TODAY'S CHALLENGE TASK (DAY 1)
                  </div>
                  <h4 className="text-base font-extrabold text-white mt-1">
                    Initialize Workspace & Build Your Personal Developer Hub
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Track: Full-Stack Web • 100 Points • 1.5 Hours
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedDayNumber(1);
                    setCurrentView('day');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-600 text-slate-950 font-extrabold text-xs shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
                >
                  View Day 1 Task
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ---------- MULTI-USER PARTICIPANTS SHOWCASE ---------- */}
      <section className="py-12 bg-slate-900/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 mb-2">
                <Users className="w-3.5 h-3.5" /> LIVE COMMUNITY PROOF FEED
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Indian College Coders Building Live
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Real-time submissions from students across IITs, NITs, BITS, VIT, DTU & COEP.
              </p>
            </div>

            <button
              onClick={() => setCurrentView('leaderboard')}
              className="inline-flex items-center gap-2 text-xs font-extrabold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
            >
              <span>View Full Leaderboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MULTI_USER_PARTICIPANTS.slice(0, 4).map(student => (
              <div
                key={student.id}
                className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-indigo-600 flex items-center justify-center font-bold text-xs text-white shadow-md">
                        {student.avatar}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-white leading-snug">{student.name}</h4>
                        <p className="text-[11px] text-slate-400">{student.college}</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-[10px] border border-emerald-500/30">
                      Day {student.currentStreak} 🔥
                    </span>
                  </div>

                  {student.recentSubmission && (
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300 space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                        <span>Submitted Day {student.recentSubmission.dayNumber} Proof</span>
                        <span className="text-slate-500">{student.recentSubmission.timeAgo}</span>
                      </div>
                      <div className="flex items-center gap-3 pt-1">
                        <a
                          href={student.recentSubmission.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-[11px] font-bold text-slate-300 hover:text-emerald-400 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5 text-white" /> Commit
                        </a>
                        <a
                          href={student.recentSubmission.linkedinUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-[11px] font-bold text-sky-400 hover:text-sky-300 transition-colors"
                        >
                          <Linkedin className="w-3.5 h-3.5" /> Post
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-semibold text-teal-400">Verified Coder</span>
                  <span className="font-mono text-slate-500">#Rank {student.rank}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------- SEPARATE ALL COURSES / TRACKS IN FULL DETAIL ---------- */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold border border-indigo-500/20 mb-3">
            <BookOpen className="w-3.5 h-3.5" /> CHOOSE YOUR SPECIALIZATION TRACK
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            5 Distinct Engineering Tracks
          </h2>
          <p className="text-slate-300 text-base mt-2">
            Select your course track. Each track includes a complete 60-day curriculum with daily milestones, real project repositories, and recruiter skill verifications.
          </p>
        </div>

        {/* Tracks Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
          {COURSE_TRACKS.map(track => {
            const isSelected = selectedTrackDetail.id === track.id;
            return (
              <button
                key={track.id}
                onClick={() => setSelectedTrackDetail(track)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-emerald-400 shadow-xl shadow-emerald-500/10 scale-[1.02]'
                    : 'bg-slate-900/60 border-white/10 hover:border-white/20 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-white/10">
                    {trackIconMap[track.icon]}
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </div>
                <h3 className="font-extrabold text-sm text-white leading-snug">{track.title}</h3>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{track.shortDesc}</p>
                <div className="mt-3 text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                  <span>{track.enrolledCount.toLocaleString()} Enrolled</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Selected Course View Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-xs border border-emerald-500/30">
                  Detailed Course View
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {selectedTrackDetail.enrolledCount.toLocaleString()} Students Enrolled
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {selectedTrackDetail.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                {selectedTrackDetail.fullDesc}
              </p>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <button
                onClick={() => handleSelectTrack(selectedTrackDetail.id)}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/20 hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Enroll in {selectedTrackDetail.title}</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
              <p className="text-[11px] text-slate-400 text-center font-medium">
                Prerequisite: {selectedTrackDetail.prerequisites}
              </p>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="mb-8">
            <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-3">
              Technologies & Tools Mastered
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedTrackDetail.skills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl bg-slate-950/80 border border-white/10 text-xs font-bold text-slate-200"
                >
                  ⚡ {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 60-Day Curriculum Phase Breakdown */}
          <div>
            <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-4">
              60-Day Step-by-Step Curriculum Outline
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {selectedTrackDetail.phases.map(phase => (
                <div
                  key={phase.phase}
                  className="p-4 rounded-2xl bg-slate-950/70 border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-emerald-400">{phase.phase}</span>
                      <span className="px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 font-mono text-[10px] font-bold">
                        {phase.days}
                      </span>
                    </div>
                    <h5 className="font-extrabold text-sm text-white">{phase.topic}</h5>
                    <p className="text-xs text-slate-400 mt-1.5 leading-normal">{phase.description}</p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-emerald-400 font-bold">
                    <Check className="w-3.5 h-3.5" /> 15 Daily Micro-Projects
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ---------- HOW THE 60-DAY CHALLENGE WORKS ---------- */}
      <section className="py-16 bg-slate-900/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 mb-3">
              <TrendingUp className="w-3.5 h-3.5" /> PROOF OF WORK ENGINE
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              How ABTalks Transforms Your Resume
            </h2>
            <p className="text-slate-300 text-base mt-2">
              No boring theoretical lectures. You build real production code on your phone or laptop every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-white/10 hover:border-emerald-500/40 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center font-black text-slate-950 text-base mb-4 shadow-lg shadow-emerald-500/20">
                1
              </div>
              <h3 className="text-lg font-extrabold text-white">Pick Your Track & Read Day Task</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Log in every night after college. Each daily task comes with clear objectives, starter code snippets, and helpful resources.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-white/10 hover:border-indigo-500/40 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-500 to-indigo-600 flex items-center justify-center font-black text-slate-950 text-base mb-4 shadow-lg shadow-indigo-500/20">
                2
              </div>
              <h3 className="text-lg font-extrabold text-white">Build & Submit Proof of Work</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Commit your code to GitHub and share a brief LinkedIn post explaining your learnings. Paste both links in the applet to verify your daily streak.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-white/10 hover:border-purple-500/40 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-black text-slate-950 text-base mb-4 shadow-lg shadow-purple-500/20">
                3
              </div>
              <h3 className="text-lg font-extrabold text-white">Get Noticed by Tech Recruiters</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Maintain a 60-day streak to unlock verified hiring partner referrals, proof-of-work badges, and direct interview shortlists.
              </p>
            </div>
          </div>

          {/* Student Testimonial Quote Card */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-indigo-950/40 border border-emerald-500/30 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-indigo-500 p-[1px] shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center font-black text-xl text-emerald-300">
                RK
              </div>
            </div>
            <div className="text-left flex-1">
              <div className="flex items-center gap-1 text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-base sm:text-lg text-slate-200 italic font-medium">
                "Submitting a daily GitHub commit and LinkedIn post was a game changer. Tech recruiters messaged me directly on LinkedIn on Day 42 because they saw my consistency. I received a software engineer internship offer before graduating!"
              </p>
              <div className="mt-3 text-xs font-bold text-emerald-400">
                Rohan Kapoor — Final Year Student, NIT Kurukshetra (Hired at Swiggy)
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ---------- FINAL CTA BANNER ---------- */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-900/60 via-slate-900 to-indigo-900/60 border border-emerald-400/40 text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Start Day 1?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mt-3">
            Join thousands of college coders today. Takes less than 2 minutes to kick off your streak.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                setSelectedDayNumber(1);
                setCurrentView('day');
              }}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-500 text-slate-950 font-black text-base shadow-2xl hover:scale-105 transition-all cursor-pointer"
            >
              Start Day 1 Task Now 🔥
            </button>
            <button
              onClick={() => setCurrentView('tracks')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-950 border border-white/20 text-white font-bold text-base hover:bg-slate-900 transition-all cursor-pointer"
            >
              Explore All 5 Tracks
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
