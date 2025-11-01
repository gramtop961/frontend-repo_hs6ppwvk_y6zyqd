import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Together for a Cleaner Nepal.
        </p>
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <span>© {new Date().getFullYear()} Safa Nepal</span>
          <span>•</span>
          <a href="#" className="hover:underline">Community Guidelines</a>
        </div>
      </div>
    </footer>
  );
}
