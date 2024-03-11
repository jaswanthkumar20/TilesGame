import React from 'react';

const SuccessScreen = ({ playerName, score, timeTaken }) => {
  return (
    <div>
      <h2>Success!</h2>
      <p>Congratulations, {playerName}!</p>
      <p>Your final score is: {score}</p>
      <p>Total time taken: {timeTaken} seconds</p>
    </div>
  );
};

export default SuccessScreen;
