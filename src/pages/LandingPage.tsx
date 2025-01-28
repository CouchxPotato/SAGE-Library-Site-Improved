import React from 'react';
import { Link } from 'react-router-dom';
import { Library, BookOpen, QrCode, Search as SearchIcon } from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { ThemeToggle } from '../components/ThemeToggle';

export function LandingPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-white to-uni-yellow/20 
                    dark:from-slate-900 dark:to-uni-maroon transition-colors duration-300"
    >
      <header
        className="bg-gradient-to-r from-uni-maroon to-uni-red 
                       dark:from-slate-900 dark:to-uni-maroon text-white"
      >
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

      <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-uni-maroon dark:text-uni-yellow mb-4">
            Find Your Books Easily
          </h2>
          <p className="text-lg text-uni-red/80 dark:text-uni-gold/90 max-w-2xl mx-auto">
            Navigate through our digital library system to locate any book in
            our collection. Search by title or browse through our organized
            almirahs.
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-16">
          <SearchBar />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="feature-card group">
            <div
              className="bg-uni-yellow/20 dark:bg-uni-maroon/30 p-6 rounded-2xl transition-all duration-300
                          group-hover:scale-[1.02] group-hover:shadow-xl"
            >
              <BookOpen className="w-12 h-12 text-uni-orange dark:text-uni-gold mb-4" />
              <h3 className="text-xl font-semibold text-uni-maroon dark:text-uni-yellow mb-2">
                Extensive Collection
              </h3>
              <p className="text-uni-red/80 dark:text-uni-gold/80">
                Access our vast collection of academic books, journals, and
                research materials.
              </p>
            </div>
          </div>

          <div className="feature-card group">
            <div
              className="bg-uni-gold/20 dark:bg-uni-red/30 p-6 rounded-2xl transition-all duration-300
                          group-hover:scale-[1.02] group-hover:shadow-xl"
            >
              <SearchIcon className="w-12 h-12 text-uni-red dark:text-uni-gold mb-4" />
              <h3 className="text-xl font-semibold text-uni-maroon dark:text-uni-yellow mb-2">
                Smart Search
              </h3>
              <p className="text-uni-red/80 dark:text-uni-gold/80">
                Find books quickly with our intelligent search system that shows
                exact locations.
              </p>
            </div>
          </div>

          <div className="feature-card group">
            <div
              className="bg-uni-orange/20 dark:bg-uni-orange/30 p-6 rounded-2xl transition-all duration-300
                          group-hover:scale-[1.02] group-hover:shadow-xl"
            >
              <QrCode className="w-12 h-12 text-uni-maroon dark:text-uni-gold mb-4" />
              <h3 className="text-xl font-semibold text-uni-maroon dark:text-uni-yellow mb-2">
                QR Navigation
              </h3>
              <p className="text-uni-red/80 dark:text-uni-gold/80">
                Scan QR codes to instantly access detailed information about
                each almirah.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/library"
            className="btn-hover inline-flex items-center gap-2 px-6 py-3 
                     bg-gradient-to-r from-uni-maroon to-uni-red text-white
                     rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Library className="w-5 h-5" />
            <span>Browse Library</span>
          </Link>
        </div>
      </main>

      <footer
        className="bg-gradient-to-r from-uni-maroon to-uni-red 
                       dark:from-slate-900 dark:to-uni-maroon text-white mt-auto py-6"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-uni-yellow">
            © 2025 SAGE University, Bhopal. All rights reserved.
          </p>
          <p className="text-uni-gold/80 text-sm mt-2">
            Digital Library Navigation System
          </p>
        </div>
      </footer>
    </div>
  );
}
