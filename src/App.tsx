import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { Toast } from './components/Toast';
import { LandingPage } from './views/LandingPage';
import { DashboardView } from './views/DashboardView';
import { ChallengeDayView } from './views/ChallengeDayView';
import { TracksView } from './views/TracksView';
import { LeaderboardView } from './views/LeaderboardView';
import { INITIAL_STUDENT_PROFILE } from './data/mockData';
import { StudentProfile } from './types';

const STORAGE_KEY = 'abtalks_student_profile_v1';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('landing');
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);
  
  // Toast state
  const [toast, setToast] = useState<{ message: string | null; type?: 'success' | 'error' | 'info' }>({
    message: null,
  });

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ message, type });
  };

  // Student Profile state with localStorage persistence
  const [profile, setProfile] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading profile from localStorage:', e);
    }
    return INITIAL_STUDENT_PROFILE;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch (e) {
      console.error('Error saving profile to localStorage:', e);
    }
  }, [profile]);

  return (
    <div className="min-h-screen bg-[#07090f] text-[#f3f6ff] font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        profile={profile}
        selectedDayNumber={selectedDayNumber}
        setSelectedDayNumber={setSelectedDayNumber}
      />

      {/* Main View Router */}
      <main className="w-full">
        {currentView === 'landing' && (
          <LandingPage
            setCurrentView={setCurrentView}
            profile={profile}
            setProfile={setProfile}
            setSelectedDayNumber={setSelectedDayNumber}
            showToast={showToast}
          />
        )}

        {currentView === 'dashboard' && (
          <DashboardView
            profile={profile}
            setCurrentView={setCurrentView}
            selectedDayNumber={selectedDayNumber}
            setSelectedDayNumber={setSelectedDayNumber}
          />
        )}

        {currentView === 'day' && (
          <ChallengeDayView
            dayNumber={selectedDayNumber}
            setSelectedDayNumber={setSelectedDayNumber}
            profile={profile}
            setProfile={setProfile}
            showToast={showToast}
            setCurrentView={setCurrentView}
          />
        )}

        {currentView === 'tracks' && (
          <TracksView
            profile={profile}
            setProfile={setProfile}
            setCurrentView={setCurrentView}
            showToast={showToast}
          />
        )}

        {currentView === 'leaderboard' && (
          <LeaderboardView profile={profile} />
        )}
      </main>

      {/* Mobile Navigation Bar */}
      <BottomNav
        currentView={currentView}
        setCurrentView={setCurrentView}
        selectedDayNumber={selectedDayNumber}
      />

      {/* Global Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: null })}
      />

    </div>
  );
}
