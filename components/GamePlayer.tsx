
import React from 'react';

// Define interface for GamePlayer props
interface GamePlayerProps {
  game: any;
  onClose: () => void;
}

// Use React.FC to properly type the component
const GamePlayer: React.FC<GamePlayerProps> = ({ game, onClose }) => {
  const toggleFullscreen = () => {
    const iframe = document.getElementById('game-iframe');
    if (iframe && (iframe as any).requestFullscreen) {
      (iframe as any).requestFullscreen();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col">
      <div className="bg-slate-900 h-14 flex items-center justify-between px-4 sm:px-6 border-b border-slate-800">
        <div className="flex items-center gap-4">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h2 className="font-bold text-lg hidden sm:block">{game.title}</h2>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={toggleFullscreen}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span className="hidden sm:inline">Fullscreen</span>
          </button>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-rose-600 hover:bg-rose-500 rounded-lg text-sm font-bold transition-colors"
          >
            QUIT
          </button>
        </div>
      </div>

      <div className="flex-1 bg-black relative">
        <iframe
          id="game-iframe"
          src={game.url}
          className="w-full h-full border-0"
          title={game.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        />
      </div>
    </div>
  );
};

export default GamePlayer;
