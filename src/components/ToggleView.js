import React from 'react';
import './ToggleView.css';

const ToggleView = ({ selectedView, setSelectedView }) => {
  const views = ['Bullish', 'Bearish', 'RangeBound', 'Volatile'];

  return (
    <div className="toggle-view">
      {views.map(view => (
        <button
          key={view}
          className={`toggle-button ${view === selectedView ? 'active' : ''}`}
          onClick={() => setSelectedView(view)}
        >
          {view}
        </button>
      ))}
    </div>
  );
};

export default ToggleView;
