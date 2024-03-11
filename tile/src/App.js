import React, { useState } from 'react';
import './App.css';
import UserNameEntry from './components/UserNameEntry';
import GameBoard from './components/GameBoard';
import SuccessScreen from './components/SuccessScreen';

function App() {
  const [name, setName] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [tiles, setTiles] = useState([]);
  const [score, setScore] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const [quitGame, setQuitGame] = useState(false);

  const handleStartGame = (userName) => {
    setName(userName);
    setGameStarted(true);
    initializeGame();
  };

  const initializeGame = () => {
    // Initialize the game board with tiles
    const newTiles = [];
    for (let i = 0; i < 16; i++) {
      newTiles.push({ id: i, value: i % 8, isRevealed: false });
    }
    setTiles(newTiles);
  };

  const handleQuitGame = (elapsedTime) => {
    setGameStarted(false);
    setTiles([]);
    setScore(score);
    setQuitGame(true);
    setTimeTaken(elapsedTime);
  };

  return (
    <div className="App">
      {!gameStarted && <UserNameEntry onStartGame={handleStartGame} />}
      {gameStarted && !quitGame && (
        <GameBoard
          playerName={name}
          tiles={tiles}
          setTiles={setTiles}
          score={score}
          setScore={setScore}
          setTimeTaken={setTimeTaken}
          handleQuitGame={handleQuitGame}
        />
      )}
      {quitGame && !gameStarted && <SuccessScreen playerName={name} score={score} timeTaken={timeTaken} />}
    </div>
  );
}

export default App;
