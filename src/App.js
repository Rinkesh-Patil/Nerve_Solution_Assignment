import React, { useState } from 'react';
import ToggleView from './components/ToggleView';
import DateDropdown from './components/DateDropdown';
import StrategyCards from './components/StrategyCards';
import EmptyState from './components/EmptyState';
import { dateArray, strategyArray } from './data/data';
import './App.css';

const App = () => {
  const [selectedView, setSelectedView] = useState('Bullish');
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);

  const strategiesForSelectedView = strategyArray.find(view => view.View === selectedView);
  const strategiesForSelectedDate = strategiesForSelectedView?.Value[selectedDate] || [];

  return (
    <div className="app">
      <div className="branding">
        Nerve Solutions
      </div>
      <ToggleView selectedView={selectedView} setSelectedView={setSelectedView} />
      <DateDropdown dateArray={dateArray} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      {strategiesForSelectedDate.length > 0 ? (
        <StrategyCards strategies={strategiesForSelectedDate} />
      ) : (
        <EmptyState date={selectedDate} />
      )}
    </div>
  );
};

export default App;
