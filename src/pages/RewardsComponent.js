import React from 'react'
import { GameListState } from '../GameContext'
import { RewardCard } from '../components'

const Rewards = () => {
    const {rewards} = GameListState()
    const abc = ["hello","hello","hello","hello"]
  return (
    <div
       style={{display: 'flex', flexDirection: 'row',margin: '20px'}}
    >
       {abc?.map((reward,index) => (
            <div>
        <RewardCard reward={reward} key={index} />
        </div>
      ))}
    </div>
  )
}

export default Rewards
