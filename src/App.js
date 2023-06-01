import './App.css';
import SignIn from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Header,GameList} from "./components";
import { WheelComponent ,ScratchCard,DiceGame} from './pages';
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
      title: 'Pick-n-win',
      url: process.env.PUBLIC_URL + '/pick-n-win.jpg',
      route: "pick-n-win"
    },
    {
      title: 'Dice game',
      url: process.env.PUBLIC_URL + '/logo192.png',
      route: "dice-game"
    }
  ];
  return (
        
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/game-list" element={<GameList gameListArray = {gameList}/>} />
          <Route path="/spin-n-win" element={<WheelComponent />} />
          <Route path="/scratch-card" element={<ScratchCard />} />
          <Route path="/dice-game" element={<DiceGame />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


