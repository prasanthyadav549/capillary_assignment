import React from 'react';
import '../styles/gameCard.css';
import { Link } from 'react-router-dom';

export default function GameCard({ game }) {
  return (
    <Link className="game-card"
    to={`/${game.route}`}
    >
      <div className="image-container">
        <img src={game.url} alt={game.title} className="game-image" />
      </div>
      <p>{game.title}</p>
    </Link>
  );
}
