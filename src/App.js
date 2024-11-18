import React, { useState } from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import AdminPage from './Pages/AdminPage';
import ConsultantPage from './Pages/ConsultantPage';

function App() {
  const [view, setView] = useState('home'); // Tila näkymän vaihtoon

  const renderView = () => {
    switch (view) {
      case 'admin':
        return <AdminPage setView={setView} />;
      case 'consultant':
        return <ConsultantPage setView={setView} />;
      default:
        return <HomePage setView={setView} />;
    }
  };

  return <div>{renderView()}</div>;
}

export default App;