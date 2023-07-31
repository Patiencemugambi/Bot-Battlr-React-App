import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

const App = () => {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    fetch(' http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching bots:', error));
  }, []);

  const enlistBot = (botId) => {
    const botToEnlist = bots.find((bot) => bot.id === botId);
    setYourBotArmy((prevArmy) => [...prevArmy, botToEnlist]);
  };

  const releaseBot = (botId) => {
    setYourBotArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    fetch(` http://localhost:3000/bots/${botId}`, { method: 'DELETE' })
      .then(() => {
        setYourBotArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));
      })
      .catch((error) => console.error('Error deleting bot:', error));
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <h2>Available Bots</h2>
      <BotCollection bots={bots} enlistBot={enlistBot} />

      <h2>Your Bot Army</h2>
      <YourBotArmy bots={yourBotArmy} releaseBot={releaseBot} dischargeBot={dischargeBot} />
    </div>
  );
};

export default App;
