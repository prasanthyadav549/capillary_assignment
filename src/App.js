import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Header,GameList, Alert,SignIn,SignUp} from "./components";
import { WheelComponent ,ScratchCard,DiceGame, RewardsComponent} from './pages';

function App() {

  const gameList = [
    {
      title: 'Spin And Win',
      url: process.env.PUBLIC_URL + '/logo.png',
      route: "spin-n-win",
    },
    {
      title: 'Scratch Card',
      url: process.env.PUBLIC_URL + '/scratch-card.jpg',
      route: "scratch-card"
    },
    
    {
      title: 'Dice game',
      url: process.env.PUBLIC_URL + '/logo192.png',
      route: "dice-game"
    },
    {
      title: 'Pick-n-win',
      url: process.env.PUBLIC_URL + '/pick-n-win.jpg',
      route: "pick-n-win"
    },

  ];

  return (
      
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/game-list" element={<GameList gameListArray={gameList} />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/spin-n-win" element={<WheelComponent />} />
          <Route path="/scratch-card" element={<ScratchCard />} />
          <Route path="/dice-game" element={<DiceGame />} />
          <Route path="/rewards" element={<RewardsComponent />} />
        </Routes>

      </div>
      <Alert />
    </Router>
   
  );
}

export default App;


