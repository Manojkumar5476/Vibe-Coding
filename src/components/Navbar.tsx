import React from 'react';
import { Flame, Code2, LayoutDashboard, Award, Users, BookOpen, ChevronRight } from 'lucide-react';
import { StudentProfile } from '../types';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  profile: StudentProfile;
  selectedDayNumber: number;
  setSelectedDayNumber: (day: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  profile,
  selectedDayNumber,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#07090f]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Brand Logo */}
          <button
            onClick={() => setCurrentView('landing')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-500 to-indigo-600 p-[1px] shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-[#07090f] rounded-[11px] flex items-center justify-center">
                <span className="font-extrabold text-sm text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-indigo-300">
                  AB
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-black text-base tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                ABTalks
                <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  60-Day
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium -mt-0.5 hidden sm:block">
                Proof of Work Challenge
              </p>
            </div>
          </button>

          {/* Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1 rounded-2xl border border-white/10">
            <button
              onClick={() => setCurrentView('landing')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentView === 'landing'
                  ? 'bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              Home
            </button>

            <button
              onClick={() => setCurrentView('dashboard')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentView === 'dashboard'
                  ? 'bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-teal-400" />
              Dashboard
            </button>

            <button
              onClick={() => setCurrentView('day')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentView === 'day'
                  ? 'bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-indigo-400" />
              Day {selectedDayNumber} Task
            </button>

            <button
              onClick={() => setCurrentView('tracks')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentView === 'tracks'
                  ? 'bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-sky-400" />
              All Courses
            </button>

            <button
              onClick={() => setCurrentView('leaderboard')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentView === 'leaderboard'
                  ? 'bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Users className="w-3.5 h-3.5 text-purple-400" />
              Participants
            </button>
          </nav>

          {/* Right Action / Day 1 Streak Badge */}
          <div className="flex items-center gap-3">
            {/* Vibrant Day 1 Streak Badge in Green + Blue Mixed Style */}
            <div className="relative group">
              <button
                onClick={() => setCurrentView('dashboard')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-indigo-600/25 border border-emerald-400/40 text-emerald-300 shadow-lg shadow-emerald-500/10 hover:border-emerald-300 hover:shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-indigo-500 flex items-center justify-center text-slate-950 font-black text-[10px] animate-pulse">
                  <Flame className="w-3 h-3 text-slate-950 fill-current" />
                </div>
                <div className="text-left leading-none">
                  <div className="text-[11px] font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-indigo-300">
                    Day {profile.currentStreak} Streak 🔥
                  </div>
                  <div className="text-[9px] text-slate-400 font-medium hidden sm:block">
                    Active & Verified
                  </div>
                </div>
              </button>
            </div>

            {/* Profile CTA */}
            <button
              onClick={() => setCurrentView('dashboard')}
              className="flex items-center gap-2 p-1 pl-2 pr-3 rounded-full bg-slate-900 border border-white/10 hover:border-emerald-500/40 transition-all cursor-pointer"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center font-bold text-xs text-white shadow-md">
                {profile.avatar}
              </div>
              <span className="text-xs font-semibold text-slate-200 hidden sm:inline-block">
                {profile.name.split(' ')[0]}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500 hidden sm:inline-block" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
