import { Typography } from '@mui/material';
import React, { useState } from 'react';
import Dice from 'react-dice-roll';
import '../styles/diceGame.css'; 

const DiceGame = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="container">
      <div className="diceContainer">
        <Dice onRoll={(value) => setValue(value)} />
      </div>
      <Typography variant="h6" component="div">
        Reward: {value}
      </Typography>
    </div>
  );
};

export default DiceGame;
