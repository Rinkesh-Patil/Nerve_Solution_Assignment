import React from 'react';
import './StrategyCards.css';

const StrategyCards = ({ strategies }) => {
  const strategyCount = strategies.reduce((acc, strategy) => {
    acc[strategy] = (acc[strategy] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="strategy-cards">
      {Object.entries(strategyCount).map(([strategy, count]) => (
        <div className="strategy-card" key={strategy}>
          <span className="strategy-name">{strategy}</span>
          <span className="strategy-count">* {count} {count > 1 ? 'Strategies' : 'Strategy'}</span>
        </div>
      ))}
    </div>
  );
};

export default StrategyCards;
