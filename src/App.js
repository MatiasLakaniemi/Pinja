import React, { useState } from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import AdminPage from './Pages/AdminPage';
import ConsultantPage from './Pages/ConsultantPage';

function App() {
  const [view, setView] = useState('home');
  const [consultants, setConsultants] = useState([
    { id: 1, name: 'Matti Meikäläinen', technology: 'React', years: 3, certification: 'AWS Certified' },
    { id: 2, name: 'Maija Virtanen', technology: 'Node.js', years: 5, certification: 'Azure Certified' },
  ]);

  const handleAddConsultant = (newConsultant) => {
    setConsultants((prevConsultants) => [
      ...prevConsultants,
      { ...newConsultant, id: prevConsultants.length + 1 },
    ]);
  };

  const renderView = () => {
    switch (view) {
      case 'admin':
        return <AdminPage consultants={consultants} setConsultants={setConsultants} setView={setView} />;
      case 'consultant':
        return <ConsultantPage addConsultant={handleAddConsultant} setView={setView} />;
      default:
        return <HomePage setView={setView} />;
    }
  };

  return <div>{renderView()}</div>;
}

export default App;