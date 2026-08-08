import React, { useState } from 'react';
import { 
  Trophy, 
  Users, 
  Search, 
  Flame, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  Star, 
  Filter,
  Award
} from 'lucide-react';
import { MULTI_USER_PARTICIPANTS, COURSE_TRACKS } from '../data/mockData';
import { StudentProfile } from '../types';

interface LeaderboardViewProps {
  profile: StudentProfile;
}

export const LeaderboardView: React.FC<LeaderboardViewProps> = ({ profile }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilterTrack, setSelectedFilterTrack] = useState<string>('all');

  const filteredParticipants = MULTI_USER_PARTICIPANTS.filter(student => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.college.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTrack = selectedFilterTrack === 'all' || student.trackId === selectedFilterTrack;

    return matchesSearch && matchesTrack;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-16 text-slate-100">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 text-purple-300 font-extrabold text-xs border border-purple-500/30 mb-3">
          <Trophy className="w-4 h-4 text-purple-400" /> LIVE MULTI-USER STANDINGS & PROOF FEED
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          60-Day Challenge Leaderboard
        </h1>
        <p className="text-slate-300 text-sm sm:text-base mt-2">
          Tracking daily proof of work across Indian college engineering campuses.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search by student name or college..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 pl-9"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
        </div>

        {/* Track Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1">
          <button
            onClick={() => setSelectedFilterTrack('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              selectedFilterTrack === 'all'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-slate-950 text-slate-400 hover:text-white'
            }`}
          >
            All Tracks
          </button>

          {COURSE_TRACKS.map(t => (
            <button
              key={t.id}
              onClick={() => setSelectedFilterTrack(t.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedFilterTrack === t.id
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-slate-950 text-slate-400 hover:text-white'
              }`}
            >
              {t.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Leaderboard Table / Cards */}
      <div className="space-y-4">
        
        {/* Current User Card Highlight */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-indigo-950/80 border-2 border-emerald-400/60 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm font-black text-emerald-400 w-8">#{profile.globalRank}</span>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-indigo-500 flex items-center justify-center font-black text-sm text-slate-950 shadow-md">
              {profile.avatar}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-base text-white">{profile.name} ( You )</h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-[10px] border border-emerald-500/40">
                  Verified Active
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">{profile.college} • {profile.totalPoints} XP</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-indigo-600/25 border border-emerald-400/40 text-emerald-300 font-black text-xs flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-emerald-400 fill-current" />
              Day {profile.currentStreak} Streak 🔥
            </div>
          </div>
        </div>

        {/* Other Participants */}
        {filteredParticipants.map(student => (
          <div
            key={student.id}
            className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm font-bold text-slate-500 w-8">#{student.rank}</span>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center font-bold text-xs text-white shadow-md">
                {student.avatar}
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-white">{student.name}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{student.college}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {student.recentSubmission && (
                <div className="flex items-center gap-3 text-xs">
                  <a
                    href={student.recentSubmission.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-slate-300 hover:text-emerald-400 font-semibold"
                  >
                    <Github className="w-3.5 h-3.5 text-white" /> Commit
                  </a>
                  <a
                    href={student.recentSubmission.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-semibold"
                  >
                    <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                </div>
              )}

              <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-xs border border-emerald-500/30 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-emerald-400 fill-current" />
                Day {student.currentStreak} 🔥
              </span>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};
