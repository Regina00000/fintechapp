import React from 'react';
import './TransactionList.css';

const transactions = [
  { id: 1, method: 'Bank Transfer', time: '15:29', transId: '123456789', amount: '12,000', status: 'Pending' },
  { id: 2, method: 'Bank Transfer', time: '15:29', transId: '123456789', amount: '12,000', status: 'Approved' },
  { id: 3, method: 'Bank Transfer', time: '15:29', transId: '123456789', amount: '12,000', status: 'Approved' },
  { id: 4, method: 'Bank Transfer', time: '15:29', transId: '123456789', amount: '12,000', status: 'Declined' }
];

const TransactionList = () => {
  return (
    <div className="transaction-list">
      <div className="list-header">
        <div className="list-tabs">
          <button className="tab active">Past transactions</button>
          <button className="tab">Standing Order</button>
        </div>
        <button className="export-button">+ Export CSV</button>
      </div>
      <div className="transactions-container">
        {transactions.map((transaction) => (
          <div key={transaction.id} className={`transaction-item ${transaction.status.toLowerCase()}`}>
            <div className="transaction-method">
              <span className="method-icon">⬇️</span>
              <div>
                <p className="method-name">{transaction.method}</p>
                <p className="method-time">{transaction.time}</p>
              </div>
            </div>
            <div className="transaction-id">ID {transaction.transId}</div>
            <div className="transaction-amount">XAF {transaction.amount}</div>
            <div className="transaction-status">{transaction.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;