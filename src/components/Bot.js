import React from 'react';

const Bot = ({ bot, enlistBot, releaseBot, dischargeBot }) => {
  const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  const handleEnlist = () => {
    enlistBot(id);
  };

  const handleRelease = () => {
    releaseBot(id);
  };

  const handleDischarge = () => {
    dischargeBot(id);
  };

  return (
    <div className="bot-card">
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>Class: {bot_class}</p>
      <p>Catchphrase: {catchphrase}</p>

      {enlistBot && (
        <button onClick={handleEnlist}>Enlist</button>
      )}

      {releaseBot && (
        <button onClick={handleRelease}>Release</button>
      )}

      {dischargeBot && (
        <button className="red-button" onClick={handleDischarge}>Discharge</button>
      )}
    </div>
  );
};

export default Bot;