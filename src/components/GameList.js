import React, { useEffect, useState } from 'react';
import GameCard from './GameCard';
import '../styles/movielist.css';
import { CircularProgress } from '@mui/material';

export default function GameList({gameListArray}) {
  const [gameList, setGameList] = useState([]);
  const [isLoading, setIsLoading] =useState(false);

  const getGames = () => {
    setIsLoading(true);
    setTimeout(() => {
      setGameList(gameListArray);
      setIsLoading(false);
    }, 1000);
  }

  useEffect(() => {
    getGames();
  }, []);
 
  if(isLoading) return <CircularProgress />
  return (
    <div className="movie-list">
      {gameList.map((game) => (
        <GameCard game={game} key={game.title} />
      ))}
    </div>
  );
}
