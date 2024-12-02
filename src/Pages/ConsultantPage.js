import React, { useState } from 'react';
import '../App.css';

const ConsultantPage = ({ setView }) => {
  // Konsultin tiedot tallennetaan tilaan
  const [consultantInfo, setConsultantInfo] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    skills: '',
  });

  const [isEditing, setIsEditing] = useState(false); // Muokkaustila

  // Päivitetään konsultin tietoja
  const handleChange = (e) => {
    const { name, value } = e.target;
    setConsultantInfo({ ...consultantInfo, [name]: value });
  };

  // Tulostetaan CV
  const printCV = () => {
    const content = `
      Nimi: ${consultantInfo.name}
      Sähköposti: ${consultantInfo.email}
      Puhelin: ${consultantInfo.phone}
      Kokemus: ${consultantInfo.experience}
      Osaamiset: ${consultantInfo.skills}
    `;
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`<pre>${content}</pre>`);
    newWindow.print();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Konsultin tiedot</h2>

        {/* Näytetään tai muokataan tietoja */}
        {isEditing ? (
          <form>
            <label>
              Nimi:
              <input
                type="text"
                name="name"
                value={consultantInfo.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Sähköposti:
              <input
                type="email"
                name="email"
                value={consultantInfo.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Puhelin:
              <input
                type="tel"
                name="phone"
                value={consultantInfo.phone}
                onChange={handleChange}
              />
            </label>
            <label>
              Kokemus:
              <textarea
                name="experience"
                value={consultantInfo.experience}
                onChange={handleChange}
              />
            </label>
            <label>
              Osaamiset:
              <textarea
                name="skills"
                value={consultantInfo.skills}
                onChange={handleChange}
              />
            </label>
            <button type="button" onClick={() => setIsEditing(false)}>
              Tallenna
            </button>
          </form>
        ) : (
          <div>
            <p><strong>Nimi:</strong> {consultantInfo.name || 'Ei tietoja'}</p>
            <p><strong>Sähköposti:</strong> {consultantInfo.email || 'Ei tietoja'}</p>
            <p><strong>Puhelin:</strong> {consultantInfo.phone || 'Ei tietoja'}</p>
            <p><strong>Kokemus:</strong> {consultantInfo.experience || 'Ei tietoja'}</p>
            <p><strong>Osaamiset:</strong> {consultantInfo.skills || 'Ei tietoja'}</p>
            <button onClick={() => setIsEditing(true)}>Muokkaa tietoja</button>
          </div>
        )}

        {/* CV:n tulostus */}
        <button className="App-button" onClick={printCV}>
          Tulosta CV
        </button>

        {/* Takaisin-painike */}
        <button className="App-button" onClick={() => setView('home')}>
          Takaisin
        </button>
      </header>
    </div>
  );
};

export default ConsultantPage;