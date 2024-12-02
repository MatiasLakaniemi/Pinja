import React, { useState } from 'react';

const ConsultantPage = ({ addConsultant, setView }) => {
  const [newConsultant, setNewConsultant] = useState({
    name: '',
    educationLevel: '',
    program: '',
    graduationYear: '',
    certifications: '',
    experience: '',
    projects: '',
    workYears: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewConsultant((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addConsultant(newConsultant);
    setNewConsultant({
      name: '',
      educationLevel: '',
      program: '',
      graduationYear: '',
      certifications: '',
      experience: '',
      projects: '',
      workYears: '',
    });
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
            Koulutusaste:
            <input
              type="text"
              name="educationLevel"
              value={newConsultant.educationLevel}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Koulutusohjelma:
            <input
              type="text"
              name="program"
              value={newConsultant.program}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Valmistumisvuosi:
            <input
              type="number"
              name="graduationYear"
              value={newConsultant.graduationYear}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Sertifikaatit ja kurssit:
            <input
              type="text"
              name="certifications"
              value={newConsultant.certifications}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Projekti- ja teknologiakokemus:
            <textarea
              name="projects"
              value={newConsultant.projects}
              onChange={handleChange}
              rows="3"
            />
          </label>
          <br />
          <label>
            Työkokemuksen kesto / aloitusvuosi:
            <input
              type="text"
              name="workYears"
              value={newConsultant.workYears}
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