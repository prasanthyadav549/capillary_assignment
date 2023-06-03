import React from 'react';
import { Button, Typography } from "@mui/material";
import { GameListState } from '../GameContext';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../styles/gameComplete.css'; // Import the CSS file

const GameComplete = () => {
  const { user, setAlert } = GameListState();
  const navigate = useNavigate();

  const handleClick = async () => {
    const playLimitRef = doc(db, "playLimit", user?.uid);
    try {
      await setDoc(playLimitRef, {
        limit: 0
      });
    } catch (error) {
      console.log(error);
      setAlert({
        open: true,
        type: "error",
        message: error.message,
      });
    }
    navigate("/game-list");
  };

  return (
    <div className="game-complete-container">
      <div
      className="game-complete-title"
      >
        <Typography variant="h4" component="span" >
          You have completed the game.
        </Typography>
      </div>
      <div className="restart-button">
        <Button variant="outlined" onClick={handleClick} >
          Restart the Game
        </Button>
      </div>
    </div>
  );
};

export default GameComplete;
