import { Button, Divider, Typography } from "@mui/material";
import WheelComponent from "react-wheel-of-prizes";
import "../styles/wheelComponent.css"
import { GameListState } from "../GameContext";
import { GameComplete} from "../components";

export default function App() {
  const {
    addRewards,
    setReward,
    lives,
  } = GameListState();

  const segments = [
    "10% off on Amazon",
    "100Rs on Myntra",
    "40% of on next Rapido ride",
    "better luck next time",
    "30% of Flipkart",
    "won uber pass",
    "20% of on Flipkart flight booking",
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];

  const onFinished = (winner) => {
    setReward(winner);
    addRewards(winner)
  };
  return (
    <>
      {lives ? (
        <div className="WheelContainer">
        <Divider />
          <Typography variant="h4" component="div" className="title">
            spin the wheel and win rewards
          </Typography>
          <div className="lives-container">
          <Typography variant="h5" component="div">
          Lives left: {lives}
          </Typography>
          </div>

          <div className="wheel">
            <WheelComponent
              segments={segments}
              segColors={segColors}
              winningSegment="won 222"
              onFinished={(winner) => onFinished(winner)}
              primaryColor="black"
              contrastColor="white"
              buttonText="Spin"
              isOnlyOnce={false}
              size={190}
              upDuration={500}
              downDuration={600}
              fontFamily="Arial"
            />
          </div>
        </div>
      ) : (
         <GameComplete />
      )}
    </>
  );
}
