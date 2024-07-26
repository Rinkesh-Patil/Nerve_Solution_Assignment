import React from 'react';
import './EmptyState.css';

const EmptyState = ({ date }) => {
  return (
    <div className="empty-state">
      <p>There are no strategies for {date}</p>
    </div>
  );
};

export default EmptyState;
