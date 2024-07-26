import React from 'react';
import './DateDropdown.css';

const DateDropdown = ({ dateArray, selectedDate, setSelectedDate }) => {
  return (
    <div className="date-dropdown">
      <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}>
        {dateArray.map(date => (
          <option key={date} value={date}>{date}</option>
        ))}
      </select>
    </div>
  );
};

export default DateDropdown;
