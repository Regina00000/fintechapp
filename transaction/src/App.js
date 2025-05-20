import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="content-area">
          <div className="left-column">
            <div className="balance-card">
              <h2>XAF 230,000</h2>
              <p>Total Balance</p>
            </div>
            <TransactionForm />
            <div className="wallet-card">
              <h3>Wallet Balance</h3>
              <p>XAF 78,500</p>
            </div>
          </div>
          <TransactionList />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;