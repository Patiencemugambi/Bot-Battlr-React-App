import React from 'react';
import Bot from './Bot';

const YourBotArmy = ({ bots, releaseBot, dischargeBot }) => {
  return (
    <div className="army-container">
      {bots.map((bot) => (
        <Bot key={bot.id} bot={bot} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      ))}
    </div>
  );
};

export default YourBotArmy;
