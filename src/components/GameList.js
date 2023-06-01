import React, { useEffect, useState } from 'react';
import GameCard from './GameCard';
import '../styles/movielist.css';

export default function GameList({gameListArray}) {
  const [gameList, setGameList] = useState([]);

  const getGames = () => {
    setTimeout(() => {
     
      setGameList(gameListArray);
    }, 2000);
  }

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className="movie-list">
      {gameList.map((game) => (
        <GameCard game={game} key={game.title} />
      ))}
    </div>
  );
}
