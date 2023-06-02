import React from 'react'
import { Button, Typography } from "@mui/material";
import { GameListState } from '../GameContext';
const SaveReward = () => {
    const {addRewards} = GameListState()
  return (
    <div>
    <Button variant="contained" onClick={addRewards}>
            <Typography variant="h6" component="span" className="title">
              Save Reward
            </Typography>
          </Button>
      
    </div>
  )
}

export default SaveReward
