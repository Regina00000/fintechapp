import React, { useState } from 'react';
import './RightPanel.css';

function RightPanel() {
  const [rating, setRating] = useState(0);

  return (
    <div className="right-panel">
      <div className="box">
        <button onClick={() => alert("Bank to Momo")}>Bank to Momo</button>
        <button onClick={() => alert("Momo to Bank")}>Momo to Bank</button>
      </div>
      <div className="box">
        <button onClick={() => alert("Buy Airtime")}>Buy Airtime</button>
        <button onClick={() => alert("Pay Bill")}>Pay Bill</button>
      </div>
      <div className="box review">
        <p>Review:</p>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
              onClick={() => setRating(star)}
            >
              ⭐
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightPanel;