import React, { useState } from 'react';
import '../App.css'; 

const HomePage = ({ setView }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // Pääkäyttäjän kirjautumistila
  const [isLoginVisible, setIsLoginVisible] = useState(false); // Kirjautumislomakkeen näkyvyys
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Kirjautumislogiikka
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setIsAdminLoggedIn(true);
      setView('admin'); // Ohjaa pääkäyttäjän näkymään
    } else {
      setError('Virheellinen käyttäjätunnus tai salasana');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Lisää Pinjan logo */}
        <img 
          src="pinja-logo.png"  
          alt="Pinja Logo" 
          className="App-logo" 
        />
        
        <h1>Osaamisenhallintajärjestelmä</h1>
        <p>Valitse käyttäjärooli ja aloita käyttö.</p>
        <div>
          {/* Pääkäyttäjän kirjautumispainike */}
          {!isLoginVisible && !isAdminLoggedIn && (
            <button className="App-button" onClick={() => setIsLoginVisible(true)}>
              Pääkäyttäjä
            </button>
          )}

          {/* Kirjautumislomake */}
          {isLoginVisible && (
            <form 
              onSubmit={handleLogin} 
              style={{ textAlign: 'center', maxWidth: '300px', margin: '20px auto' }}
            >
              <h2>Kirjaudu sisään</h2>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <label>
                Käyttäjätunnus:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
              <br />
              <label>
                Salasana:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <br />
              <button type="submit">Kirjaudu</button>
              <button 
                type="button" 
                style={{ marginLeft: '10px' }} 
                onClick={() => setIsLoginVisible(false)}
              >
                Peruuta
              </button>
            </form>
          )}

          {/* Konsultin roolin valinta */}
          {!isLoginVisible && (
            <button className="App-button" onClick={() => setView('consultant')}>
              Konsultti
            </button>
          )}
        </div>
      </header>

      <footer className="App-footer">
        <p>&copy; 2024 Pinja Oy. Kaikki oikeudet pidätetään.</p>
      </footer>
    </div>
  );
};

export default HomePage;
