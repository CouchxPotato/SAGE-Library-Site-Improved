import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { almirahs } from '../data/books';
import { Library, ArrowLeft, BookOpen } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';

export function AlmirahPage() {
  const { almirahId } = useParams();
  const almirah = almirahs.find(a => a.id === almirahId);

  if (!almirah) {
    return <div>Almirah not found</div>;
  }

  // Group books by shelf
  const booksByShelf = almirah.books.reduce((acc, book) => {
    if (!acc[book.shelf]) {
      acc[book.shelf] = [];
    }
    acc[book.shelf].push(book);
    return acc;
  }, {} as Record<number, typeof almirah.books>);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-uni-yellow/20
    dark:from-slate-900 dark:to-uni-maroon transition-colors duration-300">
      <header className="bg-gradient-to-r from-uni-maroon to-uni-red text-white py-6 px-4
      dark:from-slate-900 dark:to-uni-maroon text-white">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/"
            className="btn-hover inline-flex items-center gap-2 text-uni-yellow hover:text-white mb-4 px-3 py-1 rounded-lg"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Library</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Library className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">SAGE Central Library</h1>
              <p className="text-uni-yellow text-sm">Almirah {almirahId}</p>
            </div>
            <div className="ml-auto"> {/* This will push ThemeToggle to the right */}
          <ThemeToggle />
        </div>
          </div>
          
        </div>
      </header>

      <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-8">
        <div className="space-y-8">
          {Object.entries(booksByShelf)
            .sort(([a], [b]) => Number(a) - Number(b))
            .map(([shelf, books], index) => (
              <div 
                key={shelf} 
                className="bg-white rounded-xl shadow-xl p-6 animate-cabinet-open"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex items-center gap-3 mb-4 text-uni-maroon">
                  <BookOpen className="w-6 h-6" />
                  <h2 className="text-xl font-bold">
                    Shelf {shelf}
                  </h2>
                </div>

                <div className="grid gap-4">
                  {books.map((book, bookIndex) => (
                    <div
                      key={bookIndex}
                      className="book-item p-4 bg-gradient-to-br from-uni-yellow/20 to-white rounded-lg"
                      style={{
                        animationDelay: `${(index * books.length + bookIndex) * 50}ms`
                      }}
                    >
                      <h3 className="text-lg text-uni-maroon">
                        {book.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
          ))}
        </div>
      </main>

      <footer
        className="bg-gradient-to-r from-uni-maroon to-uni-red 
                       dark:from-slate-900 dark:to-uni-maroon text-white mt-auto py-6"
      >
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          <p className="text-uni-yellow">© 2025 SAGE University, Bhopal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 
