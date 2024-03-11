import React, { useState } from 'react';

const UserNameEntry = ({ onStartGame }) => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onStartGame(name);
  };

  return (
    <div>
      <h2>Enter Your Name:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">Start Playing</button>
      </form>
    </div>
  );
};

export default UserNameEntry;
