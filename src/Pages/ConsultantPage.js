import React, { useState } from 'react';

const ConsultantPage = ({ addConsultant, setView }) => {
  const [newConsultant, setNewConsultant] = useState({
    name: '',
    technology: '',
    years: '',
    certification: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewConsultant((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addConsultant(newConsultant); // Lisää uusi konsultti yhteiseen tilaan
    setNewConsultant({ name: '', technology: '', years: '', certification: '' }); // Tyhjennä lomake
    alert('Konsultti lisätty!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Konsultin sivu</h2>
        <form onSubmit={handleSubmit} style={{ textAlign: 'left', maxWidth: '400px' }}>
          <label>
            Nimi:
            <input
              type="text"
              name="name"
              value={newConsultant.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Teknologia:
            <input
              type="text"
              name="technology"
              value={newConsultant.technology}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Kokemus (vuotta):
            <input
              type="number"
              name="years"
              value={newConsultant.years}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Sertifikaatti:
            <input
              type="text"
              name="certification"
              value={newConsultant.certification}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Lisää konsultti</button>
        </form>
        <button className="App-button" onClick={() => setView('home')}>
          Takaisin
        </button>
      </header>
    </div>
  );
};

export default ConsultantPage;