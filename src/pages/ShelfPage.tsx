import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { books } from '../data/books';
import { BookOpenCheck, Library, ArrowLeft } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';

export function ShelfPage() {
  const { shelfId } = useParams();
  const shelfBooks = books.filter(book => book.shelf_no === Number(shelfId));

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-uni-yellow to-uni-orange
    dark:from-slate-900 dark:to-uni-maroon transition-colors duration-300">
      <header className="bg-gradient-to-r from-uni-maroon to-uni-red text-white py-6 px-4
      dark:from-slate-900 dark:to-uni-maroon text-white">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-uni-gold hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Library</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Library className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">SAGE University Library</h1>
              <p className="text-uni-gold text-sm">Shelf {shelfId}</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-4 py-8 w-full">
        <div className="bg-white rounded-xl shadow-xl p-8 min-h-[400px]">
          <div className="flex items-center gap-3 mb-8">
            <BookOpenCheck className="w-8 h-8 text-uni-red" />
            <h2 className="text-2xl font-bold text-slate-800">
              Shelf {shelfId} Contents
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {shelfBooks.map((book) => (
              <div
                key={book.id}
                className="p-6 bg-gradient-to-br from-uni-yellow to-uni-gold rounded-xl
                         hover:from-uni-orange hover:to-uni-red transition-all duration-300
                         transform hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between h-full"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {book.book_name}
                </h3>
                <p className="text-slate-600">by {book.author}</p>
              </div>
            ))}
          </div>
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
