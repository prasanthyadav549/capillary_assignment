import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GameContext from './GameContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GameContext>
    <App />
  </GameContext>
);


