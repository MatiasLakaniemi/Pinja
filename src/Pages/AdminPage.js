import React, { useState } from 'react';
import './AdminPage.css'; // Varmista, että tämä on oikeassa paikassa

const AdminPage = ({ consultants, setConsultants, setView }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedConsultant, setSelectedConsultant] = useState(null);

  // Suodattaa konsultit haun perusteella
  const handleSearch = () => {
    if (!searchQuery) return consultants;

    return consultants.filter(
      (c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.educationLevel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.certifications.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.projects.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Muokkaa konsultin tietoja
  const handleEdit = (id) => {
    const consultant = consultants.find((c) => c.id === id);
    setSelectedConsultant(consultant);
  };

  // Tallenna muokattu konsultti
  const handleSave = () => {
    setConsultants((prevConsultants) =>
      prevConsultants.map((c) =>
        c.id === selectedConsultant.id ? selectedConsultant : c
      )
    );
    setSelectedConsultant(null);
  };

  // Poista konsultti
  const handleRemove = (id) => {
    if (window.confirm('Haluatko varmasti poistaa konsultin?')) {
      setConsultants(consultants.filter((c) => c.id !== id));
    }
  };

  const filteredConsultants = handleSearch();

  return (
    <div className="AdminPage">
      <header className="AdminPage App-header">
        <h2>Pääkäyttäjän hallinta</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Hae konsulttia"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Näytetään, jos ei ole tuloksia */}
        {filteredConsultants.length === 0 ? (
          <p>Ei löytynyt tuloksia</p>
        ) : (
          <div className="consultant-list">
            {filteredConsultants.map((consultant) => (
              <div key={consultant.id} className="consultant-card">
                <p>
                  <strong>Nimi:</strong> {consultant.name} <br />
                  <strong>Koulutusaste:</strong> {consultant.educationLevel} <br />
                  <strong>Koulutusohjelma:</strong> {consultant.program} <br />
                  <strong>Valmistumisvuosi:</strong> {consultant.graduationYear} <br />
                  <strong>Sertifikaatit:</strong> {consultant.certifications} <br />
                  <strong>Projekti- ja teknologiakokemus:</strong> {consultant.projects} <br />
                  <strong>Työkokemus / aloitusvuosi:</strong> {consultant.workYears} <br />
                </p>
                <button className="edit-btn" onClick={() => handleEdit(consultant.id)}>
                  Muokkaa
                </button>
                <button className="remove-btn" onClick={() => handleRemove(consultant.id)}>
                  Poista
                </button>
              </div>
            ))}
          </div>
        )}

        {selectedConsultant && (
          <div className="consultant-form">
            <h3>Muokkaa konsultin tietoja</h3>
            <form>
              <label>
                Nimi:
                <input
                  type="text"
                  value={selectedConsultant.name}
                  onChange={(e) =>
                    setSelectedConsultant({ ...selectedConsultant, name: e.target.value })
                  }
                />
              </label>
              <label>
                Koulutusaste:
                <input
                  type="text"
                  value={selectedConsultant.educationLevel}
                  onChange={(e) =>
                    setSelectedConsultant({ ...selectedConsultant, educationLevel: e.target.value })
                  }
                />
              </label>
              <label>
                Koulutusohjelma:
                <input
                  type="text"
                  value={selectedConsultant.program}
                  onChange={(e) =>
                    setSelectedConsultant({ ...selectedConsultant, program: e.target.value })
                  }
                />
              </label>
              <label>
                Valmistumisvuosi:
                <input
                  type="number"
                  value={selectedConsultant.graduationYear}
                  onChange={(e) =>
                    setSelectedConsultant({ ...selectedConsultant, graduationYear: e.target.value })
                  }
                />
              </label>
              <label>
                Sertifikaatit ja kurssit:
                <input
                  type="text"
                  value={selectedConsultant.certifications}
                  onChange={(e) =>
                    setSelectedConsultant({ ...selectedConsultant, certifications: e.target.value })
                  }
                />
              </label>
              <label>
                Projekti- ja teknologiakokemus:
                <input
                  value={selectedConsultant.projects}
                  onChange={(e) =>
                    setSelectedConsultant({ ...selectedConsultant, projects: e.target.value })
                  }
                  rows="3"
                />
              </label>
              <label>
                Työkokemus / aloitusvuosi:
                <input
                  type="text"
                  value={selectedConsultant.workYears}
                  onChange={(e) =>
                    setSelectedConsultant({ ...selectedConsultant, workYears: e.target.value })
                  }
                />
              </label>
              <button type="button" onClick={handleSave}>
                Tallenna
              </button>
            </form>
          </div>
        )}

        <button className="App-button" onClick={() => setView('home')}>
          Takaisin
        </button>
      </header>
    </div>
  );
};

export default AdminPage;
