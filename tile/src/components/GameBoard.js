import React, { useState, useEffect } from 'react';

const GameBoard = ({ playerName, tiles, setTiles, score, setScore, setTimeTaken, handleQuitGame }) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [selectedTile, setSelectedTile] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (index) => {
    const updatedTiles = [...tiles];
    if (updatedTiles[index].isRevealed) {
      return; // Do nothing if the tile is already revealed
    }

    updatedTiles[index].isRevealed = true;

    if (selectedTile !== null) {
      // Check for matching tiles
      if (updatedTiles[selectedTile].value === updatedTiles[index].value) {
        // Matching tiles found, increase score
        setScore((prevScore) => prevScore + 1);
      } else {
        // No matching tiles, hide both after a delay
        setTimeout(() => {
          updatedTiles[selectedTile].isRevealed = false;
          updatedTiles[index].isRevealed = false;
          setTiles(updatedTiles);
        }, 1000);
      }
      setSelectedTile(null); // Reset selected tile
    } else {
      // First tile selected
      setSelectedTile(index);
    }

    setTiles(updatedTiles);
  };

  const handleQuit = () => {
    clearInterval(elapsedTime);
    const totalElapsedTime = elapsedTime;
    handleQuitGame(totalElapsedTime);
  };

  return (
    <div>
      <h2>Welcome, {playerName}!</h2>
      <h3>Game Board</h3>
      <div className="board">
        {tiles.map((tile, index) => (
          <div
            key={tile.id}
            className={`tile ${tile.isRevealed ? 'revealed' : ''}`}
            onClick={() => handleClick(index)}
          >
            {tile.isRevealed && tile.value}
          </div>
        ))}
      </div>
      <div>
        <p>Score: {score}</p>
        <p>Time Taken: {elapsedTime} seconds</p>
      </div>
      <button onClick={handleQuit}>Quit Game</button>
    </div>
  );
};

export default GameBoard;
