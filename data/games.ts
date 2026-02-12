
import { GameCategory } from '../types';

export const GAMES = [
  {
    id: '2048',
    title: '2048',
    description: 'Merge tiles to reach the 2048 block in this addictive puzzle game.',
    thumbnail: 'https://picsum.photos/seed/2048/400/250',
    url: 'https://play2048.co/',
    category: GameCategory.PUZZLE,
    isHot: true
  },
  {
    id: 'hextris',
    title: 'Hextris',
    description: 'A fast-paced hexagonal puzzle inspired by Tetris.',
    thumbnail: 'https://picsum.photos/seed/hextris/400/250',
    url: 'https://hextris.io/',
    category: GameCategory.PUZZLE
  },
  {
    id: 'tetris',
    title: 'Tetris Classic',
    description: 'The world-famous block-stacking puzzle game.',
    thumbnail: 'https://picsum.photos/seed/tetris/400/250',
    url: 'https://chvin.github.io/react-tetris/',
    category: GameCategory.RETRO,
    isHot: true
  },
  {
    id: 'dino-run',
    title: 'Dino Run',
    description: 'Help the pixel dinosaur escape extinction!',
    thumbnail: 'https://picsum.photos/seed/dino/400/250',
    url: 'https://chromedino.com/',
    category: GameCategory.ACTION
  },
  {
    id: 'pacman',
    title: 'Pac-Man',
    description: 'Classic arcade maze-chase gameplay.',
    thumbnail: 'https://picsum.photos/seed/pacman/400/250',
    url: 'https://pacman.cc/',
    category: GameCategory.RETRO
  },
  {
    id: 'basketball-stars',
    title: 'Basketball Stars',
    description: 'Competitive 1v1 basketball action in your browser.',
    thumbnail: 'https://picsum.photos/seed/basket/400/250',
    url: 'https://play.basketballstars.com/',
    category: GameCategory.SPORTS,
    isHot: true
  },
  {
    id: 'flappy-bird',
    title: 'Flappy Bird',
    description: 'Flap through pipes in this notoriously difficult classic.',
    thumbnail: 'https://picsum.photos/seed/flappy/400/250',
    url: 'https://flappybird.io/',
    category: GameCategory.CASUAL
  },
  {
    id: 'snake',
    title: 'Snake',
    description: 'The classic Nokia game brought to the modern web.',
    thumbnail: 'https://picsum.photos/seed/snake/400/250',
    url: 'https://www.google.com/logos/2010/pacman10-i.html',
    category: GameCategory.CASUAL
  },
  {
    id: 'slope',
    title: 'Slope',
    description: 'An endless running game, speed down a slope.',
    thumbnail: 'https://picsum.photos/seed/slope/400/250',
    url: 'https://slope.io/',
    category: GameCategory.ACTION,
    isHot: true
  }
];
