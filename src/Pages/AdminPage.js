import React, { useState } from 'react';

const AdminPage = ({ consultants, setConsultants, setView }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedConsultant, setSelectedConsultant] = useState(null);

  const handleSearch = () => {
    if (!searchQuery) return consultants;

    return consultants.filter(
      (c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.technology.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.certification.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleEdit = (id) => {
    const consultant = consultants.find((c) => c.id === id);
    setSelectedConsultant(consultant);
  };

  const handleSave = () => {
    setConsultants((prevConsultants) =>
      prevConsultants.map((c) =>
        c.id === selectedConsultant.id ? selectedConsultant : c
      )
    );
    setSelectedConsultant(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Pääkäyttäjän hallinta</h2>
        <div>
          <input
            type="text"
            placeholder="Hae konsulttia"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div>
          {handleSearch().map((consultant) => (
            <div key={consultant.id} style={{ margin: '10px 0' }}>
              <p>
                <strong>Nimi:</strong> {consultant.name} <br />
                <strong>Teknologia:</strong> {consultant.technology} <br />
                <strong>Kokemus:</strong> {consultant.years} vuotta <br />
                <strong>Sertifikaatti:</strong> {consultant.certification}
              </p>
              <button onClick={() => handleEdit(consultant.id)}>Muokkaa</button>
            </div>
          ))}
        </div>
        {selectedConsultant && (
          <div>
            <h3>Muokkaa tietoja</h3>
            <input
              type="text"
              value={selectedConsultant.name}
              onChange={(e) =>
                setSelectedConsultant({ ...selectedConsultant, name: e.target.value })
              }
            />
            <button onClick={handleSave}>Tallenna</button>
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
