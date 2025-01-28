import React from 'react';
import { almirahs } from './data/books';
import { Almirah } from './components/Almirah';
import { ThemeToggle } from './components/ThemeToggle';
export default function App() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-white to-uni-yellow/20 
                    dark:from-slate-900 dark:to-uni-maroon transition-colors duration-300">
      {/* Header */}
      <header
        className="bg-gradient-to-r from-uni-maroon to-uni-red 
                       dark:from-slate-900 dark:to-uni-maroon text-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="bg-white rounded-xl shadow-lg">
                <img
                  src="/uni_logo.png"
                  alt="University Logo"
                  className="w-42 h-14"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight">
                  SAGE Central Library
                </h1>
                <p className="text-uni-yellow text-lg mt-1">
                  Digital Library System
                </p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-12">
        <h2 className="text-2xl font-semibold text-uni-red mb-12 text-center">
          Digital Library Navigation System
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {almirahs.map((almirah) => (
            <div key={almirah.id} className="relative isolate">
              <Almirah almirah={almirah} />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer
        className="bg-gradient-to-r from-uni-maroon to-uni-red 
                       dark:from-slate-900 dark:to-uni-maroon text-white mt-auto py-6"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-uni-yellow">
            © 2025 SAGE University, Bhopal. All rights reserved.
          </p>
          <p className="text-uni-yellow/80 text-sm mt-2">
            Digital Library Navigation System
          </p>
        </div>
      </footer>
    </div>
  );
}
