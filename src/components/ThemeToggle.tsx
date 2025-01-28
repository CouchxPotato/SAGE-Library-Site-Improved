import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-white/10 dark:bg-uni-maroon/30
                hover:bg-white/20 dark:hover:bg-uni-maroon/50
                transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun className="absolute inset-0 w-6 h-6 rotate-0 scale-100 transition-all duration-300
                       dark:-rotate-90 dark:scale-0 text-uni-yellow" />
        <Moon className="absolute inset-0 w-6 h-6 rotate-90 scale-0 transition-all duration-300
                       dark:rotate-0 dark:scale-100 text-uni-gold" />
      </div>
    </button>
  );
}