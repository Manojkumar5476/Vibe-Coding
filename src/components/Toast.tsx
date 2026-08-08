import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  if (!message) return null;

  const bgColors = {
    success: 'bg-slate-900 border-emerald-500/40 text-emerald-300 shadow-emerald-500/10',
    error: 'bg-slate-900 border-rose-500/40 text-rose-300 shadow-rose-500/10',
    info: 'bg-slate-900 border-indigo-500/40 text-indigo-300 shadow-indigo-500/10',
  };

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-indigo-400 shrink-0" />,
  };

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 z-50 max-w-md w-full px-4 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div
        className={`p-4 rounded-2xl border backdrop-blur-xl shadow-2xl flex items-center gap-3 ${bgColors[type]}`}
      >
        {icons[type]}
        <p className="text-xs font-semibold text-slate-100 flex-1">{message}</p>
        <button
          onClick={onClose}
          className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
