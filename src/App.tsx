import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [darkMode]);

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main>
        <Home />
        <About />
        <Experience />
        <Skills />
        <div id="blog" className="py-16 px-4">
          <h2 className="section-title text-center">Blog</h2>
          <div className="max-w-4xl mx-auto mt-12">
            <p className="text-center text-gray-600 dark:text-gray-400">Coming soon...</p>
          </div>
        </div>
        <div id="contact" className="py-16 px-4">
          <h2 className="section-title text-center">Contact</h2>
          <div className="max-w-4xl mx-auto mt-12">
            <p className="text-center text-gray-600 dark:text-gray-400">Contact section coming soon...</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
