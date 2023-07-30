import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error(error));
  }, []);

  const enlistBot = (bot) => {
    if (!army.find(existingBot => existingBot.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  return (
    <div className="container">
      <h1>Bot Battlr</h1>
      {/* Pass the bots and enlistBot function as props */}
      <BotCollection bots={bots} enlistBot={enlistBot} />
      {/* You can also render the YourBotArmy component here if needed */}
    </div>
  );
};

export default App;
