
import React from 'react';

// Define interface for GameCard props
interface GameCardProps {
  game: any;
  onClick: (game: any) => void;
}

// Use React.FC to properly type the component and handle the 'key' prop
const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  return (
    <div 
      onClick={() => onClick(game)}
      className="group relative bg-slate-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] border border-slate-700"
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {game.isHot && (
        <div className="absolute top-2 right-2 bg-rose-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider animate-pulse">
          Hot
        </div>
      )}
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">{game.category}</span>
        </div>
        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{game.title}</h3>
        <p className="text-slate-400 text-sm line-clamp-2 mt-1">{game.description}</p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
          PLAY NOW
        </button>
      </div>
    </div>
  );
};

export default GameCard;
