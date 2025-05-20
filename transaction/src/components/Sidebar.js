import React from 'react';
import './Sidebar.css';
import logo from '../assets/logo.png'; // Import the logo image

const menuItems = [
  { label: 'Home', icon: '🏠' },
  { label: 'Transactions', icon: '📄', active: true },
  { label: 'Fund Transfer', icon: '💸' },
  { label: 'Bill Payment', icon: '🧾' },
  { label: 'Merchant Payment', icon: '💳' },
  { label: 'Notifications', icon: '🔔' },
  { label: 'Setting', icon: '⚙️' }
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="sidebar-logo" /> {/* Replace text with logo */}
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`nav-item ${item.active ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        
      </div>
    </aside>
  );
};

export default Sidebar;