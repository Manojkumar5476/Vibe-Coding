import React from 'react';
import { Home, LayoutDashboard, Calendar, BookOpen, Users } from 'lucide-react';

interface BottomNavProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  selectedDayNumber: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentView,
  setCurrentView,
  selectedDayNumber,
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0a0d14]/95 backdrop-blur-2xl border-t border-white/10 px-3 py-2 pb-safe">
      <div className="grid grid-cols-5 gap-1 max-w-md mx-auto">
        <button
          onClick={() => setCurrentView('landing')}
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[10px] font-bold transition-all ${
            currentView === 'landing'
              ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span>Home</span>
        </button>

        <button
          onClick={() => setCurrentView('dashboard')}
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[10px] font-bold transition-all ${
            currentView === 'dashboard'
              ? 'text-teal-400 bg-teal-500/10 border border-teal-500/20'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <LayoutDashboard className="w-4 h-4 mb-0.5" />
          <span>Dashboard</span>
        </button>

        <button
          onClick={() => setCurrentView('day')}
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[10px] font-bold transition-all relative ${
            currentView === 'day'
              ? 'text-indigo-400 bg-indigo-500/10 border border-indigo-500/20'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <div className="relative">
            <Calendar className="w-4 h-4 mb-0.5" />
            <span className="absolute -top-1 -right-1.5 bg-gradient-to-r from-emerald-500 to-indigo-500 text-slate-950 font-black text-[8px] px-1 rounded-full leading-tight">
              {selectedDayNumber}
            </span>
          </div>
          <span>Day {selectedDayNumber}</span>
        </button>

        <button
          onClick={() => setCurrentView('tracks')}
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[10px] font-bold transition-all ${
            currentView === 'tracks'
              ? 'text-sky-400 bg-sky-500/10 border border-sky-500/20'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4 mb-0.5" />
          <span>Courses</span>
        </button>

        <button
          onClick={() => setCurrentView('leaderboard')}
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[10px] font-bold transition-all ${
            currentView === 'leaderboard'
              ? 'text-purple-400 bg-purple-500/10 border border-purple-500/20'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Users className="w-4 h-4 mb-0.5" />
          <span>Students</span>
        </button>
      </div>
    </nav>
  );
};
