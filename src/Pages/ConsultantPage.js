import React, { useState } from 'react';
import { jsPDF } from 'jspdf'; // Tuodaan jsPDF

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

  const [isEditing, setIsEditing] = useState(false); // Tarkistetaan, ollaanko muokkaamassa
  const [editConsultant, setEditConsultant] = useState({ ...newConsultant });

  // Käsitellään kenttien muutoksia
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewConsultant((prev) => ({ ...prev, [name]: value }));
    if (isEditing) {
      setEditConsultant((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Tallennetaan uusi konsultti ja palataan alkuperäiseen tilaan
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Jos ollaan muokkaamassa, päivitetään konsultin tiedot
      addConsultant(editConsultant, true);  // Lähetetään muokattu konsultti
      setIsEditing(false);
    } else {
      // Muuten lisätään uusi konsultti
      addConsultant(newConsultant, false);
    }
    // Ei nollata lomaketta
  };

  // Luodaan PDF tiedosto
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Nimi: ${newConsultant.name}`, 10, 10);
    doc.text(`Koulutusaste: ${newConsultant.educationLevel}`, 10, 20);
    doc.text(`Koulutusohjelma: ${newConsultant.program}`, 10, 30);
    doc.text(`Valmistumisvuosi: ${newConsultant.graduationYear}`, 10, 40);
    doc.text(`Sertifikaatit ja kurssit: ${newConsultant.certifications}`, 10, 50);
    doc.text(`Projekti- ja teknologiakokemus: ${newConsultant.projects}`, 10, 60);
    doc.text(`Työkokemus / aloitusvuosi: ${newConsultant.workYears}`, 10, 70);
    doc.save('konsultti_tiedot.pdf'); // Lataa PDF-tiedoston
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Konsultin sivu</h2>
        {/* Lomake */}
        <form onSubmit={handleSubmit} style={{ textAlign: 'left', maxWidth: '400px' }}>
          <label>
            Nimi:
            <input
              type="text"
              name="name"
              value={isEditing ? editConsultant.name : newConsultant.name}
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
              value={isEditing ? editConsultant.educationLevel : newConsultant.educationLevel}
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
              value={isEditing ? editConsultant.program : newConsultant.program}
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
              value={isEditing ? editConsultant.graduationYear : newConsultant.graduationYear}
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
              value={isEditing ? editConsultant.certifications : newConsultant.certifications}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Projekti- ja teknologiakokemus:
            <textarea
              name="projects"
              value={isEditing ? editConsultant.projects : newConsultant.projects}
              onChange={handleChange}
              rows="3"
            />
          </label>
          <br />
          <label>
            Työkokemus / aloitusvuosi:
            <input
              type="text"
              name="workYears"
              value={isEditing ? editConsultant.workYears : newConsultant.workYears}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          {/* Painike muuttuu sen mukaan, onko ollaan lisäämässä vai muokkaamassa */}
          <button type="submit">{isEditing ? 'Tallenna' : 'Tallenna'}</button>
        </form>
        {/* Jos konsultti on lisätty, mahdollisuus tulostaa PDF */}
        <div style={{ marginTop: '20px' }}>
          {newConsultant.name && !isEditing && (
            <button onClick={generatePDF}>Lataa PDF</button>
          )}
        </div>
        <button className="App-button" onClick={() => setView('home')}>
          Takaisin
        </button>
      </header>
    </div>
  );
};

export default ConsultantPage;
