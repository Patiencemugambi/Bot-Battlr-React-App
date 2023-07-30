import React, { useState, useEffect } from 'react';

const BotCollection = ({ enlistBot }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('  http://localhost:3000')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="card-group">
        {bots.map(bot => (
          <div className="card" key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{bot.name}</h5>
              <p className="card-text">{bot.bot_class}</p>
              <button className="btn btn-primary" onClick={() => enlistBot(bot)}>Enlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
