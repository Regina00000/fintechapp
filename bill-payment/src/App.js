import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Header from './components/Header';
import BillPaymentForm from './components/BillPaymentForm';
import RightPanel from './components/RightPanel';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="content">
          <BillPaymentForm />
          <RightPanel />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;