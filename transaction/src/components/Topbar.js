import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <header className="topbar">
      <h1>Dashboard</h1>
      <div className="topbar-controls">
        <div className="notification">
          <span className="icon">🔔</span>
          <span className="badge">1</span>
        </div>
        <img 
          src="https://via.placeholder.com/40" 
          alt="User" 
          className="user-avatar"
        />
      </div>
    </header>
  );
};

export default Topbar;