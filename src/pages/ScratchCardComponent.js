import React, { useEffect, useState } from "react";
import ScratchCard, { CUSTOM_BRUSH_PRESET } from "react-scratchcard-v2";
import { Button, Typography } from "@mui/material";
import { GameListState } from "../GameContext";
import { GameComplete } from "../components";
import "../styles/scratchCard.css"; 

const x = CUSTOM_BRUSH_PRESET;

const ScratchCardComponent = () => {
  const ref = React.createRef();
  const {
    reward,
    setReward,
    addRewards,
    lives,
    setLives,
    isComplete,
    setIsComplete
  } = GameListState();

  const onClickReset = () => {
    ref.current && ref.current.reset();
    setIsComplete(false); // Always set isComplete to false when clicking reset
  };

  const onComplete = () => {
    const randomPercentage = Math.floor(Math.random() * 100);
    setReward(randomPercentage);
    addRewards(randomPercentage); // Pass the randomPercentage to addRewards function
    setIsComplete(true); // Set isComplete to true after setting the reward
  };

  return (
    <>
      {lives ? (
        <div className="scratch-card-container">
          <Typography variant="h4" component="div" className="title">
            Scratch and win rewards
          </Typography>
          <div className="lives-container">
          <Typography variant="h6" component="div">
          Lives left: {lives}
          </Typography>
          </div>
          {isComplete && (
            <Button  onClick={onClickReset} className="reset-button">
              Reset
            </Button>
          )}
         
          <div className="scratch-card-wrapper">
            <ScratchCard
              ref={ref}
              width={372}
              height={226}
              image={process.env.PUBLIC_URL + "/scratch-card2.jpg"}
              finishPercent={35}
              onComplete={onComplete}
              brushSize={25}
              customBrush={x}
              className = 'scratch-card-canvas'
            >
            </ScratchCard>
              <div className="reward-container">
                {reward !== null && (
                  <Typography variant="h6" component="div">
                    {reward}Rs Cashback
                  </Typography>
                )}
              </div>
          </div>
        </div>
      ) : (
        <GameComplete />
      )}
    </>
  );
};

export default ScratchCardComponent;
