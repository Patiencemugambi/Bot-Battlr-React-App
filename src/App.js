import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';

const App = () => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error(error));
  }, []);

  const enlistBot = (bot) => {
    // Implement the enlistBot functionality here
    // For example, add the bot to the army state
  };

  return (
    <div className="container">
      <h1>Bot Battlr</h1>
      {/* Pass the bots and enlistBot function as props */}
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
};

export default App;
