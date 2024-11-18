import React from 'react';
import '../App.css'; // Voit lisätä omaa tyyliä tähän tiedostoon, jos tarpeen

const ConsultantPage = ({ setView }) => (
  <div className="App">
    <header className="App-header">
      <h2>Konsultin sivu</h2>
      <button className="App-button" onClick={() => setView('home')}>
        Takaisin
      </button>
    </header>
  </div>
);

export default ConsultantPage;