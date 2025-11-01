import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#1F2937] dark:bg-[#121212] dark:text-gray-100">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-6">
          <Hero />
          <Sections />
        </div>
      </main>
      <Footer />
    </div>
  );
}
