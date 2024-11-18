import React from 'react';
import '../App.css'; // Voit lisätä omaa tyyliä tähän tiedostoon, jos tarpeen

const AdminPage = ({ setView }) => (
  <div className="App">
    <header className="App-header">
      <h2>Pääkäyttäjän sivu</h2>
      <button className="App-button" onClick={() => setView('home')}>
        Takaisin
      </button>
    </header>
  </div>
);

export default AdminPage;