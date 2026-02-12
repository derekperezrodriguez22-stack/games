import React, { useState, useMemo } from 'react';
import { GAMES } from './data/games';
import { GameCategory } from './types';
import GameCard from './components/GameCard';
import GamePlayer from './components/GamePlayer';

const App = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [activeCategory, setActiveCategory] = useState(GameCategory.ALL);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = useMemo(() => {
    return (GAMES || []).filter(game => {
      const matchesCategory = activeCategory === GameCategory.ALL || game.category === activeCategory;
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            game.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const categories = Object.values(GameCategory);

  const handleRandom = () => {
    if (!GAMES.length) return;
    const randomIndex = Math.floor(Math.random() * GAMES.length);
    setSelectedGame(GAMES[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer" onClick={() => setActiveCategory(GameCategory.ALL)}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
            </div>
            <h1 className="font-orbitron text-xl tracking-tighter hidden sm:block uppercase">NEBULA <span className="text-blue-500">GAMES</span></h1>
          </div>

          <div className="flex-1 max-w-xl">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search unblocked games..." 
                className="w-full bg-slate-800 border border-slate-700 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={handleRandom}
              className="bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-900/40 active:scale-95"
            >
              Surprise Me
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {!searchQuery && activeCategory === GameCategory.ALL && (
          <div className="relative rounded-3xl overflow-hidden mb-12 bg-slate-900 border border-slate-800 group h-56 sm:h-72 shadow-2xl">
             <img 
               src="https://picsum.photos/seed/nebula-gaming/1200/400" 
               alt="Hero" 
               className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-center px-8 sm:px-16">
               <h2 className="text-4xl sm:text-6xl font-orbitron font-bold mb-3 tracking-tight">GAME ON <span className="text-blue-500">ANYWHERE</span></h2>
               <p className="text-slate-300 max-w-lg text-sm sm:text-lg mb-8 leading-relaxed">Discover thousands of unblocked web games. Fast, free, and distraction-free gaming experience for everyone.</p>
               <div className="flex gap-4">
                 <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-xl shadow-blue-600/20">Explore Hot</button>
                 <button className="bg-slate-800/80 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-xl backdrop-blur-sm border border-slate-700 transition-all">New Arrivals</button>
               </div>
             </div>
          </div>
        )}

        <div className="flex items-center gap-3 overflow-x-auto pb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-7 py-2.5 rounded-2xl text-sm font-bold whitespace-nowrap transition-all border ${
                activeCategory === cat 
                  ? 'bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-600/30 ring-2 ring-blue-500/20' 
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <GameCard 
                key={game.id} 
                game={game} 
                onClick={(g) => setSelectedGame(g)} 
              />
            ))
          ) : (
            <div className="col-span-full py-24 text-center">
               <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-slate-800 shadow-inner">
                  <svg className="w-10 h-10 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
               </div>
              <h3 className="text-2xl font-bold text-white">No games match your search</h3>
              <p className="text-slate-500 mt-3 mb-8">Try using different keywords or categories.</p>
              <button 
                onClick={() => { setActiveCategory(GameCategory.ALL); setSearchQuery(''); }}
                className="bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl font-bold text-blue-400 transition-colors"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-slate-900/50 border-t border-slate-800 py-16 mt-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16 text-sm text-slate-400">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-orbitron text-white text-xl mb-6 tracking-tight">NEBULA GAMES</h3>
            <p className="max-w-sm leading-relaxed mb-8">
              We provide the highest quality unblocked gaming experience on the web. Always free, always fast.
            </p>
            <div className="flex gap-4">
               {['Discord', 'Twitter', 'Github'].map(s => (
                 <span key={s} className="px-4 py-2 bg-slate-800 rounded-lg text-xs font-bold text-slate-400 hover:bg-blue-600 hover:text-white cursor-pointer transition-all border border-slate-700">{s}</span>
               ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="text-slate-400 space-y-4 font-medium">
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Trending Now</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Retro Classics</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Puzzle Hub</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="text-slate-400 space-y-4 font-medium">
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">DMCA Notice</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-800/50 text-center text-slate-600 text-xs">
           &copy; {new Date().getFullYear()} Nebula Games. Play responsibly.
        </div>
      </footer>

      {selectedGame && (
        <GamePlayer 
          game={selectedGame} 
          onClose={() => setSelectedGame(null)} 
        />
      )}
    </div>
  );
};

export default App;