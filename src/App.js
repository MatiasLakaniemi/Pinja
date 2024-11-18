import React, { useState } from 'react';
import './App.css';

function App() {
  const [view, setView] = useState('home'); // Tila näkymän vaihtoon

  const renderView = () => {
    switch (view) {
      case 'admin':
        return <AdminPage />;
      case 'consultant':
        return <ConsultantPage />;
      default:
        return <HomePage />;
    }
  };

  const HomePage = () => (
    <div className="App">
      <header className="App-header">
        <h1>Osaamisenhallintajärjestelmä</h1>
        <p>Valitse käyttäjärooli ja aloita käyttö.</p>
        <div>
          <button className="App-button" onClick={() => setView('admin')}>
            Pääkäyttäjä
          </button>
          <button className="App-button" onClick={() => setView('consultant')}>
            Konsultti
          </button>
        </div>
      </header>
    </div>
  );

  const AdminPage = () => (
    <div className="App">
      <header className="App-header">
        <h2>Pääkäyttäjän sivu</h2>
        <button className="App-button" onClick={() => setView('home')}>
          Takaisin
        </button>
      </header>
    </div>
  );

  const ConsultantPage = () => (
    <div className="App">
      <header className="App-header">
        <h2>Konsultin sivu</h2>
        <button className="App-button" onClick={() => setView('home')}>
          Takaisin
        </button>
      </header>
    </div>
  );

  return <div>{renderView()}</div>;
}

export default App;