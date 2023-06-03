import { Typography } from '@mui/material';
import React, { useState } from 'react';
import Dice from 'react-dice-roll';
import '../styles/diceGame.css'; 
import { GameListState } from '../GameContext';
import { GameComplete } from '../components';

const DiceGame = () => {
  const [value, setValue] = useState(0);
  const {
    reward,
    addRewards,
    setReward,
    lives,
  } = GameListState();
  const handleRoll = (value)=> {
         setValue(value)
         console.log(value)
         setReward(value)
         addRewards(value)
  }
  return (
    <>
    {lives ? (
      <div className="container">
      <Typography variant="h4" component="span" className="title">
           Roll Dice And Win Coins
        </Typography>
         <div className="lives-container">
        <Typography variant="h5" component="div">
          Lives left: {lives}
         </Typography>
         </div>
      <div className="diceContainer">
        <Dice onRoll={handleRoll} />
      </div>
      { reward &&
      <Typography variant="h6" component="div">
        Reward: {reward}
      </Typography>
      }
    </div> 
    ) : (
       <GameComplete />
    )}
  </>
  );
};

export default DiceGame;


 