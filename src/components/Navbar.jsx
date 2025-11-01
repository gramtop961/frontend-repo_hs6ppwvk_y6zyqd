import React from 'react';
import { Home, MapPin, BarChart3, User, Sun, Moon } from 'lucide-react';

const navItems = [
  { label: 'Feed', icon: Home },
  { label: 'Map', icon: MapPin },
  { label: 'Dashboard', icon: BarChart3 },
  { label: 'Profile', icon: User },
];

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="h-9 w-9 rounded-lg grid place-items-center text-white font-bold"
            style={{ backgroundColor: '#1E88E5' }}
            aria-label="Safa Nepal logo"
          >
            SN
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold text-gray-900 dark:text-white">Safa Nepal</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Together for a Cleaner Nepal</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition"
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-md border border-black/5 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200 transition"
            aria-label="Toggle theme"
            title="Toggle light/dark"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            className="hidden sm:inline-flex items-center px-3 py-2 rounded-md text-sm font-semibold text-white shadow"
            style={{ backgroundColor: '#43A047' }}
          >
            Report Issue
          </button>
        </div>
      </div>
    </header>
  );
}
