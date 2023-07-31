import React from 'react';
import Bot from './Bot';

const YourBotArmy = ({ bots, releaseBot, dischargeBot }) => {
  return (
    <div className="your-bot-army">
      {bots.map((bot) => (
        <Bot key={bot.id} bot={bot} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      ))}
    </div>
  );
};

export default YourBotArmy;
