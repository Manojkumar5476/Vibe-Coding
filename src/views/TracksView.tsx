import React, { useState } from 'react';
import { 
  Code2, 
  Sparkles, 
  Smartphone, 
  Server, 
  Cloud, 
  Check, 
  ArrowRight, 
  Users, 
  BookOpen, 
  ChevronDown, 
  ChevronUp,
  Award,
  Zap
} from 'lucide-react';
import { COURSE_TRACKS } from '../data/mockData';
import { CourseTrack, StudentProfile, TrackId } from '../types';

interface TracksViewProps {
  profile: StudentProfile;
  setProfile: React.Dispatch<React.SetStateAction<StudentProfile>>;
  setCurrentView: (view: string) => void;
  showToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export const TracksView: React.FC<TracksViewProps> = ({
  profile,
  setProfile,
  setCurrentView,
  showToast,
}) => {
  const [expandedTrackId, setExpandedTrackId] = useState<TrackId>('fullstack');

  const handleSelectTrack = (trackId: TrackId) => {
    setProfile(prev => ({ ...prev, selectedTrack: trackId }));
    const track = COURSE_TRACKS.find(t => t.id === trackId);
    showToast(`Active track updated to ${track?.title || 'Selected Track'}!`, 'success');
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-16 text-slate-100">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-xs border border-emerald-500/30 mb-3">
          <BookOpen className="w-4 h-4" /> 5 ALL-INCLUSIVE SPECIALIZATION TRACKS
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Explore All 60-Day Challenge Courses
        </h1>
        <p className="text-slate-300 text-sm sm:text-base mt-2">
          Select any course track to view its full 60-day syllabus, tech stack modules, and career learning outcomes.
        </p>
      </div>

      {/* Track List */}
      <div className="space-y-8">
        {COURSE_TRACKS.map(track => {
          const isCurrentSelected = profile.selectedTrack === track.id;
          const isExpanded = expandedTrackId === track.id;

          return (
            <div
              key={track.id}
              className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                isCurrentSelected
                  ? 'bg-slate-900/90 border-emerald-500/50 shadow-2xl shadow-emerald-500/10'
                  : 'bg-slate-900/60 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-white/10 shrink-0">
                    {trackIconMap[track.icon]}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h2 className="text-xl sm:text-2xl font-black text-white">{track.title}</h2>
                      {isCurrentSelected && (
                        <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-xs border border-emerald-500/40">
                          Active Enrolled Track
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                      {track.fullDesc}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
                      <span><strong className="text-white">{track.enrolledCount.toLocaleString()}</strong> College Students</span>
                      <span>•</span>
                      <span>Prerequisites: <strong className="text-slate-200">{track.prerequisites}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Track Actions */}
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => handleSelectTrack(track.id)}
                    className={`px-6 py-3 rounded-xl font-black text-xs transition-all cursor-pointer flex items-center gap-2 ${
                      isCurrentSelected
                        ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                        : 'bg-slate-800 border border-white/10 text-white hover:bg-slate-700'
                    }`}
                  >
                    <span>{isCurrentSelected ? 'Enrolled in Track' : 'Enroll in Course'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setExpandedTrackId(isExpanded ? ('fullstack' as TrackId) : track.id)}
                    className="p-3 rounded-xl bg-slate-950 border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>

              </div>

              {/* Expanded Syllabus Breakdown */}
              {isExpanded && (
                <div className="mt-8 pt-8 border-t border-white/10 space-y-6 animate-in fade-in duration-300">
                  <div>
                    <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-3">
                      Mastered Technologies & Frameworks
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {track.skills.map(skill => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-xl bg-slate-950 border border-white/10 text-xs font-bold text-emerald-300"
                        >
                          ⚡ {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-4">
                      Complete 60-Day Phase Roadmap
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {track.phases.map(phase => (
                        <div
                          key={phase.phase}
                          className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 flex flex-col justify-between"
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
                          <div className="mt-4 pt-2 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-teal-400 font-bold">
                            <Check className="w-3.5 h-3.5" /> 15 Daily Deliverables
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
};
