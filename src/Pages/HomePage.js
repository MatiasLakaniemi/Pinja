import React from 'react';
import '../App.css'; // Voit lisätä omaa tyyliä tähän tiedostoon, jos tarpeen

const HomePage = ({ setView }) => (
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

export default HomePage;