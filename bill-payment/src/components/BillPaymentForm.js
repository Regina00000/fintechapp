import React, { useState } from 'react';
import './BillPaymentForm.css';

function BillPaymentForm() {
  const [tab, setTab] = useState('bill');
  const [category, setCategory] = useState('Electricity');
  const [amount, setAmount] = useState('8000');
  const [currency, setCurrency] = useState('OM');
  const [accountNumber, setAccountNumber] = useState('12345678');
  const [wallet, setWallet] = useState('MOMO');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Submitted:", {
      tab,
      category,
      amount,
      currency,
      accountNumber,
      wallet,
    });
    alert("Payment submitted!");
  };

  const handleBack = () => {
    setAmount('');
    setAccountNumber('');
  };

  return (
    <div className="form-container">
      <div className="tab-header">
        <span
          className={tab === 'bill' ? 'active-tab' : ''}
          onClick={() => setTab('bill')}
        >
          • Bill Payment
        </span>
        <span
          className={tab === 'merchant' ? 'active-tab' : ''}
          onClick={() => setTab('merchant')}
        >
          • Merchant Pay
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>Electricity</option>
            <option>Water</option>
            <option>Internet</option>
          </select>
        </div>
        <div className="form-group">
          <label>Amount</label>
          <div className="input-icon">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option value="OM">OM</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Bank/Momo/Wallet Number</label>
          <div className="input-icon">
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              required
            />
            <select value={wallet} onChange={(e) => setWallet(e.target.value)}>
              <option value="MOMO">MOMO</option>
              <option value="Bank">Bank</option>
              <option value="Wallet">Wallet</option>
            </select>
          </div>
        </div>
        <div className="form-buttons">
          <button type="button" className="back-btn" onClick={handleBack}>← Back</button>
          <button type="submit" className="pay-btn">PAY</button>
        </div>
      </form>
    </div>
  );
}

export default BillPaymentForm;