import React, { useEffect, useState } from "react";
import ScratchCard, { CUSTOM_BRUSH_PRESET } from "react-scratchcard-v2";
import { Button, Typography } from "@mui/material";
import { GameListState } from "../GameContext";
import { GameComplete } from "../components";

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
    setIsComplete(!isComplete);
  };

  const onComplete = () => {
    const randomPercentage = Math.floor(Math.random() * 100);
    setReward(randomPercentage);
    setIsComplete(!isComplete);
   // setLives((prevLives) => prevLives - 1);
    addRewards(randomPercentage); // Pass the randomPercentage to addRewards function
    
  };

  return (
    <>
      {lives ? (
        <div>
          <Typography variant="h4" component="div" className="title">
            spin the wheel and win rewards
          </Typography>
          <div>Lives left: {lives}</div>
          {isComplete && (
            <Button onClick={onClickReset}>Reset</Button>
          )}
          <div>
            <ScratchCard
              ref={ref}
              width={372}
              height={226}
              image={process.env.PUBLIC_URL + '/scratch-card2.jpg'}
              finishPercent={35}
              onComplete={onComplete}
              brushSize={25}
              customBrush={x}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {reward !== null && (
                  <Typography variant="h6" component="div">
                    {reward}Rs Cashback
                  </Typography>
                )}
              </div>
            </ScratchCard>
          </div>
        </div>
      ) : (
        <GameComplete />
      )}
    </>
  );
};

export default ScratchCardComponent;
