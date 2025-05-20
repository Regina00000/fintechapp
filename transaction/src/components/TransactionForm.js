import React, { useState } from 'react';
import './TransactionForm.css';

const TransactionForm = () => {
  const [amount, setAmount] = useState('');
  const [account, setAccount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sending ${amount} XAF to ${account}`);
  };

  return (
    <div className="transaction-form">
      <div className="form-header">
        <label className="form-title">Send Money</label>
        <label className="form-subtitle">Merchant Pay</label>
      </div>
      <p className="form-note">Transfer Charges rate 2%</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="8000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="123456789"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          className="form-input"
        />
        <div className="form-actions">
          <button type="button" className="secondary-button">Back</button>
          <button type="submit" className="primary-button">Send</button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;