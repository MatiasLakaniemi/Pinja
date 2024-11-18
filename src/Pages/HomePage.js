import React from 'react';
import '../App.css'; // Tyyliä voidaan lisätä tähän tiedostoon, jos tarpeen

const HomePage = ({ setView }) => (
  <div className="App">
    <header className="App-header">
      {/* Lisää Pinjan logo */}
      <img 
        src="pinja-logo.png"  // Varmista, että polku on oikea
        alt="Pinja Logo" 
        className="App-logo"          // Lisää luokka logolle
      />
      
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

<footer className="App-footer">
<p>&copy; 2024 Pinja Oy. Kaikki oikeudet pidätetään.</p>
</footer>
</div>

);

export default HomePage;