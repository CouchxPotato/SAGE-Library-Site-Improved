import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { almirahs } from '../data/books';

interface SearchResult {
  title: string;
  almirahId: string;
  section: string;
  shelf: number;
}

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setIsSearching(true);

    if (searchQuery.trim() === '') {
      setResults([]);
      setIsSearching(false);
      return;
    }

    const searchResults: SearchResult[] = [];
    const searchTerm = searchQuery.toLowerCase();

    almirahs.forEach((almirah) => {
      Object.entries(almirah.subAlmirahs).forEach(([section, subAlmirah]) => {
        subAlmirah.books.forEach((book) => {
          if (book.title.toLowerCase().includes(searchTerm)) {
            searchResults.push({
              title: book.title,
              almirahId: almirah.id,
              section: section.toUpperCase(),
              shelf: book.shelf,
            });
          }
        });
      });
    });

    setResults(searchResults);
    setIsSearching(false);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for books..."
          className="w-full px-4 py-3 pl-12 rounded-xl bg-white dark:bg-slate-800 
                   border-2 border-uni-gold/30 dark:border-uni-maroon
                   focus:border-uni-orange dark:focus:border-uni-gold
                   shadow-sm focus:ring-2 focus:ring-uni-orange/20
                   dark:text-white transition-all duration-300"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-uni-orange/60" />
      </div>

      {/* Search Results */}
      {query.trim() !== '' && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-slate-800 rounded-xl shadow-xl 
                      border border-uni-gold/30 dark:border-uni-maroon overflow-hidden
                      transition-all duration-300">
          {isSearching ? (
            <div className="p-4 text-center text-uni-red/60 dark:text-uni-gold/60">
              Searching...
            </div>
          ) : results.length > 0 ? (
            <div className="max-h-96 overflow-y-auto">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="p-4 border-b border-uni-yellow/30 dark:border-uni-maroon/30 last:border-0
                           hover:bg-uni-yellow/10 dark:hover:bg-uni-maroon/20
                           transition-colors duration-200"
                >
                  <h3 className="font-medium text-uni-maroon dark:text-uni-yellow mb-1">
                    {result.title}
                  </h3>
                  <p className="text-sm text-uni-red/70 dark:text-uni-gold/70">
                    Located in Almirah {result.almirahId}, Section {result.section}, Shelf {result.shelf}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-uni-red/60 dark:text-uni-gold/60">
              No books found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
